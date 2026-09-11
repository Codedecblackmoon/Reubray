import { Link } from 'react-router-dom';
import { FileText, Phone, MessageCircle, AlertCircle } from 'lucide-react';

const claimSteps = [
  { num: '01', title: 'Claim received', desc: 'Your claim notification is received and logged by Reubray.' },
  { num: '02', title: 'Documents reviewed', desc: 'Supporting documentation is reviewed to ensure completeness.' },
  { num: '03', title: 'Additional information', desc: 'Where required, additional information or documents may be requested.' },
  { num: '04', title: 'Claim assessed', desc: 'The claim is assessed by the applicable insurer or product provider.' },
  { num: '05', title: 'Decision made', desc: 'The insurer or product provider communicates their decision.' },
  { num: '06', title: 'Settlement or closure', desc: 'Settlement is processed where approved, or the claim is formally closed.' },
];

export default function Claims() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>
            Need to make a claim?<br />
            <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>We're here to help.</em>
          </h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            The claims process depends on the applicable insurer, product provider and the specific terms of your policy. Reubray is here to guide and assist you through every step.
          </p>
        </div>
      </section>

      {/* START A CLAIM */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-3xl font-light mb-4">Start a claim</h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300, maxWidth: '540px', margin: '0 auto 2.5rem' }}>
            To begin the claims process, please contact Reubray directly. Our team will guide you through the required steps and connect you with the relevant insurer or product provider.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+27609953719" className="btn-primary flex items-center gap-2">
              <Phone size={14} /> Call Us
            </a>
            <a href="https://wa.me/+27609953719" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
              <MessageCircle size={14} /> WhatsApp Us
            </a>
            <Link to="/contact" className="btn-secondary flex items-center gap-2">
              <FileText size={14} /> Send an Enquiry
            </Link>
          </div>

          <div className="mt-10 p-6 rounded-lg flex items-start gap-4 text-left max-w-lg mx-auto" style={{ background: 'rgba(201,122,42,0.08)', border: '1px solid rgba(201,122,42,0.25)' }}>
            <AlertCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--rb-gold)' }} />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-charcoal)', fontFamily: 'Inter, sans-serif' }}>
              All claim decisions are made by the applicable insurer or product provider, subject to the terms, conditions and exclusions of the relevant policy. Reubray assists as an intermediary.
            </p>
          </div>
        </div>
      </section>

      {/* CLAIM PROCESS */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-rule mx-auto" />
            <h2 className="serif-display text-4xl font-light">The claims process</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {claimSteps.map((step) => (
              <div key={step.num} className="card-soft p-8">
                <div className="process-number mb-3">{step.num}</div>
                <div className="section-rule w-10 mb-3" />
                <h3 className="serif-display text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLAIM INFORMATION */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <div className="gold-rule" />
            <h2 className="serif-display text-3xl font-light mb-6">What you may need</h2>
            <ul className="space-y-3">
              {[
                'Your policy number and insurer details',
                'A clear description of the event or loss',
                'Supporting documentation (e.g., medical reports, police reports, invoices)',
                'Proof of identity',
                'Banking details for settlement purposes',
                'Any other documentation specified in your policy',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
                  <span className="w-1 h-1 rounded-full mt-2.5 flex-shrink-0" style={{ background: 'var(--rb-gold)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="gold-rule" />
            <h2 className="serif-display text-3xl font-light mb-6">What happens next</h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p>Once your claim information has been received, Reubray will assist in submitting it to the relevant insurer or product provider.</p>
              <p>The insurer will assess the claim against the terms and conditions of your policy. Reubray may liaise with the insurer on your behalf where permitted.</p>
              <p>Claim timelines vary depending on the insurer, the type of claim, and the complexity of the matter. We will keep you informed throughout the process.</p>
              <p>If you have questions or need assistance, please contact us directly.</p>
            </div>
            <div className="mt-6">
              <Link to="/contact" className="btn-secondary">Contact Reubray</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}