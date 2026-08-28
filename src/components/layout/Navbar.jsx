import { Link, NavLink } from "react-router";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 font-bold text-white">
              P
            </div>

            <span className="text-lg font-bold tracking-tight">
              PixelUI
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <NavLink
              to="/components"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`
              }
            >
              Components
            </NavLink>

            <NavLink
              to="/docs"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`
              }
            >
              Docs
            </NavLink>

            <a
              href="https://github.com/YOUR_USERNAME/pixelui"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm transition-all duration-200 hover:bg-zinc-100"
            >
              GitHub
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;