import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, Shield } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About Reubray', path: '/about' },
      { label: 'Personal', path: '/personal' },
      { label: 'Business', path: '/business' },
      { label: 'Corporate', path: '/corporate' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Life Insurance', path: '/solutions' },
      { label: 'Health-related Cover', path: '/solutions' },
      { label: 'Short-Term Insurance', path: '/solutions' },
      { label: 'Business Risk', path: '/solutions' },
      { label: 'Financial Advisory', path: '/solutions' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Claims', path: '/claims' },
      { label: 'FAQs', path: '/faq' },
      { label: 'Request Advice', path: '/request-advice' },
      { label: 'Request a Callback', path: '/contact' },
      { label: 'WhatsApp Us', path: 'https://wa.me/+27609953719', external: true },
    ],
  },
  {
    title: 'Compliance',
    links: [
      { label: 'FSP Disclosure', path: '/compliance' },
      { label: 'Privacy Notice', path: '/privacy' },
      { label: 'POPIA', path: '/privacy' },
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Complaints', path: '/complaints' },
      { label: 'Conflict of Interest', path: '/compliance' },
      { label: 'PAIA Manual', path: '/compliance' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--rb-navy)', color: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Signature watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          className="serif-display font-bold text-center leading-none"
          style={{
            fontSize: 'clamp(6rem, 20vw, 18rem)',
            color: 'rgba(255,255,255,0.03)',
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
        >
          REUBRAY
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top CTA strip */}
        <div className="py-12 border-b flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--rb-gold-light)', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif' }}>Ready to get started?</p>
            <h3 className="serif-display text-3xl font-light" style={{ color: 'white' }}>Let's find the right solution for you.</h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/get-a-quote" className="btn-gold whitespace-nowrap">Get a Quote</Link>
            <Link to="/request-advice" className="btn-secondary whitespace-nowrap" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Request Advice</Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: 'var(--rb-gold-light)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact quick links */}
        <div className="py-8 border-t border-b flex flex-wrap gap-6" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <a href="tel:[TELEPHONE]" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
            <Phone size={14} />
            [Telephone — To be confirmed]
          </a>
          <a href="mailto:[EMAIL]" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
            <Mail size={14} />
            [Email — To be confirmed]
          </a>
          <a href="https://wa.me/+27609953719" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>
              <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Reubray (Pty) Ltd</strong> &nbsp;|&nbsp; FSP No. 54667 &nbsp;|&nbsp; Reg. No. 2024/720678/07
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem' }}>
              Reubray is a licensed Financial Services Provider authorised and regulated by the Financial Sector Conduct Authority (FSCA). Reubray is not an insurance underwriter.
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield size={13} style={{ color: 'var(--rb-gold-light)' }} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>
              FSP 54667 · FSCA Authorised
            </span>
          </div>
        </div>

        <div className="pb-6 text-center">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif', fontSize: '0.65rem' }}>
            © {new Date().getFullYear()} Reubray (Pty) Ltd. All rights reserved. &nbsp;
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
            &nbsp;·&nbsp;
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}