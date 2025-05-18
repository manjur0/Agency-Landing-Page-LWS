import CompanysLogo from "./Components/CompanysLogo";
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
    </div>
  );
};

export default App;
