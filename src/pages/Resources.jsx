import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Insurance Guides', 'Financial Education', 'Business Risk', 'Family Protection', 'Insurance Tips'];

const articles = [
  {
    cat: 'Insurance Guides',
    title: 'What is Life Insurance?',
    desc: 'Life insurance is a policy that pays a specified sum to your nominated beneficiaries in the event of your death. It provides financial security for those who depend on your income.',
    date: 'August 2026',
  },
  {
    cat: 'Financial Education',
    title: 'What is Underwriting?',
    desc: 'Underwriting is the process by which an insurer assesses the risk of providing cover to an individual or business. Understanding underwriting helps you know what to expect when applying for cover.',
    date: 'August 2026',
  },
  {
    cat: 'Insurance Tips',
    title: 'What are Insurance Exclusions?',
    desc: 'Exclusions are events or circumstances that your policy specifically does not cover. Reading and understanding your policy exclusions is essential to avoiding surprises at claim time.',
    date: 'July 2026',
  },
  {
    cat: 'Insurance Guides',
    title: 'How do I make a claim?',
    desc: 'Making a claim can be stressful. This guide walks you through the typical steps involved, what information you will need, and how Reubray can assist you through the process.',
    date: 'July 2026',
  },
  {
    cat: 'Business Risk',
    title: 'Key-Person Insurance Explained',
    desc: 'Many businesses depend on specific individuals. Key-person insurance provides financial protection if a vital team member passes away or becomes unable to work.',
    date: 'June 2026',
  },
  {
    cat: 'Family Protection',
    title: 'Protecting Your Family\'s Financial Future',
    desc: 'From life cover to income protection, this guide explores the key financial protection tools that can help secure your family\'s future regardless of what happens.',
    date: 'June 2026',
  },
  {
    cat: 'Financial Education',
    title: 'What is a Beneficiary?',
    desc: 'A beneficiary is the person or entity you nominate to receive benefits from your policy. Keeping your beneficiary nominations up to date is one of the most important things you can do.',
    date: 'May 2026',
  },
  {
    cat: 'Insurance Tips',
    title: 'Reviewing Your Cover Annually',
    desc: 'Your life circumstances change over time. An annual review of your insurance arrangements ensures your cover remains appropriate and you are not paying for cover you no longer need.',
    date: 'May 2026',
  },
];

export default function Resources() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>
            Financial knowledge<br />
            <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>made simple.</em>
          </h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Educational resources designed to help you better understand insurance and financial concepts.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 px-6 border-b" style={{ background: 'white', borderColor: 'var(--rb-stone)' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                fontFamily: 'Inter, sans-serif',
                background: cat === 'All' ? 'var(--rb-navy)' : 'transparent',
                color: cat === 'All' ? 'white' : 'var(--rb-muted)',
                border: '1px solid',
                borderColor: cat === 'All' ? 'var(--rb-navy)' : 'var(--rb-stone)',
                letterSpacing: '0.04em',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article) => (
            <div key={article.title} className="card-soft overflow-hidden group">
              <div className="h-36 flex items-center justify-center" style={{ background: 'var(--rb-stone)' }}>
                <span className="serif-display text-5xl font-light" style={{ color: 'var(--rb-muted)', opacity: 0.3 }}>R</span>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest mb-2 block font-medium" style={{ color: 'var(--rb-gold)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}>{article.cat}</span>
                <h3 className="serif-display text-xl font-medium mb-2 leading-snug">{article.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{article.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>{article.date}</span>
                  <button className="text-xs font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Read <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: 'var(--rb-navy)' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="serif-display text-3xl font-light mb-4" style={{ color: 'white' }}>Need help with your insurance?</h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Speak to a Reubray adviser — we're here to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-advice" className="btn-gold">Request Advice</Link>
            <Link to="/get-a-quote" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'white' }}>Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}