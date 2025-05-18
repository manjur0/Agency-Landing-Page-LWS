import CompanysLogo from "./Components/CompanysLogo";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import PricingSection from "./Components/PricingSection";
import ServiceSection from "./Components/ServiceSection";
import TestimonialSection from "./Components/TestimonialSection";
import Trial from "./Components/Trial";
import TrustedSection from "./Components/TrustedSection";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CompanysLogo />
      <ServiceSection />
      <TrustedSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <Trial />
      <Footer />
    </div>
  );
};

export default App;
