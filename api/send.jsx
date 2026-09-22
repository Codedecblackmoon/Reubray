import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function(req) {
  try {
    const body = await req.json();
    const { source, name, email, phone, ...fields } = body;

    if (!name || !email) {
      return Response.json({ error: 'Missing required fields (name, email)' }, { status: 400 });
    }

    const apiKey = new Resend(process.env.RESEND_API_KEY);
    const recipient = new Resend(process.env.EMAIL);
    if (!apiKey || !recipient) {
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // Build tailored subject + body per source page
    let subject = `New enquiry from ${name}`;
    // let bodyText = '';

    const line = (label, val) => val ? `${label}: ${val}\n` : '';

    if (source === 'quote') {
      subject = `New Quote Request from ${name}`;
      const types = fields.insuranceTypes && fields.insuranceTypes.length
        ? fields.insuranceTypes.join(', ')
        : 'N/A';
      bodyText =
        `A new quote request has been submitted via the Get a Quote page.\n\n` +
        line('Full Name', `${fields.name || ''} ${fields.surname || ''}`.trim()) +
        line('Email', email) +
        line('Phone', phone) +
        line('Insurance Types', types) +
        line('Date of Birth', fields.dob) +
        line('Gender', fields.gender) +
        line('Province', fields.province) +
        line('Employment Status', fields.employment) +
        line('Desired Cover Level', fields.coverLevel) +
        line('Existing Cover', fields.existingCover) +
        line('Dependants', fields.dependants) +
        line('Reason for Seeking Cover', fields.reason) +
        line('Preferred Contact Method', fields.contactMethod) +
        line('Preferred Contact Time', fields.contactTime) +
        line('Additional Info', fields.additionalInfo) +
        `\nPOPIA Consent: ${fields.popia ? 'Yes' : 'No'}`;
    } else if (source === 'advice') {
      subject = `New Advice Request from ${name}`;
      bodyText =
        `A new advice request has been submitted via the Request Advice page.\n\n` +
        line('Name', name) +
        line('Email', email) +
        line('Phone', phone) +
        line('Client Type', fields.customerType) +
        line('Area Requiring Assistance', fields.area) +
        line('Message', fields.message) +
        line('Preferred Contact Method', fields.contactMethod) +
        line('Preferred Contact Time', fields.contactTime) +
        `\nPOPIA Consent: ${fields.popia ? 'Yes' : 'No'}`;
    } else {
      subject = `New Contact Message from ${name}`;
      bodyText =
        `A new message has been submitted via the Contact page.\n\n` +
        line('Name', name) +
        line('Email', email) +
        line('Phone', phone) +
        line('Reason for Contacting', fields.reason) +
        line('Message', fields.message);
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Reubray Website <onboarding@resend.dev>',
        to: [recipient],
        replyTo: email,
        subject,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      return Response.json({ error: `Failed to send email: ${errText}` }, { status: 502 });
    }

    const data = await resendResponse.json();
    return Response.json({ success: true, id: data.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}