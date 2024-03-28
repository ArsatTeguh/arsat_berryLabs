import React from 'react';
import Navbar from '../section/navbar';
import Pricing from '../section/pricing';
import CtaPricing from '../section/ctaPricing';
import Footer from '../section/footer';

function HomePage() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Pricing />
      <CtaPricing />
      <Footer />
    </main>
  );
}

export default HomePage;
