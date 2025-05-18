import CompanysLogo from "./Components/CompanysLogo";
import FAQSection from "./Components/FAQSection";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import PricingSection from "./Components/PricingSection";
import ServiceSection from "./Components/ServiceSection";
import TestimonialSection from "./Components/TestimonialSection";
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
    </div>
  );
};

export default App;
