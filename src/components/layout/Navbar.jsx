import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/PHOTO.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Personal', path: '/personal' },
  { label: 'Business', path: '/business' },
  { label: 'Corporate', path: '/corporate' },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Resources & Education', path: '/resources' },
      { label: 'FAQs', path: '/faq' },
    ],
  },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(249,247,242,0.97)' : 'rgba(249,247,242,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '0.5px solid #C8C3BB' : '0.5px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(15,31,77,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              // src="https://media.base44.com/images/public/user_6a9312978100dad802d1cc99/e944978a6_ReubrayLOGOPHOTO.jpg"
              src={logo}
              alt="Reubray"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div>
              <span className="serif-display font-semibold text-xl" style={{ color: 'var(--rb-navy)' }}>
                REUBRAY
              </span>
              <span className="block text-xs tracking-widest uppercase sans-body font-light" style={{ color: 'var(--rb-muted)', letterSpacing: '0.2em', fontSize: '0.55rem' }}>
                PTY LTD
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="nav-link flex items-center gap-1"
                    style={{ color: isActive(item.path) ? 'var(--rb-navy)' : 'var(--rb-charcoal)' }}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown size={13} />
                  </button>
                  <div
                    className="absolute top-full left-0 pt-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="bg-white border rounded-lg shadow-xl py-2" style={{ borderColor: 'var(--rb-stone)' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                          style={{ color: 'var(--rb-charcoal)', fontFamily: 'Inter, sans-serif' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  style={{ color: isActive(item.path) ? 'var(--rb-navy)' : 'var(--rb-charcoal)' }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/request-advice" className="btn-secondary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.7rem' }}>
              Request Advice
            </Link>
            <Link to="/get-a-quote" className="btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.7rem', background: 'linear-gradient(135deg, #C97A2A 0%, #E8A547 100%)' }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--rb-navy)' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ background: 'var(--rb-parchment)', borderColor: 'var(--rb-stone)' }}>
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="block py-3 text-base font-medium border-b"
                  style={{ color: 'var(--rb-navy)', borderColor: 'var(--rb-stone)', fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className="block py-2.5 pl-4 text-sm"
                    style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <Link to="/request-advice" className="btn-secondary w-full text-center block">Request Advice</Link>
              <Link to="/get-a-quote" className="btn-gold w-full text-center block">Get a Quote</Link>
            </div>
            {/* Utility links */}
            <div className="pt-4 flex gap-6 text-xs" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
              <Link to="/claims">Claims</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/complaints">Complaints</Link>
              <Link to="/compliance">Compliance</Link>
            </div>
          </nav>
        </div>
      )}

      {/* Utility Bar - desktop only */}
      <div className="hidden lg:block border-t" style={{ borderColor: 'var(--rb-stone)', background: 'rgba(229,224,216,0.4)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-end gap-6 py-1.5">
          {[
            { label: 'Claims', path: '/claims' },
            { label: 'Contact', path: '/contact' },
            { label: 'Complaints', path: '/complaints' },
            { label: 'Compliance & Trust', path: '/compliance' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-xs transition-colors hover:underline"
              style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}