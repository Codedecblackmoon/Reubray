import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from '../WhatsAppFloat';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--rb-parchment)' }}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}