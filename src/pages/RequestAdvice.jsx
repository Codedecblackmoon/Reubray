import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function RequestAdvice() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', customerType: '', area: '', message: '', contactMethod: '', contactTime: '', popia: false,
  });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'advice', ...form }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong submitting your request. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = { border: '1px solid var(--rb-stone)', background: 'white', color: 'var(--rb-charcoal)', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' };
  const labelStyle = { fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--rb-navy)', marginBottom: '0.375rem', display: 'block' };
  const inputClass = "w-full px-4 py-3 rounded border text-base outline-none transition-all";

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ paddingTop: '7rem', background: 'var(--rb-parchment)' }}>
        <div className="max-w-xl w-full text-center">
          <CheckCircle size={56} className="mx-auto mb-6" style={{ color: 'var(--rb-gold)' }} />
          <h1 className="serif-display text-4xl font-light mb-4">Thank you. We've received your request.</h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            A Reubray adviser will review your request and be in touch to discuss how we can best help you. We look forward to the conversation.
          </p>
          <Link to="/" className="btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '6rem', background: 'var(--rb-parchment)', minHeight: '100vh' }}>
      <section className="py-20 px-6 text-center" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'white' }}>
            Not sure what you need?<br />
            <em style={{ color: 'var(--rb-gold-light)' }}>Let's talk.</em>
          </h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Speak with a Reubray adviser about your financial or insurance needs — no pressure, just honest advice.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label style={labelStyle}>Full Name *</label><input required name="name" value={form.name} onChange={update} className={inputClass} style={inputStyle} /></div>
            <div><label style={labelStyle}>Email Address *</label><input required type="email" name="email" value={form.email} onChange={update} className={inputClass} style={inputStyle} /></div>
          </div>
          <div><label style={labelStyle}>Contact Number *</label><input required name="phone" value={form.phone} onChange={update} className={inputClass} style={inputStyle} /></div>
          <div>
            <label style={labelStyle}>I am a</label>
            <select name="customerType" value={form.customerType} onChange={update} className={inputClass} style={inputStyle}>
              <option value="">Select type</option>
              <option>Personal / Individual</option>
              <option>SME / Business Owner</option>
              <option>Corporate / Organisation</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Area requiring assistance</label>
            <select name="area" value={form.area} onChange={update} className={inputClass} style={inputStyle}>
              <option value="">Select area</option>
              <option>Life Insurance</option>
              <option>Health-related Cover</option>
              <option>Short-Term Insurance</option>
              <option>Business Risk Insurance</option>
              <option>Employee Insurance</option>
              <option>Financial Planning</option>
              <option>Not sure — I need general advice</option>
            </select>
          </div>
          <div><label style={labelStyle}>Message (optional)</label><textarea name="message" value={form.message} onChange={update} rows={4} className={inputClass} style={inputStyle} placeholder="Briefly describe your situation or what you'd like to discuss..." /></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Preferred contact method</label>
              <select name="contactMethod" value={form.contactMethod} onChange={update} className={inputClass} style={inputStyle}>
                <option value="">No preference</option>
                <option>Phone</option><option>Email</option><option>WhatsApp</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Preferred contact time</label>
              <select name="contactTime" value={form.contactTime} onChange={update} className={inputClass} style={inputStyle}>
                <option value="">No preference</option>
                <option>Morning (8am–12pm)</option><option>Afternoon (12pm–5pm)</option><option>Evening (after 5pm)</option>
              </select>
            </div>
          </div>
          <div className="p-6 rounded" style={{ background: 'rgba(15,31,77,0.04)', border: '1px solid var(--rb-stone)' }}>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.popia} onChange={(e) => setForm((f) => ({ ...f, popia: e.target.checked }))} className="mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
                I consent to Reubray (Pty) Ltd collecting and using my personal information to respond to my advice request, in accordance with POPIA. I consent to being contacted by a Reubray adviser.
              </span>
            </label>
          </div>
          {error && <p className="text-sm" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif' }}>{error}</p>}
          <button type="submit" className="btn-primary w-full" disabled={!form.name || !form.email || !form.phone || !form.popia || submitting} style={{ opacity: (!form.name || !form.email || !form.phone || !form.popia || submitting) ? 0.4 : 1 }}>
            {submitting ? 'Sending…' : 'Request Advice'}
          </button>
        </form>
      </div>
    </div>
  );
}