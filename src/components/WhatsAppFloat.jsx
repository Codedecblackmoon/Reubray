import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/+27728767699"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      style={{ background: '#25D366' }}
      aria-label="WhatsApp Reubray"
      title="WhatsApp Reubray"
    >
      <MessageCircle size={26} color="white" fill="white" />
    </a>
  );
}