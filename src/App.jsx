import Customers from "./components/Customers/Customers";
import ExploreProduct from "./components/ExploreProduct/ExploreProduct";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/navbar";
import Services from "./components/Services/Services";
import SpecialProduct from "./components/SpecialProduct/SpecialProduct";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <SpecialProduct />
      <ExploreProduct />
      <Customers />
    </>
  );
}

export default App;
