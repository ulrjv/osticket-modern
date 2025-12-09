import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { HeroSection } from './HeroSection';
import { MisionVisionValoresSection } from './MisionVisionValoresSection';
import { ServiciosSection } from './ServiciosSection';
import { BeneficiosSection } from './BeneficiosSection';
import { ProyectosSection } from './ProyectosSection';
import { ImpactoSection } from './ImpactoSection';
import { TestimoniosSection } from './TestimoniosSection';
import { FAQsSection } from './FAQsSection';
import { NoticiasSection } from './NoticiasSection';
import { CTAFinalSection } from './CTAFinalSection';

export const CooperativaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <MisionVisionValoresSection />
        <ServiciosSection />
        <BeneficiosSection />
        <ProyectosSection />
        <ImpactoSection />
        <TestimoniosSection />
        <FAQsSection />
        <NoticiasSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </div>
  );
};
