import { Link } from 'react-router-dom';
import { Shield, Heart, Car, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const solutions = [
  {
    icon: Shield,
    title: 'Life Insurance',
    what: 'A policy that pays a lump sum or income to your beneficiaries in the event of your death.',
    who: 'Anyone with dependants, a mortgage, or financial responsibilities they want to protect.',
    cta: 'Learn More',
  },
  {
    icon: Heart,
    title: 'Health-related Cover',
    what: 'Products that help cover the cost of medical events, hospital stays, and healthcare gaps.',
    who: 'Individuals and families seeking assistance with the financial impact of health events.',
    cta: 'Learn More',
  },
  {
    icon: Car,
    title: 'Short-Term Insurance',
    what: 'Cover for your home, vehicle, and personal belongings against everyday risks like theft, fire, and accidental damage.',
    who: 'Homeowners, vehicle owners, and individuals with assets they want to protect.',
    cta: 'Learn More',
  },
  {
    icon: Shield,
    title: 'Disability Cover',
    what: 'Financial protection if you are unable to work due to illness or injury.',
    who: 'Working individuals and business owners who rely on their income.',
    cta: 'Learn More',
  },
];

const approach = [
  'Understand your situation and financial goals.',
  'Assess your specific insurance and protection needs.',
  'Review any existing cover you may already have.',
  'Recommend appropriate solutions tailored to you.',
  'Provide ongoing support, service and annual reviews.',
];

export default function Personal() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-96 flex items-end overflow-hidden" style={{ paddingTop: '7rem', minHeight: '70vh' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.base44.com/images/public/6a9313c19e128f8d88dc6e99/19a838de1_generated_9519b659.png"
            alt="Personal insurance solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(15,31,77,0.9) 0%, rgba(15,31,77,0.55) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-20 pt-16">
          <p className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: 'var(--rb-gold-light)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Personal Solutions</p>
          <h1 className="serif-display font-light mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', lineHeight: 1.1 }}>
            Protection for you<br />and your family.
          </h1>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', fontWeight: 300, maxWidth: '520px' }}>
            Reubray provides personalised advice around financial protection and insurance — helping individuals and families across South Africa understand their options and find appropriate cover.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/get-a-quote" className="btn-gold">Get a Personal Quote</Link>
            <Link to="/request-advice" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Request Advice</Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-3xl md:text-4xl font-light mb-6">Why financial protection matters</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Life is unpredictable. A serious illness, accident, or unexpected event can place significant financial strain on you and your family. The right financial protection means you can face these challenges without sacrificing your financial stability.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Every individual's circumstances are different. Your needs depend on your age, income, family situation, existing assets, and long-term goals. Professional advice helps you understand what is relevant to your specific situation — rather than simply buying a product.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto" />
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>What we offer</p>
            <h2 className="serif-display text-4xl font-light">Personal solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <div key={sol.title} className="card-soft p-10">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(15,31,77,0.07)' }}>
                    <sol.icon size={20} style={{ color: 'var(--rb-navy)' }} />
                  </div>
                  <div>
                    <h3 className="serif-display text-2xl font-medium mb-3">{sol.title}</h3>
                    <p className="text-sm mb-2 font-semibold" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>What it is:</p>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{sol.what}</p>
                    <p className="text-sm mb-1 font-semibold" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>Who it may suit:</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{sol.who}</p>
                    <Link to="/solutions" className="text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-rule" />
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>How we work</p>
            <h2 className="serif-display text-4xl font-light mb-6" style={{ color: 'white' }}>Our approach to<br /><em style={{ color: 'var(--rb-gold-light)' }}>personal advice</em></h2>
            <p className="leading-relaxed text-base" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              We don't start with a product — we start with a conversation. Our advisers take time to understand your circumstances before making any recommendations.
            </p>
          </div>
          <div className="space-y-5">
            {approach.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--rb-gold-light)' }} />
                <p style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-4xl font-light mb-4">Not sure what cover you need?</h2>
          <p className="text-base mb-10" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Speak to a Reubray adviser. We'll help you understand your options without any pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-advice" className="btn-primary">Speak to an Adviser</Link>
            <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}