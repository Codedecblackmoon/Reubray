export default function Terms() {
  const h3Style = { fontFamily: 'Cormorant Garamond, serif', color: 'var(--rb-navy)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', marginTop: '2.5rem' };
  const pStyle = { color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300, lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.9375rem' };

  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>Terms & Conditions</h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Website terms of use and applicable disclaimers.</p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-6 rounded-lg mb-10" style={{ background: 'rgba(201,122,42,0.08)', border: '1px solid rgba(201,122,42,0.25)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-charcoal)', fontFamily: 'Inter, sans-serif' }}>
              <strong>Important notice:</strong> These Terms & Conditions are a draft framework only. Final legal content must be supplied and approved by Reubray and its legal advisers before publication.
            </p>
          </div>

          <div className="gold-rule" />

          <h3 style={h3Style}>Website terms of use</h3>
          <p style={pStyle}>By accessing and using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website.</p>

          <h3 style={h3Style}>Information on this website</h3>
          <p style={pStyle}>The information on this website is provided for general informational and educational purposes only. It does not constitute financial, insurance or legal advice. Reubray recommends that you consult with a qualified adviser before making any financial or insurance decisions.</p>

          <h3 style={h3Style}>Product information disclaimer</h3>
          <p style={pStyle}>Product descriptions on this website are general summaries only. All insurance and financial products are subject to the terms, conditions, exclusions and underwriting criteria of the relevant product provider or insurer. Product information on this website does not constitute a binding quotation or offer of cover.</p>

          <h3 style={h3Style}>Quote disclaimers</h3>
          <p style={pStyle}>Quote requests submitted through this website are requests for an adviser to contact you — they do not constitute a binding insurance quotation. All quotations are subject to the underwriting criteria and terms of the applicable product provider.</p>

          <h3 style={h3Style}>Third-party providers</h3>
          <p style={pStyle}>Reubray acts as an intermediary between clients and product providers. Reubray is not responsible for the acts, omissions, or product terms of third-party product providers or insurers. Insurance contracts are agreements between the client and the applicable product provider.</p>

          <h3 style={h3Style}>Liability</h3>
          <p style={pStyle}>To the extent permitted by law, Reubray excludes liability for any loss or damage arising from reliance on information contained on this website. Reubray's liability is limited to the maximum extent permitted by applicable law.</p>

          <h3 style={h3Style}>Governing law</h3>
          <p style={pStyle}>These Terms & Conditions are governed by the laws of the Republic of South Africa.</p>

          <div className="mt-10 pt-8 border-t" style={{ borderColor: 'var(--rb-stone)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>
              These Terms & Conditions are subject to approval by Reubray and its legal advisers. Last reviewed: August 2026. Reubray (Pty) Ltd · FSP No. 54667
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}