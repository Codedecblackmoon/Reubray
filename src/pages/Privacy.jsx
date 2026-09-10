import { Link } from 'react-router-dom';

export default function Privacy() {
  const h3Style = { fontFamily: 'Cormorant Garamond, serif', color: 'var(--rb-navy)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', marginTop: '2.5rem' };
  const pStyle = { color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300, lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.9375rem' };

  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>Your privacy matters.</h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Reubray's Privacy Notice and POPIA information.</p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-6 rounded-lg mb-10" style={{ background: 'rgba(201,122,42,0.08)', border: '1px solid rgba(201,122,42,0.25)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-charcoal)', fontFamily: 'Inter, sans-serif' }}>
              <strong>Important notice:</strong> The final legal content of this Privacy Notice must be supplied and approved by Reubray and its legal advisers before publication. The content below is a draft framework for structure purposes only.
            </p>
          </div>

          <div className="gold-rule" />

          <h3 style={h3Style}>Who we are</h3>
          <p style={pStyle}>Reubray (Pty) Ltd (FSP No. 54667, Registration No. 2024/720678/07) is the responsible party for the personal information we process. This Privacy Notice explains how we collect, use, store and protect your information.</p>

          <h3 style={h3Style}>Information we collect</h3>
          <p style={pStyle}>We may collect personal information including your name, contact details, date of birth, identity number, financial information, employment details, and any other information necessary to provide our services to you.</p>

          <h3 style={h3Style}>Why we collect your information</h3>
          <p style={pStyle}>We collect and process your personal information to provide financial and insurance advisory and intermediary services, to respond to enquiries, to comply with our legal and regulatory obligations, and where you have provided consent.</p>

          <h3 style={h3Style}>How your information is used</h3>
          <p style={pStyle}>Your information may be used to assess your insurance and financial needs, to communicate with you, to comply with regulatory requirements, and — where necessary — to share with applicable product providers or insurers to facilitate the services you have requested.</p>

          <h3 style={h3Style}>Data protection and POPIA</h3>
          <p style={pStyle}>Reubray is committed to complying with the Protection of Personal Information Act, 2013 (POPIA). We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, use or disclosure.</p>

          <h3 style={h3Style}>Your rights</h3>
          <p style={pStyle}>You have the right to access, correct, and request the deletion of your personal information. You may also withdraw consent where processing is based on consent. To exercise your rights, please contact us using the details on our Contact page.</p>

          <h3 style={h3Style}>Third parties</h3>
          <p style={pStyle}>We may share your information with product providers, insurers, and service providers where necessary to provide our services to you. We will only share information in accordance with POPIA and will not sell your personal information to third parties.</p>

          <h3 style={h3Style}>Contact information</h3>
          <p style={pStyle}>For privacy-related enquiries, please contact Reubray at [Privacy contact details — to be confirmed]. Our Information Officer details will be published once confirmed.</p>

          <div className="mt-10 pt-8 border-t" style={{ borderColor: 'var(--rb-stone)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
              This Privacy Notice is subject to review and approval by Reubray and its legal advisers. Final legal content will be published once approved. Last reviewed: August 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}