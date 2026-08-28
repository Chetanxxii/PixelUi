import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Components from "./pages/Components";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;