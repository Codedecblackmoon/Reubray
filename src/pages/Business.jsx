import { Link } from 'react-router-dom';
import { Briefcase, Users, Key, TrendingUp, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import ima from '../assets/buisness.png';

const solutions = [
  {
    icon: Briefcase,
    title: 'Business Risk Protection',
    desc: 'Insurance solutions designed to protect your business against significant financial losses arising from unforeseen events, liability claims, and operational disruptions.',
  },
  {
    icon: Key,
    title: 'Key-Person Protection',
    desc: 'If your business depends on specific individuals, key-person cover helps protect the business financially if a key individual can no longer perform their role due to death or disability.',
  },
  {
    icon: Users,
    title: 'Employee Insurance',
    desc: 'Group life, disability, and funeral cover solutions that help you protect your employees and provide meaningful employee benefits — attracting and retaining talent.',
  },
  {
    icon: TrendingUp,
    title: 'Business Financial Solutions',
    desc: 'Financial advisory and planning solutions relevant to business owners — helping you manage business finances, plan for succession, and protect what you\'ve built.',
  },
];

const process = [
  { label: 'Understand Your Business', desc: 'We take time to understand your business model, structure, and specific risks.' },
  { label: 'Identify Risks', desc: 'Our advisers help identify relevant financial and insurance risks facing your business.' },
  { label: 'Assess Your Needs', desc: 'A thorough needs analysis aligned to your business goals and existing arrangements.' },
  { label: 'Recommend Solutions', desc: 'We present appropriate solutions from our authorised product providers.' },
  { label: 'Ongoing Review', desc: 'Regular reviews to ensure your cover evolves as your business grows and changes.' },
];

export default function Business() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex items-end overflow-hidden" style={{ paddingTop: '7rem', minHeight: '70vh' }}>
        <div className="absolute inset-0 z-0">
          <img
            // src="https://media.base44.com/images/public/6a9313c19e128f8d88dc6e99/e8308bfff_generated_6dceb7b1.png"
            src={ima}
            alt="Business insurance solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(15,31,77,0.9) 0%, rgba(15,31,77,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-20 pt-16">
          <p className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: 'var(--rb-gold-light)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Business Solutions</p>
          <h1 className="serif-display font-light mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', lineHeight: 1.1 }}>
            Protect the business<br />you've built.
          </h1>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', fontWeight: 300, maxWidth: '520px' }}>
            We help SMEs across South Africa identify and manage relevant financial and insurance risks — protecting the business, its people, and the owner's livelihood.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/request-advice" className="btn-gold">Request Business Advice</Link>
            <Link to="/get-a-quote" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto" />
            <h2 className="serif-display text-4xl font-light">Business solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <div key={sol.title} className="card-soft p-10">
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(15,31,77,0.07)' }}>
                  <sol.icon size={20} style={{ color: 'var(--rb-navy)' }} />
                </div>
                <h3 className="serif-display text-2xl font-medium mb-3">{sol.title}</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{sol.desc}</p>
                <Link to="/request-advice" className="text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Speak to an Adviser <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-rule mx-auto" />
            <h2 className="serif-display text-4xl font-light" style={{ color: 'white' }}>Our business advisory process</h2>
          </div>
          <div className="space-y-0">
            {process.map((step, i) => (
              <div key={step.label} className="flex gap-6 items-stretch">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--rb-gold)', color: 'white' }}>
                    <span className="text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>0{i + 1}</span>
                  </div>
                  {i < process.length - 1 && <div className="w-px flex-1 my-2" style={{ background: 'rgba(255,255,255,0.15)' }} />}
                </div>
                <div className="pb-10 flex-1">
                  <h3 className="serif-display text-xl font-medium mb-1.5" style={{ color: 'white' }}>{step.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-4xl font-light mb-4">Let's talk about your business.</h2>
          <p className="text-base mb-10" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Our business advisers are ready to help you identify risks and find appropriate solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-advice" className="btn-primary">Speak to a Business Adviser</Link>
            <a href="https://wa.me/+27609953719" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
              <MessageCircle size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}