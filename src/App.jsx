import { Toaster } from "./components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from './lib/AuthContext';
import ScrollToTop from './components/ScrollToTop';

// Layout
import SiteLayout from '@/components/layout/SiteLayout';

// Pages
import Home from '@/pages/Home';
import Personal from '@/pages/Personal';
import Business from '@/pages/Business';
import Corporate from '@/pages/Corporate';
import Solutions from '@/pages/Solutions';
import GetAQuote from '@/pages/GetAQuote';
import RequestAdvice from '@/pages/RequestAdvice';
import About from '@/pages/About';
import Resources from '@/pages/Resources';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import Claims from '@/pages/Claims';
import Complaints from '@/pages/Complaints';
import Compliance from '@/pages/Compliance';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/business" element={<Business />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/get-a-quote" element={<GetAQuote />} />
              <Route path="/request-advice" element={<RequestAdvice />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
