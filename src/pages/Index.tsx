import Contact from '@/components/Contact';
import DivisionsGrid from '@/components/DivisionsGrid';
import FeaturedCompanies from '@/components/FeaturedCompanies';
import Footer from '@/components/Footer';
import GroupOverview from '@/components/GroupOverview';
import Hero from '@/components/Hero';
import LegacyConstruction from '@/components/LegacyConstruction';
import ManufacturingExcellence from '@/components/ManufacturingExcellence';
import Navbar from '@/components/Navbar';
import SustainabilitySection from '@/components/SustainabilitySection';
import TradingNetwork from '@/components/TradingNetwork';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <Navbar />
      <Hero />
      <GroupOverview />
      <DivisionsGrid />
      <FeaturedCompanies />
      <LegacyConstruction />
      <ManufacturingExcellence />
      <TradingNetwork />
      <SustainabilitySection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
