import { Link } from 'react-router-dom';
import { Shield, Users, Building2, ChevronRight, CheckCircle, BookOpen, Phone, MessageCircle, ArrowRight, Heart, Star, Briefcase, TrendingUp, Award } from 'lucide-react';

const solutions = [
  { icon: Shield, title: 'Life Insurance', desc: 'Financial protection for your loved ones in the event of death, disability or critical illness.', path: '/solutions' },
  { icon: Heart, title: 'Health-related Cover', desc: 'Assistance with the costs of healthcare, hospital stays and gap cover solutions.', path: '/solutions' },
  { icon: Star, title: 'Short-Term Insurance', desc: 'Protection for your home, vehicle and possessions against everyday risks.', path: '/solutions' },
  { icon: Briefcase, title: 'Business Risk Insurance', desc: 'Comprehensive risk protection designed for South African businesses of all sizes.', path: '/solutions' },
  { icon: Users, title: 'Employee Insurance', desc: 'Group benefits and insurance solutions to protect your workforce.', path: '/solutions' },
  { icon: TrendingUp, title: 'Financial Advisory', desc: 'Professional, personalised financial advice aligned to your life goals.', path: '/solutions' },
];

const differentiators = [
  { title: 'Client-Centred Advice', desc: 'Advice focused on your needs and circumstances — not on selling a product.' },
  { title: 'Tailored Solutions', desc: 'Solutions designed around your individual requirements and life stage.' },
  { title: 'Professional Service', desc: 'Adviser-supported service from licensed professionals committed to your wellbeing.' },
  { title: 'Ethical Conduct', desc: 'A commitment to responsible, transparent and ethical conduct in every interaction.' },
  { title: 'Long-Term Relationships', desc: 'Ongoing client service and annual reviews — not simply a once-off policy sale.' },
  { title: 'Financial Education', desc: 'Helping you better understand financial and insurance concepts so you can make informed decisions.' },
];

const steps = [
  { num: '01', title: 'Tell us what you need.', desc: 'Share a little about your situation and what you are looking to protect.' },
  { num: '02', title: 'Speak to a Reubray adviser.', desc: 'A qualified adviser will reach out to discuss your needs in detail.' },
  { num: '03', title: 'Complete a needs analysis.', desc: 'Together we review your current situation and identify any gaps.' },
  { num: '04', title: 'Receive a recommendation and quote.', desc: 'We present suitable options matched to your needs and budget.' },
  { num: '05', title: 'Receive ongoing support.', desc: 'Reubray provides ongoing service, reviews and assistance — year after year.' },
];

const articles = [
  { cat: 'Insurance Guides', title: 'What is Life Insurance?', desc: 'A plain-language explanation of how life insurance works and why it matters for your family.' },
  { cat: 'Financial Education', title: 'What is Underwriting?', desc: 'How insurers assess risk and what it means for your policy application.' },
  { cat: 'Insurance Tips', title: 'What are Insurance Exclusions?', desc: 'Understanding what your policy may not cover and how to review your protection carefully.' },
  { cat: 'Claims', title: 'How do I make a claim?', desc: 'A step-by-step guide to the claims process and what information you may need to prepare.' },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '6rem' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.base44.com/images/public/6a9313c19e128f8d88dc6e99/e0f185bda_generated_27f161f8.png"
            alt="South African family protected by Reubray"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(15,31,77,0.88) 0%, rgba(15,31,77,0.6) 55%, rgba(15,31,77,0.3) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">
            <div className="fsp-badge mb-8 fade-up">
              <Shield size={12} />
              Licensed FSP · No. 54667
            </div>

            <h1
              className="serif-display font-light mb-6 fade-up-delay-1"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: 'white', lineHeight: 1.08 }}
            >
              Financial and insurance<br />
              <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>solutions built around you.</em>
            </h1>

            <p
              className="text-lg mb-10 fade-up-delay-2"
              style={{ color: 'rgba(255,255,255,0.82)', fontFamily: 'Inter, sans-serif', fontWeight: 300, maxWidth: '560px', lineHeight: 1.7 }}
            >
              Professional, personalised advice for individuals, families and businesses across South Africa. Adviser-supported. Ethically driven.
            </p>

            <div className="flex flex-wrap gap-4 fade-up-delay-3">
              <Link to="/get-a-quote" className="btn-gold">Get a Quote</Link>
              <Link to="/request-advice" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
                Request Advice
              </Link>
              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-white tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em' }}>Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { label: 'Licensed Financial Services Provider', value: 'FSP No. 54667' },
              { label: 'Company Registration', value: '2024/720678/07' },
              { label: 'Regulated by', value: 'FSCA' },
              { label: 'Serving', value: 'South Africa' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', fontSize: '0.65rem' }}>{item.label}</p>
                <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--rb-gold-light)', fontFamily: 'Inter, sans-serif' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEYS */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto" />
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Who we serve</p>
            <h2 className="serif-display text-4xl md:text-5xl font-light">How can we help you?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Personal',
                desc: 'Insurance and financial protection tailored for individuals and families. We help you understand your options and find solutions suited to your life.',
                cta: 'Explore Personal Solutions',
                path: '/personal',
                accent: 'var(--rb-navy)',
              },
              {
                icon: Briefcase,
                title: 'Business',
                desc: 'Risk protection, employee insurance and key-person solutions for small and medium-sized businesses across South Africa.',
                cta: 'Explore Business Solutions',
                path: '/business',
                accent: 'var(--rb-gold)',
              },
              {
                icon: Building2,
                title: 'Corporate',
                desc: 'Specialised and bespoke financial and insurance solutions for corporates and high-net-worth clients with complex needs.',
                cta: 'Explore Corporate Solutions',
                path: '/corporate',
                accent: 'var(--rb-navy)',
              },
            ].map((item) => (
              <div key={item.title} className="card-soft p-10 group">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.accent}15` }}
                >
                  <item.icon size={22} style={{ color: item.accent }} />
                </div>
                <h3 className="serif-display text-2xl font-medium mb-3">{item.title}</h3>
                <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{item.desc}</p>
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3"
                  style={{ color: item.accent, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}
                >
                  {item.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULE */}
      <div className="section-rule mx-6 md:mx-24" />

      {/* SOLUTIONS */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto" />
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Our services</p>
            <h2 className="serif-display text-4xl md:text-5xl font-light">Solutions tailored to your needs</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol) => (
              <Link to={sol.path} key={sol.title} className="card-soft p-8 block group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: 'rgba(15,31,77,0.06)' }}>
                  <sol.icon size={20} style={{ color: 'var(--rb-navy)' }} />
                </div>
                <h3 className="serif-display text-xl font-medium mb-2">{sol.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{sol.desc}</p>
                <span className="text-xs font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY REUBRAY */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-navy)', color: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="gold-rule" />
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Why choose us</p>
              <h2 className="serif-display text-4xl md:text-5xl font-light mb-6" style={{ color: 'white' }}>
                Advice built around<br />
                <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>your needs.</em>
              </h2>
              <p className="leading-relaxed text-base mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                At Reubray, we believe that insurance and financial decisions are deeply personal. Our licensed advisers take the time to understand your situation before recommending any solution.
              </p>
              <Link to="/about" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'white' }}>
                About Reubray
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {differentiators.map((d) => (
                <div key={d.title} className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <CheckCircle size={16} className="mb-3" style={{ color: 'var(--rb-gold-light)' }} />
                  <h4 className="serif-display text-lg font-medium mb-1.5" style={{ color: 'white' }}>{d.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-rule mx-auto" />
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Our process</p>
            <h2 className="serif-display text-4xl md:text-5xl font-light">From advice to protection</h2>
          </div>

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={step.num} className="process-step">
                <div className="process-number">{step.num}</div>
                <div className="flex-1 pt-1">
                  <div className="section-rule w-16 mb-4" />
                  <h3 className="serif-display text-xl font-medium mb-1.5">{step.title}</h3>
                  <p className="text-base" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="gold-rule" />
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Learn more</p>
              <h2 className="serif-display text-4xl md:text-5xl font-light">Insurance made easier<br />to understand.</h2>
            </div>
            <Link to="/resources" className="btn-secondary whitespace-nowrap self-start md:self-auto">
              Explore All Resources
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.map((article) => (
              <Link to="/resources" key={article.title} className="card-soft p-7 block group">
                <span className="text-xs uppercase tracking-widest mb-3 block font-medium" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}>{article.cat}</span>
                <h3 className="serif-display text-lg font-medium mb-2 leading-snug">{article.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{article.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium transition-all duration-200 group-hover:gap-2" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Read More <ArrowRight size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLAIMS CALLOUT */}
      <section className="py-20 px-6" style={{ background: 'var(--rb-stone)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="gold-rule" />
            <h2 className="serif-display text-3xl md:text-4xl font-light mb-3">Need to make a claim?</h2>
            <p className="leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300, maxWidth: '500px' }}>
              We're here to help guide you through the process. Claims are subject to the applicable insurer, product provider and policy terms.
            </p>
          </div>
          <Link to="/claims" className="btn-primary whitespace-nowrap">Claims Information</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 text-center" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-4xl md:text-5xl font-light mb-6">
            Let's find the right<br />solution for you.
          </h2>
          <p className="text-lg mb-10" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300, lineHeight: 1.7 }}>
            Tell us what you're trying to protect. We'll help you understand your options and connect you with the right adviser.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="btn-gold">Get a Quote</Link>
            <Link to="/request-advice" className="btn-secondary">Request Advice</Link>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <MessageCircle size={14} />
              WhatsApp Reubray
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}