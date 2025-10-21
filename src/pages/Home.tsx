import Hero from "../components/home/Hero";
import InvestmentSection from "../components/home/InvestmentSection";
import Newsletter from "../components/home/Newsletter";
import PaymentMethods from "../components/home/PaymentMethod";
import PropertySection from "../components/home/PropertySection";


export const Home = () => (
  <>
    <Hero />
    <PropertySection title="Latest Off Plan Properties" />
    <PropertySection title="Latest Ready Properties" />
    <InvestmentSection />
    <PaymentMethods />
    <Newsletter />
  </>
)


export default Home;