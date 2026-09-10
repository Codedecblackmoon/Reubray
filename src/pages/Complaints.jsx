import { Link } from 'react-router-dom';
import { AlertCircle, Mail, Phone } from 'lucide-react';

const steps = [
  { num: '01', title: 'Submit your complaint', desc: 'Contact Reubray directly via email, telephone or in writing. Please provide your full details and a clear description of your complaint.' },
  { num: '02', title: 'Provide information', desc: 'Include your policy details (where applicable), the nature of your complaint, and any supporting documentation.' },
  { num: '03', title: 'Where to submit', desc: 'Complaints should be directed to Reubray\'s Complaints Officer. Contact details are provided below. [To be confirmed by Reubray.]' },
  { num: '04', title: 'After submission', desc: 'Reubray will acknowledge receipt of your complaint and investigate it in accordance with our complaints process and applicable regulatory requirements.' },
  { num: '05', title: 'Escalation', desc: 'If you are not satisfied with Reubray\'s response, you may escalate the matter to the relevant Ombud. We will provide you with the applicable Ombud\'s details.' },
];

export default function Complaints() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>
            We're committed to treating<br />
            <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>our clients fairly.</em>
          </h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Reubray takes all complaints seriously. We are committed to resolving complaints promptly, fairly and transparently.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-rule mx-auto" />
            <h2 className="serif-display text-4xl font-light">Complaints process</h2>
          </div>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="process-step">
                <div className="process-number">{step.num}</div>
                <div className="flex-1 pt-1">
                  <div className="section-rule w-12 mb-3" />
                  <h3 className="serif-display text-xl font-medium mb-1.5">{step.title}</h3>
                  <p className="text-base" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-3xl font-light mb-4">Complaints contact</h2>
          <p className="text-base mb-10" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            All complaints contact information will be confirmed and approved by Reubray's compliance process before publication.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: AlertCircle, label: 'Complaints Officer', detail: '[Name — To be confirmed]' },
              { icon: Mail, label: 'Complaints Email', detail: '[Email — To be confirmed]' },
              { icon: Phone, label: 'Telephone', detail: '[Telephone — To be confirmed]' },
            ].map((item) => (
              <div key={item.label} className="card-soft p-7 text-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(15,31,77,0.07)' }}>
                  <item.icon size={18} style={{ color: 'var(--rb-navy)' }} />
                </div>
                <p className="text-xs uppercase tracking-widest mb-1 font-medium" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>{item.label}</p>
                <p className="text-sm font-medium" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
            All complaints content has been prepared subject to approval by Reubray's compliance process. Information will be updated once confirmed.
          </p>
        </div>
      </section>
    </div>
  );
}