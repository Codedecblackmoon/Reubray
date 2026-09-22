import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, CheckCircle } from 'lucide-react';

const contactOptions = [
  { icon: Phone, title: 'Call Us', detail: '(+27) 076 630 9032', sub: 'Monday–Friday, 8am–5pm', href: 'tel:+27609953719' },
  { icon: MessageCircle, title: 'WhatsApp Us', detail: '(+27) 728-767-699', sub: 'Send us a message anytime', href: 'https://wa.me/+27728767699' },
  { icon: Mail, title: 'Email Us', detail: 'Reubrayptylty@gmail.com', sub: 'We typically respond within 1 business day', href: 'mailto:Reubrayptylty@gmail.com' },
  // { icon: MapPin, title: 'Visit Us', detail: '[Physical address — To be confirmed by Reubray]', sub: 'By appointment', href: '#' }   076 630 9032,
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' });
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const inputStyle = { border: '1px solid var(--rb-stone)', background: 'white', color: 'var(--rb-charcoal)', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' };
  const labelStyle = { fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--rb-navy)', marginBottom: '0.375rem', display: 'block' };
  const inputClass = "w-full px-4 py-3 rounded border outline-none transition-all";

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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><label style={labelStyle}>Name *</label><input required name="name" value={form.name} onChange={update} className={inputClass} style={inputStyle} /></div>
                  <div><label style={labelStyle}>Email *</label><input required type="email" name="email" value={form.email} onChange={update} className={inputClass} style={inputStyle} /></div>
                  <div><label style={labelStyle}>Phone</label><input name="phone" value={form.phone} onChange={update} className={inputClass} style={inputStyle} /></div>
                  <div>
                    <label style={labelStyle}>Reason for contacting</label>
                    <select name="reason" value={form.reason} onChange={update} className={inputClass} style={inputStyle}>
                      <option value="">Select a reason</option>
                      <option>Request a quote</option><option>Request advice</option><option>General enquiry</option>
                      <option>Claim enquiry</option><option>Complaint</option><option>Other</option>
                    </select>
                  </div>
                  <div><label style={labelStyle}>Message *</label><textarea required name="message" value={form.message} onChange={update} rows={5} className={inputClass} style={inputStyle} /></div>
                  <button type="submit" className="btn-primary w-full" disabled={!form.name || !form.email || !form.message} style={{ opacity: (!form.name || !form.email || !form.message) ? 0.4 : 1 }}>Send Message</button>
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