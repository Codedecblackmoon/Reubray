import { Link } from 'react-router-dom';
import { Shield, Heart, Car, Briefcase, Users, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Shield,
    title: 'Life Insurance',
    desc: 'Provides financial security for your loved ones in the event of your death. Life cover can help replace income, pay off debts, and protect your family\'s financial future.',
    path: '/personal',
  },
  {
    icon: Heart,
    title: 'Health-related Cover',
    desc: 'Assistance with the financial impact of medical events, hospital stays and healthcare gaps. Relevant for individuals and families seeking to manage healthcare-related financial risk.',
    path: '/personal',
  },
  {
    icon: Car,
    title: 'Short-Term Insurance',
    desc: 'Cover for your home, vehicle and personal belongings against risks such as theft, fire, accidents and natural events.',
    path: '/personal',
  },
  {
    icon: Briefcase,
    title: 'Business Risk Insurance',
    desc: 'Solutions designed to protect your business against financial losses arising from unforeseen events, liability claims and operational disruptions.',
    path: '/business',
  },
  {
    icon: Users,
    title: 'Employee Insurance',
    desc: 'Group benefits and insurance solutions designed to protect your employees and provide meaningful workplace benefits.',
    path: '/business',
  },
  {
    icon: TrendingUp,
    title: 'Investment-linked Insurance Solutions',
    desc: 'Where appropriate and authorised, solutions that link financial protection with structured investment components.',
    path: '/corporate',
  },
  {
    icon: BookOpen,
    title: 'Financial Advisory Services',
    desc: 'Professional, personalised financial advice and planning — aligned to your specific circumstances, goals, and stage of life.',
    path: '/personal',
  },
];

export default function Solutions() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>
            Solutions designed around<br />
            <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>your needs.</em>
          </h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Explore Reubray's financial and insurance-related solutions — all adviser-led and aligned to your individual circumstances.
          </p>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol) => (
            <Link to={sol.path} key={sol.title} className="card-soft p-10 block group">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(15,31,77,0.07)' }}>
                <sol.icon size={22} style={{ color: 'var(--rb-navy)' }} />
              </div>
              <h3 className="serif-display text-2xl font-medium mb-3">{sol.title}</h3>
              <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{sol.desc}</p>
              <span className="text-xs font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Learn More <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--rb-gold-light)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.16em' }}>Not sure where to start?</p>
          <h2 className="serif-display text-3xl font-light mb-6" style={{ color: 'white' }}>Tell us what you're trying to protect.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="btn-gold">Get a Quote</Link>
            <Link to="/request-advice" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'white' }}>Request Advice</Link>
          </div>
        </div>
      </section>
    </div>
  );
}