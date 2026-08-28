import Container from "./Container";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white font-bold">
              P
            </div>

            <h1 className="text-lg font-bold tracking-tight">
              PixelUI
            </h1>
          </div>

          <div className="flex items-center gap-6">
           <Link
  to="/components"
  className="text-sm text-zinc-600 transition hover:text-zinc-900"
>
  Components
</Link>

            <button className="text-sm text-zinc-600 hover:text-zinc-900 transition">
              Docs
            </button>

            <button className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 transition">
              GitHub
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;