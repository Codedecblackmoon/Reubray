import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight } from 'lucide-react';

const insuranceTypes = [
  { id: 'life', label: 'Life Insurance' },
  { id: 'health', label: 'Health-related Cover' },
  { id: 'short-term', label: 'Short-Term Insurance' },
  { id: 'business', label: 'Business Insurance' },
  { id: 'employee', label: 'Employee Insurance' },
  { id: 'not-sure', label: 'Not Sure' },
];

const provinces = ['Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape'];

// --- Validation helpers -----------------------------------------------
const NAME_REGEX = /^[A-Za-z\s'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;
const MESSAGE_MAX_LENGTH = 2000;

function validateField(name, value, { required = false } = {}) {
  const v = (value || '').trim();
  switch (name) {
    case 'name':
      if (!v) return required ? 'First name is required.' : '';
      if (v.length > 100) return 'First name must be under 100 characters.';
      if (!NAME_REGEX.test(v)) return 'First name should only contain letters (no numbers or symbols).';
      return '';
    case 'surname':
      if (!v) return required ? 'Surname is required.' : '';
      if (v.length > 100) return 'Surname must be under 100 characters.';
      if (!NAME_REGEX.test(v)) return 'Surname should only contain letters (no numbers or symbols).';
      return '';
    case 'email':
      if (!v) return 'Email is required.';
      if (v.length > 254) return 'Email address is too long.';
      if (!EMAIL_REGEX.test(v)) return 'Enter a valid email address (e.g. name@example.com).';
      return '';
    case 'phone':
      if (!v) return required ? 'Contact number is required.' : '';
      if (!PHONE_REGEX.test(v)) return 'Enter a 10-digit phone number (numbers only).';
      return '';
    case 'reason':
    case 'additionalInfo':
      if (v.length > MESSAGE_MAX_LENGTH) return `Must be under ${MESSAGE_MAX_LENGTH} characters.`;
      return '';
    default:
      return '';
  }
}
// ------------------------------------------------------------------------

export default function GetAQuote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    insuranceTypes: [],
    name: '', surname: '', email: '', phone: '', dob: '', gender: '', province: '', employment: '',
    coverLevel: '', existingCover: '', dependants: '', reason: '', additionalInfo: '',
    contactMethod: '', contactTime: '', popia: false,
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const toggleType = (id) => {
    setForm((f) => ({
      ...f,
      insuranceTypes: f.insuranceTypes.includes(id)
        ? f.insuranceTypes.filter((t) => t !== id)
        : [...f.insuranceTypes, id],
    }));
  };

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const updatePhone = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setForm((f) => ({ ...f, phone: digits }));
    setFieldErrors((fe) => ({ ...fe, phone: validateField('phone', digits, { required: true }) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const required = ['name', 'surname', 'email', 'phone'].includes(name);
    setFieldErrors((fe) => ({ ...fe, [name]: validateField(name, value, { required }) }));
  };

  // Validate step 2's personal details before letting the user continue.
  const goToStep3 = () => {
    const errors = {
      name: validateField('name', form.name, { required: true }),
      surname: validateField('surname', form.surname, { required: true }),
      email: validateField('email', form.email, { required: true }),
      phone: validateField('phone', form.phone, { required: true }),
    };
    setFieldErrors((fe) => ({ ...fe, ...errors }));
    if (Object.values(errors).some(Boolean)) {
      setError('Please fix the highlighted fields below.');
      return;
    }
    setError('');
    setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const errors = {
      name: validateField('name', form.name, { required: true }),
      surname: validateField('surname', form.surname, { required: true }),
      email: validateField('email', form.email, { required: true }),
      phone: validateField('phone', form.phone, { required: true }),
      reason: validateField('reason', form.reason),
      additionalInfo: validateField('additionalInfo', form.additionalInfo),
    };
    setFieldErrors((fe) => ({ ...fe, ...errors }));
    if (Object.values(errors).some(Boolean)) {
      setError('Please fix the highlighted fields — you may need to go back a step.');
      return;
    }
    if (!form.popia) {
      setError('Please confirm your POPIA consent before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'quote', ...form }),
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

  const inputClass = "w-full px-4 py-3 rounded border text-base outline-none transition-all focus:border-navy focus:ring-1 focus:ring-navy";
  const inputStyle = {
    border: '1px solid var(--rb-stone)',
    background: 'white',
    color: 'var(--rb-charcoal)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9375rem',
  };
  const errorInputStyle = { ...inputStyle, border: '1px solid var(--rb-gold)' };
  const fieldErrorStyle = { fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--rb-gold)', marginTop: '0.25rem' };

  const labelStyle = { fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--rb-navy)', marginBottom: '0.375rem', display: 'block', letterSpacing: '0.02em' };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ paddingTop: '7rem', background: 'var(--rb-parchment)' }}>
        <div className="max-w-xl w-full text-center">
          <CheckCircle size={56} className="mx-auto mb-6" style={{ color: 'var(--rb-gold)' }} />
          <h1 className="serif-display text-4xl font-light mb-4">Thank you. We've received your request.</h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Your quote request has been submitted successfully. A Reubray adviser will review your request and contact you according to our approved service process. We look forward to helping you find the right solution.
          </p>
          <Link to="/" className="btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '6rem', background: 'var(--rb-parchment)', minHeight: '100vh' }}>
      {/* HERO */}
      <section className="py-20 px-6 text-center" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'white' }}>
            Let's find the right cover for you.
          </h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Tell us a little about what you're looking for and a Reubray adviser will contact you.
          </p>
        </div>
      </section>

      {/* Step progress */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 flex-shrink-0"
                style={{
                  background: step >= s ? 'var(--rb-navy)' : 'var(--rb-stone)',
                  color: step >= s ? 'white' : 'var(--rb-muted)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {step > s ? <CheckCircle size={14} /> : s}
              </div>
              {s < 4 && <div className="h-px flex-1 transition-all duration-300" style={{ background: step > s ? 'var(--rb-navy)' : 'var(--rb-stone)' }} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} noValidate>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h2 className="serif-display text-3xl font-light mb-2">What do you need?</h2>
              <p className="text-sm mb-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>Select all that apply. You can choose more than one.</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {insuranceTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => toggleType(t.id)}
                    className="p-4 rounded text-left border transition-all duration-200"
                    style={{
                      border: form.insuranceTypes.includes(t.id) ? '2px solid var(--rb-navy)' : '1px solid var(--rb-stone)',
                      background: form.insuranceTypes.includes(t.id) ? 'rgba(15,31,77,0.05)' : 'white',
                      color: 'var(--rb-charcoal)',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: form.insuranceTypes.includes(t.id) ? 500 : 400,
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="btn-primary w-full"
                onClick={() => setStep(2)}
                disabled={form.insuranceTypes.length === 0}
                style={{ opacity: form.insuranceTypes.length === 0 ? 0.4 : 1 }}
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h2 className="serif-display text-3xl font-light mb-2">About you</h2>
              <p className="text-sm mb-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>Your personal details help us connect you with the right adviser.</p>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>First Name *</label>
                    <input
                      name="name" value={form.name} onChange={update} onBlur={handleBlur}
                      maxLength={100} className={inputClass}
                      style={fieldErrors.name ? errorInputStyle : inputStyle}
                      aria-invalid={!!fieldErrors.name}
                    />
                    {fieldErrors.name && <p style={fieldErrorStyle}>{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Surname *</label>
                    <input
                      name="surname" value={form.surname} onChange={update} onBlur={handleBlur}
                      maxLength={100} className={inputClass}
                      style={fieldErrors.surname ? errorInputStyle : inputStyle}
                      aria-invalid={!!fieldErrors.surname}
                    />
                    {fieldErrors.surname && <p style={fieldErrorStyle}>{fieldErrors.surname}</p>}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    required type="email" name="email" value={form.email} onChange={update} onBlur={handleBlur}
                    className={inputClass}
                    style={fieldErrors.email ? errorInputStyle : inputStyle}
                    aria-invalid={!!fieldErrors.email}
                  />
                  {fieldErrors.email && <p style={fieldErrorStyle}>{fieldErrors.email}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Contact Number *</label>
                  <input
                    name="phone" value={form.phone} onChange={updatePhone} onBlur={handleBlur}
                    inputMode="numeric" maxLength={10} placeholder="e.g. 0821234567"
                    className={inputClass}
                    style={fieldErrors.phone ? errorInputStyle : inputStyle}
                    aria-invalid={!!fieldErrors.phone}
                  />
                  {fieldErrors.phone && <p style={fieldErrorStyle}>{fieldErrors.phone}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label style={labelStyle}>Date of Birth</label><input type="date" name="dob" value={form.dob} onChange={update} className={inputClass} style={inputStyle} /></div>
                  <div>
                    <label style={labelStyle}>Gender</label>
                    <select name="gender" value={form.gender} onChange={update} className={inputClass} style={inputStyle}>
                      <option value="">Prefer not to say</option>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Province</label>
                    <select name="province" value={form.province} onChange={update} className={inputClass} style={inputStyle}>
                      <option value="">Select province</option>
                      {provinces.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Employment Status</label>
                    <select name="employment" value={form.employment} onChange={update} className={inputClass} style={inputStyle}>
                      <option value="">Select status</option>
                      <option>Employed</option><option>Self-employed</option><option>Business owner</option><option>Unemployed</option><option>Retired</option>
                    </select>
                  </div>
                </div>
              </div>
              {error && <p className="text-sm mt-4" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif' }}>{error}</p>}
              <div className="flex gap-4 mt-8">
                <button type="button" className="btn-secondary flex-1" onClick={() => setStep(1)}>Back</button>
                <button type="button" className="btn-primary flex-1" onClick={goToStep3}>Continue</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h2 className="serif-display text-3xl font-light mb-2">Your need</h2>
              <p className="text-sm mb-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>Help us understand what you are looking for.</p>
              <div className="space-y-5">
                <div>
                  <label style={labelStyle}>Desired level of cover</label>
                  <select name="coverLevel" value={form.coverLevel} onChange={update} className={inputClass} style={inputStyle}>
                    <option value="">Select an option</option>
                    <option>Basic cover</option><option>Moderate cover</option><option>Comprehensive cover</option><option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Existing cover</label>
                  <select name="existingCover" value={form.existingCover} onChange={update} className={inputClass} style={inputStyle}>
                    <option value="">Select an option</option>
                    <option>No existing cover</option><option>Some existing cover</option><option>Comprehensive existing cover</option><option>Unsure</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Dependants</label>
                  <select name="dependants" value={form.dependants} onChange={update} className={inputClass} style={inputStyle}>
                    <option value="">Select an option</option>
                    <option>None</option><option>1–2 dependants</option><option>3–4 dependants</option><option>5 or more dependants</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Main reason for seeking cover</label>
                  <textarea
                    name="reason" value={form.reason} onChange={update} onBlur={handleBlur}
                    rows={3} maxLength={MESSAGE_MAX_LENGTH} className={inputClass}
                    style={fieldErrors.reason ? errorInputStyle : inputStyle}
                    placeholder="Briefly describe what you are looking to protect or achieve..."
                  />
                  {fieldErrors.reason && <p style={fieldErrorStyle}>{fieldErrors.reason}</p>}
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button type="button" className="btn-secondary flex-1" onClick={() => setStep(2)}>Back</button>
                <button type="button" className="btn-primary flex-1" onClick={() => setStep(4)}>Continue</button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <h2 className="serif-display text-3xl font-light mb-2">Contact preference</h2>
              <p className="text-sm mb-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>How would you like a Reubray adviser to reach you?</p>
              <div className="space-y-5">
                <div>
                  <label style={labelStyle}>Preferred contact method</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Phone', 'Email', 'WhatsApp'].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, contactMethod: m }))}
                        className="py-3 rounded border text-sm transition-all duration-200"
                        style={{
                          border: form.contactMethod === m ? '2px solid var(--rb-navy)' : '1px solid var(--rb-stone)',
                          background: form.contactMethod === m ? 'rgba(15,31,77,0.05)' : 'white',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: form.contactMethod === m ? 500 : 400,
                          color: 'var(--rb-charcoal)',
                        }}
                      >{m}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Preferred contact time (optional)</label>
                  <select name="contactTime" value={form.contactTime} onChange={update} className={inputClass} style={inputStyle}>
                    <option value="">No preference</option>
                    <option>Morning (8am–12pm)</option><option>Afternoon (12pm–5pm)</option><option>Evening (after 5pm)</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Anything else we should know? (optional)</label>
                  <textarea
                    name="additionalInfo" value={form.additionalInfo} onChange={update} onBlur={handleBlur}
                    rows={3} maxLength={MESSAGE_MAX_LENGTH} className={inputClass}
                    style={fieldErrors.additionalInfo ? errorInputStyle : inputStyle}
                  />
                  {fieldErrors.additionalInfo && <p style={fieldErrorStyle}>{fieldErrors.additionalInfo}</p>}
                </div>
                <div className="p-6 rounded" style={{ background: 'rgba(15,31,77,0.04)', border: '1px solid var(--rb-stone)' }}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.popia}
                      onChange={(e) => setForm((f) => ({ ...f, popia: e.target.checked }))}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
                      I consent to Reubray (Pty) Ltd collecting, processing, and using my personal information for the purpose of providing financial and insurance advisory services, in accordance with the Protection of Personal Information Act (POPIA). I consent to being contacted by a Reubray adviser regarding my request.
                    </span>
                  </label>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
                  Reubray (Pty) Ltd (FSP No. 54667) is a licensed Financial Services Provider. This request does not constitute a binding insurance quotation or contract. A qualified adviser will review your information and contact you to discuss your needs. All advice is subject to Reubray's authorised activities and applicable product provider terms.
                </p>
              </div>
              {error && <p className="text-sm mt-4" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif' }}>{error}</p>}
              <div className="flex gap-4 mt-8">
                <button type="button" className="btn-secondary flex-1" onClick={() => setStep(3)}>Back</button>
                <button type="submit" className="btn-primary w-full" disabled={!form.popia || submitting} style={{ opacity: (!form.popia || submitting) ? 0.4 : 1 }}>
                  {submitting ? 'Sending…' : 'Request My Quote'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}