import { Link, useParams } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';

export default function ResourceArticle() {
  const { slug } = useParams();

  return (
    <div style={{ paddingTop: '6rem', background: 'var(--rb-parchment)', minHeight: '100vh' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Clock size={24} style={{ color: 'var(--rb-gold-light)' }} />
          </div>
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: 'white' }}>
            Content coming soon.
          </h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            We are currently compiling the relevant resources. Please try again later.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-md mx-auto">
          <p className="text-sm mb-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Our team is working hard to bring you helpful, accurate financial and insurance education content. In the meantime, if you have a specific question, please don't hesitate to reach out to a Reubray adviser.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/resources" className="btn-primary flex items-center justify-center gap-2">
              <ArrowLeft size={14} />
              Back to Resources
            </Link>
            <Link to="/request-advice" className="btn-secondary">Speak to an Adviser</Link>
          </div>
        </div>
      </section>
    </div>
  );
}