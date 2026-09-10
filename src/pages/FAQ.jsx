import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const faqCategories = [
  {
    title: 'Insurance',
    faqs: [
      { q: 'What is life insurance?', a: 'Life insurance is a contract between you and an insurer. In exchange for regular premium payments, the insurer agrees to pay a lump sum or income to your nominated beneficiaries in the event of your death. It is designed to provide financial security for those who depend on you.' },
      { q: 'What is funeral cover?', a: 'Funeral cover is a type of insurance policy that provides a cash payout to help cover the costs associated with a funeral. Cover typically pays out quickly to ease the immediate financial burden on the family.' },
      { q: 'What is short-term insurance?', a: 'Short-term insurance provides cover for a fixed period against specific risks — such as damage to your home, vehicle, or personal belongings. Unlike life insurance, it is renewed regularly and does not accumulate a cash value.' },
      { q: 'What is underwriting?', a: 'Underwriting is the process by which an insurer assesses the risk of providing cover to an applicant. Factors such as age, health, lifestyle and occupation may be considered. The outcome of underwriting determines whether cover is offered and on what terms.' },
      { q: 'What are exclusions?', a: 'Exclusions are specific circumstances, events or conditions that a policy will not cover. It is important to read and understand your policy document carefully so you know exactly what is and is not covered.' },
      { q: 'What is a beneficiary?', a: 'A beneficiary is the person or entity you nominate to receive the benefits from your policy in the event of a claim. You should review and update your beneficiary nominations regularly, especially after major life events.' },
    ],
  },
  {
    title: 'Quotes',
    faqs: [
      { q: 'How do I get a quote?', a: 'You can request a quote through the "Get a Quote" page on this website. A Reubray adviser will contact you to discuss your needs and provide appropriate recommendations. We do not provide instant automated quotes — our process is adviser-led.' },
      { q: 'What information do I need?', a: 'To provide a meaningful quote, we will typically ask about your personal details, what you are looking to protect, any existing cover you may have, and your financial circumstances. A Reubray adviser will guide you through the process.' },
      { q: 'How do I contact an adviser?', a: 'You can request advice through the "Request Advice" page, call us directly, send a WhatsApp message, or complete the contact form. Details are available on the Contact page.' },
    ],
  },
  {
    title: 'Claims',
    faqs: [
      { q: 'How do I make a claim?', a: 'Contact Reubray as soon as possible to notify us of the event giving rise to the claim. We will guide you through the process and assist in submitting your claim to the relevant insurer or product provider.' },
      { q: 'What documents are required?', a: 'Required documents vary depending on the type of claim and the applicable insurer. Generally, you may need your policy number, identity document, a description of the event, and supporting documentation such as medical certificates, police reports or invoices.' },
      { q: 'How long does a claim take?', a: 'Claim timelines vary depending on the type of claim, the applicable insurer, and the complexity of the matter. Reubray will assist in liaising with the insurer where possible and keep you informed throughout the process.' },
    ],
  },
  {
    title: 'About Reubray',
    faqs: [
      { q: 'What is an FSP?', a: 'An FSP (Financial Services Provider) is an entity licensed by the Financial Sector Conduct Authority (FSCA) to provide financial services, including insurance advice and intermediary services. Reubray (Pty) Ltd is licensed as an FSP under FSP No. 54667.' },
      { q: 'How is my information protected?', a: 'Reubray takes the protection of your personal information seriously. We handle your data in accordance with the Protection of Personal Information Act (POPIA) and our Privacy Notice. Please refer to our Privacy page for full details.' },
      { q: 'How do I make a complaint?', a: 'If you have a complaint, please refer to our Complaints page for the correct process. We are committed to treating all clients fairly and resolving complaints promptly and professionally.' },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: 'var(--rb-stone)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-navy"
        style={{ color: 'var(--rb-charcoal)' }}
      >
        <span className="serif-display text-lg font-medium" style={{ color: 'var(--rb-navy)' }}>{q}</span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: 'var(--rb-gold)' }}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-base leading-relaxed" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div style={{ paddingTop: '6rem' }}>
      <section className="page-hero text-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-xl mx-auto px-6">
          <h1 className="serif-display font-light mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>
            Questions?<br />
            <em style={{ color: 'var(--rb-gold-light)', fontStyle: 'italic' }}>We've got answers.</em>
          </h1>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: 'var(--rb-parchment)' }}>
        <div className="max-w-3xl mx-auto space-y-14">
          {faqCategories.map((cat) => (
            <div key={cat.title}>
              <div className="gold-rule" />
              <h2 className="serif-display text-3xl font-light mb-6">{cat.title}</h2>
              <div>
                {cat.faqs.map((faq) => (
                  <FAQItem key={faq.q} {...faq} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: 'white' }}>
        <div className="max-w-lg mx-auto">
          <div className="gold-rule mx-auto" />
          <h2 className="serif-display text-3xl font-light mb-4">Still have questions?</h2>
          <p className="text-base mb-8" style={{ color: 'var(--rb-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Speak to a Reubray adviser — we're always happy to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/request-advice" className="btn-secondary">Request Advice</Link>
          </div>
        </div>
      </section>
    </div>
  );
}