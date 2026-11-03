import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandValues from './components/BrandValues';
import ProductRoutine from './components/ProductRoutine';
import SkinQuiz from './components/SkinQuiz';
import CatalogCategories from './components/CatalogCategories';
import BusinessOpportunity from './components/BusinessOpportunity';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream font-montserrat">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <BrandValues />
        <ProductRoutine />
        <SkinQuiz />
        <CatalogCategories />
        <BusinessOpportunity />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloating />
    </div>
  );
}

