import { Link } from 'react-router-dom';
import { Shield, Users, Star, Heart, BookOpen, Handshake } from 'lucide-react';

const values = [
  { icon: Users, title: 'Client First', desc: 'Every decision we make is guided by what is best for the client.' },
  { icon: Star, title: 'Tailored Advice', desc: 'No two clients are the same. Our advice reflects your individual circumstances.' },
  { icon: Shield, title: 'Professionalism', desc: 'We hold ourselves to the highest professional and regulatory standards.' },
  { icon: Heart, title: 'Ethical Conduct', desc: 'Responsible, transparent, and ethical conduct in every interaction.' },
  { icon: Handshake, title: 'Long-Term Relationships', desc: 'We aim to be your trusted adviser for the long term — not just for a single transaction.' },
  { icon: BookOpen, title: 'Financial Education', desc: 'We believe informed clients make better financial decisions. We help you understand your options.' },
];

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="page-hero text-center" style={{ paddingTop: '9rem', paddingBottom: '6rem' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="fsp-badge mx-auto mb-6 w-fit">FSP No. 54667 · Licensed FSP</div>
          <h1 className="serif-display font-light mb-5" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'white' }}>
            Financial advice built<br />
            <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>around people.</em>
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 300, maxWidth: '540px', margin: '0 auto' }}>
            Reubray is a South African licensed Financial Services Provider committed to personalised, professional and ethical financial and insurance advice.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-rule" />
            <h2 className="serif-display text-4xl font-light mb-6">Who we are</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p>Reubray (Pty) Ltd is a licensed Financial Services Provider (FSP No. 54667), authorised and regulated by the Financial Sector Conduct Authority (FSCA) of South Africa.</p>
              <p>We provide financial and insurance-related advisory and intermediary services to individuals, families, SMEs and corporate clients across South Africa.</p>
              <p>Our focus is on delivering personalised, professional and ethical service — helping clients understand their financial and insurance options, and connecting them with appropriate solutions from our authorised product providers.</p>
              <p>Reubray is an intermediary and adviser — we are not an insurance underwriter or manufacturer of insurance products.</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'FSP Number', value: '54667' },
              { label: 'Company Registration', value: '2024/720678/07' },
              { label: 'Regulator', value: 'Financial Sector Conduct Authority (FSCA)' },
              { label: 'Clients Served', value: 'Individuals, Families, SMEs, Corporates' },
              { label: 'Service Model', value: 'Adviser-led · Personalised · Ethical' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-4 border-b" style={{ borderColor: 'var(--rb-stone)' }}>
                <span className="text-sm font-medium" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                <span className="text-sm text-right" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto" />
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>What drives us</p>
            <h2 className="serif-display text-4xl font-light">Our values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card-soft p-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(15,31,77,0.07)' }}>
                  <v.icon size={18} style={{ color: 'var(--rb-navy)' }} />
                </div>
                <h3 className="serif-display text-xl font-medium mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto" />
            <h2 className="serif-display text-4xl font-light">Governance</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {['Board of Directors', 'Managing Director', 'Compliance Officer', 'Risk Committee', 'Internal Audit'].map((role) => (
              <div key={role} className="p-6 text-center rounded-lg" style={{ background: 'var(--rb-parchment)', border: '1px solid var(--rb-stone)' }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: 'var(--rb-navy)' }}>
                  <Users size={16} color="white" />
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>{role}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>[Details to be confirmed]</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-center mt-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
            Leadership and governance information will be published once confirmed and approved by Reubray.
          </p>
        </div>
      </section>

      {/* LEADERSHIP placeholder */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-4xl font-light mb-6">Leadership</h2>
          <p className="text-base mb-10" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Leadership profiles, photographs and biographies will be published once supplied and approved by Reubray.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-soft p-8 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'var(--rb-stone)' }}>
                  <Users size={28} style={{ color: 'var(--rb-muted)' }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>[Name — To be confirmed]</p>
                <p className="text-xs mt-1" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>[Position — To be confirmed]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="serif-display text-3xl font-light mb-4" style={{ color: 'white' }}>Ready to speak to an adviser?</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>We'd be happy to help you understand how Reubray can support your financial journey.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-advice" className="btn-gold">Speak to a Reubray Adviser</Link>
            <Link to="/get-a-quote" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'white' }}>Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}