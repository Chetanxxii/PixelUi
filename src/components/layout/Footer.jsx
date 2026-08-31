import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 font-bold text-white">
                P
              </div>

              <span className="text-lg font-bold">PixelUI</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-zinc-600">
              Handcrafted React + Tailwind components built to be copied,
              understood and reused.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">Explore</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-600">
              <Link to="/">Home</Link>
              <Link to="/components">Components</Link>
              <Link to="/docs">Documentation</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold">Connect</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-600">
              <a
                href="https://github.com/YOUR_USERNAME/pixelui"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <span>Build in Public 🚀</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          © 2026 PixelUI. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;