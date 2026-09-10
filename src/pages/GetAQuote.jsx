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

export default function GetAQuote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    insuranceTypes: [],
    name: '', surname: '', email: '', phone: '', dob: '', gender: '', province: '', employment: '',
    coverLevel: '', existingCover: '', dependants: '', reason: '', additionalInfo: '',
    contactMethod: '', contactTime: '', popia: false,
  });

  const toggleType = (id) => {
    setForm((f) => ({
      ...f,
      insuranceTypes: f.insuranceTypes.includes(id)
        ? f.insuranceTypes.filter((t) => t !== id)
        : [...f.insuranceTypes, id],
    }));
  };

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded border text-base outline-none transition-all focus:border-navy focus:ring-1 focus:ring-navy";
  const inputStyle = {
    border: '1px solid var(--rb-stone)',
    background: 'white',
    color: 'var(--rb-charcoal)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9375rem',
  };

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

        <form onSubmit={handleSubmit}>

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
                  <div><label style={labelStyle}>First Name *</label><input required name="name" value={form.name} onChange={update} className={inputClass} style={inputStyle} /></div>
                  <div><label style={labelStyle}>Surname *</label><input required name="surname" value={form.surname} onChange={update} className={inputClass} style={inputStyle} /></div>
                </div>
                <div><label style={labelStyle}>Email Address *</label><input required type="email" name="email" value={form.email} onChange={update} className={inputClass} style={inputStyle} /></div>
                <div><label style={labelStyle}>Contact Number *</label><input required name="phone" value={form.phone} onChange={update} className={inputClass} style={inputStyle} /></div>
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
              <div className="flex gap-4 mt-8">
                <button type="button" className="btn-secondary flex-1" onClick={() => setStep(1)}>Back</button>
                <button type="button" className="btn-primary flex-1" onClick={() => setStep(3)} disabled={!form.name || !form.email || !form.phone} style={{ opacity: (!form.name || !form.email || !form.phone) ? 0.4 : 1 }}>Continue</button>
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
                  <textarea name="reason" value={form.reason} onChange={update} rows={3} className={inputClass} style={inputStyle} placeholder="Briefly describe what you are looking to protect or achieve..." />
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
              <div className="flex gap-4 mt-8">
                <button type="button" className="btn-secondary flex-1" onClick={() => setStep(3)}>Back</button>
                <button
                  type="submit"
                  className="btn-gold flex-1"
                  disabled={!form.popia}
                  style={{ opacity: !form.popia ? 0.4 : 1 }}
                >
                  Request My Quote
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}