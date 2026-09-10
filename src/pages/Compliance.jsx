import { Shield, FileText, Download } from 'lucide-react';

const documents = [
  { name: 'FSP Disclosure', status: 'Pending approval' },
  { name: 'Privacy Notice', status: 'Pending approval' },
  { name: 'POPIA Information', status: 'Pending approval' },
  { name: 'Terms & Conditions', status: 'Pending approval' },
  { name: 'Complaints Procedure', status: 'Pending approval' },
  { name: 'Conflict of Interest Policy', status: 'Pending approval' },
  { name: 'PAIA Manual', status: 'Pending approval' },
  { name: 'Product Disclosures', status: 'Pending approval' },
  { name: 'Regulatory Notices', status: 'Pending approval' },
];

export default function Compliance() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>
            Trust. Transparency.<br />
            <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>Accountability.</em>
          </h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Access Reubray's regulatory, compliance and company information.
          </p>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="gold-rule" />
            <h2 className="serif-display text-3xl font-light mb-6">Company information</h2>
            <div className="space-y-4">
              {[
                { label: 'Registered Name', value: 'Reubray (Pty) Ltd' },
                { label: 'FSP Number', value: '54667' },
                { label: 'Company Registration', value: '2024/720678/07' },
                { label: 'Regulator', value: 'Financial Sector Conduct Authority (FSCA)' },
                { label: 'Status', value: 'Licensed and Authorised FSP' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between py-3 border-b" style={{ borderColor: 'var(--rb-stone)' }}>
                  <span className="text-sm font-medium" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                  <span className="text-sm text-right" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="gold-rule" />
            <h2 className="serif-display text-3xl font-light mb-6">Regulatory information</h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p>Reubray (Pty) Ltd is a licensed Financial Services Provider (FSP No. 54667), authorised and regulated by the Financial Sector Conduct Authority (FSCA) of South Africa under the Financial Advisory and Intermediary Services Act, 2002 (FAIS Act).</p>
              <p>Reubray acts as an intermediary and adviser. We are not an insurance underwriter or manufacturer of insurance products.</p>
              <p>All financial advice and intermediary services are provided within the scope of Reubray's FSCA authorisation. Clients are advised to confirm the current scope of authorisation with Reubray before engaging our services.</p>
              <p>Reubray is committed to the principles of Treating Customers Fairly (TCF), as required by the FSCA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT LIBRARY */}
      <section className="py-20 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="gold-rule mx-auto" />
            <h2 className="serif-display text-4xl font-light">Document library</h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>Only current, approved documents will be published. Documents are being prepared subject to Reubray's compliance review process.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div key={doc.name} className="card-soft p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(15,31,77,0.07)' }}>
                  <FileText size={18} style={{ color: 'var(--rb-navy)' }} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>{doc.name}</p>
                  <p className="text-xs" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif' }}>{doc.status}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-lg" style={{ background: 'rgba(15,31,77,0.04)', border: '1px solid var(--rb-stone)' }}>
            <div className="flex items-start gap-4">
              <Shield size={20} style={{ color: 'var(--rb-navy)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--rb-navy)', fontFamily: 'Inter, sans-serif' }}>Regulatory commitment</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                  Reubray is committed to full regulatory compliance and transparency. All regulated product, financial, legal and regulatory content is reviewed and approved before publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}