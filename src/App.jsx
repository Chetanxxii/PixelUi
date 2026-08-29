import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Components from "./pages/Components";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import Docs from "./pages/Docs";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-size-[40px_40px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/button" element={<ButtonPage />} />
        <Route path="/components/input" element={<InputPage />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/components/card" element={<CardPage />} />
      </Routes>
    </div>
  );
}

export default App;