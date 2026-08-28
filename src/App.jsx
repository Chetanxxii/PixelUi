import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import FeaturedComponents from "./components/layout/FeaturedComponents";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <FeaturedComponents />
    </div>
  );
}

export default App;