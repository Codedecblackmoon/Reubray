import { Link } from 'react-router-dom';
import { Building2, Users, TrendingUp, Shield, Briefcase, ArrowRight } from 'lucide-react';
import ima from '../assets/cop.png';

const solutions = [
  { icon: Shield, title: 'Bespoke Insurance Solutions', desc: 'Complex, multi-faceted insurance programmes structured around your organisation\'s specific risk profile and operational requirements.' },
  { icon: Briefcase, title: 'Business Risk Solutions', desc: 'Comprehensive risk identification and mitigation strategies, aligned to your governance and compliance frameworks.' },
  { icon: Users, title: 'Employee Solutions', desc: 'Group benefits, executive cover, and tailored employee insurance programmes for medium to large organisations.' },
  { icon: TrendingUp, title: 'Investment-linked Insurance Solutions', desc: 'Where appropriate, solutions that link financial protection with structured investment components for long-term capital goals.' },
  { icon: Building2, title: 'Financial Advisory Services', desc: 'Specialist financial advice for corporate entities, including business succession, key-person planning, and executive benefit structures.' },
];

const approach = [
  { label: 'Understand', desc: 'We invest time in understanding your organisation, its structure, people, and strategic objectives.' },
  { label: 'Analyse', desc: 'A rigorous assessment of your current financial and insurance arrangements and any identified gaps or risks.' },
  { label: 'Design', desc: 'Development of an appropriate, tailored solution aligned to your specific requirements.' },
  { label: 'Implement', desc: 'Professional support through the implementation process, ensuring a seamless experience.' },
  { label: 'Review', desc: 'Ongoing servicing, relationship management, and annual reviews to keep your arrangements relevant.' },
];

export default function Corporate() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex items-end overflow-hidden" style={{ paddingTop: '7rem', minHeight: '70vh' }}>
        <div className="absolute inset-0 z-0">
          <img
            // src="https://media.base44.com/images/public/6a9313c19e128f8d88dc6e99/4085c6bec_generated_23e9228e.png"
            src={ima}
            alt="Corporate financial solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(15,31,77,0.92) 0%, rgba(15,31,77,0.6) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-20 pt-16">
          <p className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: 'var(--rb-gold-light)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Corporate Solutions</p>
          <h1 className="serif-display font-light mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', lineHeight: 1.1 }}>
            Bespoke financial and<br />
            <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>insurance solutions.</em>
          </h1>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', fontWeight: 300, maxWidth: '520px' }}>
            Specialist financial and insurance advisory services for corporate entities and high-net-worth clients requiring tailored, sophisticated solutions.
          </p>
          <Link to="/contact" className="btn-gold">Speak to an Adviser</Link>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto" />
            <h2 className="serif-display text-4xl font-light">Corporate solutions</h2>
            <p className="mt-4 text-base" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>All services confirmed against Reubray's authorised FSP activities before engagement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol) => (
              <div key={sol.title} className="card-soft p-8">
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(15,31,77,0.07)' }}>
                  <sol.icon size={20} style={{ color: 'var(--rb-navy)' }} />
                </div>
                <h3 className="serif-display text-xl font-medium mb-3">{sol.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-rule mx-auto" />
            <h2 className="serif-display text-4xl font-light">Our corporate approach</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-0">
            {approach.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center p-6">
                {i < approach.length - 1 && (
                  <div className="hidden md:block absolute top-11 left-1/2 w-full h-px" style={{ background: 'var(--rb-rule)', zIndex: 0 }} />
                )}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative z-10" style={{ background: 'var(--rb-navy)' }}>
                  <span className="text-xs font-semibold" style={{ color: 'var(--rb-gold-light)', fontFamily: 'Inter, sans-serif' }}>0{i + 1}</span>
                </div>
                <h4 className="serif-display text-lg font-medium mb-2">{step.label}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-4xl font-light mb-4" style={{ color: 'white' }}>Discuss Your Requirements</h2>
          <p className="text-base mb-10" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            We'd welcome a conversation about how Reubray can support your organisation's financial and insurance needs.
          </p>
          <Link to="/contact" className="btn-gold">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}