import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, CheckCircle } from 'lucide-react';

const contactOptions = [
  { icon: Phone, title: 'Call Us', detail: '(+27) 076 630 9032', sub: 'Monday–Friday, 8am–5pm', href: 'tel:+27609953719' },
  { icon: MessageCircle, title: 'WhatsApp Us', detail: '(+27) 728-767-699', sub: 'Send us a message anytime', href: 'https://wa.me/+27728767699' },
  { icon: Mail, title: 'Email Us', detail: 'Reubrayptylty@gmail.com', sub: 'We typically respond within 1 business day', href: 'mailto:Reubrayptylty@gmail.com' },
  // { icon: MapPin, title: 'Visit Us', detail: '[Physical address — To be confirmed by Reubray]', sub: 'By appointment', href: '#' }   076 630 9032,
];

// --- Validation helpers -----------------------------------------------
const NAME_REGEX = /^[A-Za-z\s'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;
const MESSAGE_MAX_LENGTH = 2000;

function validateField(name, value, { required = false } = {}) {
  const v = (value || '').trim();
  switch (name) {
    case 'name':
      if (!v) return required ? 'Name is required.' : '';
      if (v.length > 100) return 'Name must be under 100 characters.';
      if (!NAME_REGEX.test(v)) return 'Name should only contain letters (no numbers or symbols).';
      return '';
    case 'email':
      if (!v) return 'Email is required.';
      if (v.length > 254) return 'Email address is too long.';
      if (!EMAIL_REGEX.test(v)) return 'Enter a valid email address (e.g. name@example.com).';
      return '';
    case 'phone':
      if (!v) return required ? 'Phone number is required.' : '';
      if (!PHONE_REGEX.test(v)) return 'Enter a 10-digit phone number (numbers only).';
      return '';
    case 'message':
      if (!v) return required ? 'Message is required.' : '';
      if (v.length > MESSAGE_MAX_LENGTH) return `Message must be under ${MESSAGE_MAX_LENGTH} characters.`;
      return '';
    default:
      return '';
  }
}
// ------------------------------------------------------------------------

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const updatePhone = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setForm((f) => ({ ...f, phone: digits }));
    setFieldErrors((fe) => ({ ...fe, phone: validateField('phone', digits) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const required = name === 'name' || name === 'email' || name === 'message';
    setFieldErrors((fe) => ({ ...fe, [name]: validateField(name, value, { required }) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const errors = {
      name: validateField('name', form.name, { required: true }),
      email: validateField('email', form.email, { required: true }),
      phone: validateField('phone', form.phone),
      message: validateField('message', form.message, { required: true }),
    };
    setFieldErrors(errors);
    if (Object.values(errors).some(Boolean)) {
      setError('Please fix the highlighted fields below.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'contact', ...form }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong sending your message. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = { border: '1px solid var(--rb-stone)', background: 'white', color: 'var(--rb-charcoal)', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' };
  const errorInputStyle = { ...inputStyle, border: '1px solid var(--rb-gold)' };
  const labelStyle = { fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--rb-navy)', marginBottom: '0.375rem', display: 'block' };
  const fieldErrorStyle = { fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--rb-gold)', marginTop: '0.25rem' };
  const inputClass = "w-full px-4 py-3 rounded border outline-none transition-all";

  const hasBlockingErrors = !form.name || !form.email || !form.message
    || Object.values(fieldErrors).some(Boolean);

  return (
    <div style={{ paddingTop: '6rem' }}>
      {/* HERO */}
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>We're here to help.</h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Reach out to the Reubray team — we'd be glad to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
            {contactOptions.map((opt) => (
              <a key={opt.title} href={opt.href} className="card-soft p-8 block text-center group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: 'rgba(15,31,77,0.07)' }}>
                  <opt.icon size={20} style={{ color: 'var(--rb-navy)' }} />
                </div>
                <h3 className="serif-display text-xl font-medium mb-2">{opt.title}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>{opt.detail}</p>
                <p className="text-xs" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>{opt.sub}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* CONTACT FORM */}
            <div>
              <div className="gold-rule" />
              <h2 className="serif-display text-3xl font-light mb-6">Send us a message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={44} className="mx-auto mb-4" style={{ color: 'var(--rb-gold)' }} />
                  <h3 className="serif-display text-2xl font-light mb-2">Message received.</h3>
                  <p className="text-sm" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input
                      name="name" value={form.name} onChange={update} onBlur={handleBlur}
                      maxLength={100} className={inputClass}
                      style={fieldErrors.name ? errorInputStyle : inputStyle}
                      aria-invalid={!!fieldErrors.name}
                    />
                    {fieldErrors.name && <p style={fieldErrorStyle}>{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email" name="email" value={form.email} onChange={update} onBlur={handleBlur}
                      className={inputClass}
                      style={fieldErrors.email ? errorInputStyle : inputStyle}
                      aria-invalid={!!fieldErrors.email}
                    />
                    {fieldErrors.email && <p style={fieldErrorStyle}>{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      name="phone" value={form.phone} onChange={updatePhone} onBlur={handleBlur}
                      inputMode="numeric" maxLength={10} placeholder="e.g. 0821234567"
                      className={inputClass}
                      style={fieldErrors.phone ? errorInputStyle : inputStyle}
                      aria-invalid={!!fieldErrors.phone}
                    />
                    {fieldErrors.phone && <p style={fieldErrorStyle}>{fieldErrors.phone}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Reason for contacting</label>
                    <select name="reason" value={form.reason} onChange={update} className={inputClass} style={inputStyle}>
                      <option value="">Select a reason</option>
                      <option>Request a quote</option><option>Request advice</option><option>General enquiry</option>
                      <option>Claim enquiry</option><option>Complaint</option><option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={update} onBlur={handleBlur}
                      rows={5} maxLength={MESSAGE_MAX_LENGTH} className={inputClass}
                      style={fieldErrors.message ? errorInputStyle : inputStyle}
                      aria-invalid={!!fieldErrors.message}
                    />
                    {fieldErrors.message && <p style={fieldErrorStyle}>{fieldErrors.message}</p>}
                  </div>
                  {error && <p className="text-sm" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif' }}>{error}</p>}
                  <button type="submit" className="btn-primary w-full" disabled={hasBlockingErrors || submitting} style={{ opacity: (hasBlockingErrors || submitting) ? 0.4 : 1 }}>
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* CALLBACK */}
            <div className="p-10 rounded-lg" style={{ background: 'var(--rb-navy)' }}>
              <div className="gold-rule" />
              <h2 className="serif-display text-3xl font-light mb-4" style={{ color: 'white' }}>Prefer that we contact you?</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Leave your details and a Reubray adviser will call you back at a time that suits you.
              </p>
              <a href="/request-advice" className="btn-gold block text-center">Request a Callback</a>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                  Reubray (Pty) Ltd · FSP No. 54667 · Regulated by the FSCA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}