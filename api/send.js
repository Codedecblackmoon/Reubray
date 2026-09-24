// import { Resend } from 'resend';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', 'POST');
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const body = req.body || {};
//     const { source, name, email, phone, ...fields } = body;

//     if (!name || !email) {
//       return res.status(400).json({ error: 'Missing required fields (name, email)' });
//     }

//     const apiKey = process.env.RESEND_API_KEY;
//     const recipient = process.env.EMAIL;
//     if (!apiKey || !recipient) {
//       return res.status(500).json({ error: 'Email service not configured' });
//     }

//     const resend = new Resend(apiKey);

//     // Build tailored subject + body per source page
//     let subject = `New enquiry from ${name}`;
//     let bodyText = '';

//     const line = (label, val) => (val ? `${label}: ${val}\n` : '');

//     if (source === 'quote') {
//       subject = `New Quote Request from ${name}`;
//       const types = fields.insuranceTypes && fields.insuranceTypes.length
//         ? fields.insuranceTypes.join(', ')
//         : 'N/A';
//       bodyText =
//         `A new quote request has been submitted via the Get a Quote page.\n\n` +
//         line('Full Name', `${name || ''} ${fields.surname || ''}`.trim()) +
//         line('Email', email) +
//         line('Phone', phone) +
//         line('Insurance Types', types) +
//         line('Date of Birth', fields.dob) +
//         line('Gender', fields.gender) +
//         line('Province', fields.province) +
//         line('Employment Status', fields.employment) +
//         line('Desired Cover Level', fields.coverLevel) +
//         line('Existing Cover', fields.existingCover) +
//         line('Dependants', fields.dependants) +
//         line('Reason for Seeking Cover', fields.reason) +
//         line('Preferred Contact Method', fields.contactMethod) +
//         line('Preferred Contact Time', fields.contactTime) +
//         line('Additional Info', fields.additionalInfo) +
//         `\nPOPIA Consent: ${fields.popia ? 'Yes' : 'No'}`;
//     } else if (source === 'advice') {
//       subject = `New Advice Request from ${name}`;
//       bodyText =
//         `A new advice request has been submitted via the Request Advice page.\n\n` +
//         line('Name', name) +
//         line('Email', email) +
//         line('Phone', phone) +
//         line('Client Type', fields.customerType) +
//         line('Area Requiring Assistance', fields.area) +
//         line('Message', fields.message) +
//         line('Preferred Contact Method', fields.contactMethod) +
//         line('Preferred Contact Time', fields.contactTime) +
//         `\nPOPIA Consent: ${fields.popia ? 'Yes' : 'No'}`;
//     } else {
//       subject = `New Contact Message from ${name}`;
//       bodyText =
//         `A new message has been submitted via the Contact page.\n\n` +
//         line('Name', name) +
//         line('Email', email) +
//         line('Phone', phone) +
//         line('Reason for Contacting', fields.reason) +
//         line('Message', fields.message);
//     }

//     const { data, error } = await resend.emails.send({
//       from: 'Reubray Website <onboarding@resend.dev>',
//       to: [recipient],
//       replyTo: email,
//       subject,
//       text: bodyText,
//     });

//     if (error) {
//       return res.status(502).json({ error: `Failed to send email: ${error.message}` });
//     }

//     return res.status(200).json({ success: true, id: data?.id });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }

import { Resend } from 'resend';

const NAME_REGEX = /^[A-Za-z\s'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

// Server-side validation. Never trust the client — these checks mirror the
// front-end forms but run again here since a request can bypass the browser.
function validateContactInfo({ name, surname, email, phone, phoneRequired }) {
  const trimmedName = (name || '').trim();
  if (!trimmedName) return 'Name is required.';
  if (trimmedName.length > 100) return 'Name must be under 100 characters.';
  if (!NAME_REGEX.test(trimmedName)) return 'Name should only contain letters (no numbers or symbols).';

  if (surname !== undefined) {
    const trimmedSurname = (surname || '').trim();
    if (!trimmedSurname) return 'Surname is required.';
    if (trimmedSurname.length > 100) return 'Surname must be under 100 characters.';
    if (!NAME_REGEX.test(trimmedSurname)) return 'Surname should only contain letters (no numbers or symbols).';
  }

  const trimmedEmail = (email || '').trim();
  if (!trimmedEmail) return 'Email is required.';
  if (trimmedEmail.length > 254) return 'Email address is too long.';
  if (!EMAIL_REGEX.test(trimmedEmail)) return 'Please provide a valid email address.';

  const trimmedPhone = (phone || '').trim();
  if (!trimmedPhone) {
    if (phoneRequired) return 'Phone number is required.';
  } else if (!PHONE_REGEX.test(trimmedPhone)) {
    return 'Phone number must contain exactly 10 digits, numbers only.';
  }

  return null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const { source, name, email, phone, ...fields } = body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Missing required fields (name, email)' });
    }

    // 'advice' and 'quote' forms require a phone number; the plain contact form doesn't.
    const phoneRequired = source === 'advice' || source === 'quote';
    const validationError = validateContactInfo({
      name,
      surname: fields.surname,
      email,
      phone,
      phoneRequired,
    });
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.EMAIL;
    if (!apiKey || !recipient) {
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const resend = new Resend(apiKey);

    // Build tailored subject + body per source page
    let subject = `New enquiry from ${name}`;
    let bodyText = '';

    const line = (label, val) => (val ? `${label}: ${val}\n` : '');

    if (source === 'quote') {
      subject = `New Quote Request from ${name}`;
      const types = fields.insuranceTypes && fields.insuranceTypes.length
        ? fields.insuranceTypes.join(', ')
        : 'N/A';
      bodyText =
        `A new quote request has been submitted via the Get a Quote page.\n\n` +
        line('Full Name', `${name || ''} ${fields.surname || ''}`.trim()) +
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

    const { data, error } = await resend.emails.send({
      from: 'Reubray Website <onboarding@resend.dev>',
      to: [recipient],
      replyTo: email,
      subject,
      text: bodyText,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(502).json({ error: `Failed to send email: ${error.message}` });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Unhandled error in /api/send:', error);
    return res.status(500).json({ error: error.message });
  }
}