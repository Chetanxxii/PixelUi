import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import FeaturedComponents from "../components/layout/FeaturedComponents";
import ComponentShowcase from "../components/layout/ComponentShowcase";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ComponentShowcase />
      <FeaturedComponents />
    </>
  );
};

export default Home;