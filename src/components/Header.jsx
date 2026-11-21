import { Link } from "react-router"
import logo from  "../images/logo.png"
import githubLogo from "../assets/github-logo.76d344f0.svg"

const Header = () => (
  <header className="sticky top-0 z-10 bg-white/95 shadow-[0_4px_20px_rgba(36,36,58,0.06)]">
      <nav
        className="mx-auto flex min-h-[88px] w-[calc(100%-3rem)] max-w-[1200px] items-center justify-between max-[700px]:min-h-[76px] max-[700px]:w-[calc(100%-2rem)] max-[400px]:w-[calc(100%-1rem)]"
        aria-label="Main navigation"
      >
        <Link to="/" aria-label="Tina's portfolio home" className="inline-flex items-center gap-2">
          <img
            className="block h-14 w-14 rounded-full object-cover max-[700px]:h-11 max-[700px]:w-11"
            src={logo}
            alt="Tina's profile"
          />
          <p className="text-sm font-bold text-[#24243a] max-[700px]:text-xs">NCJ</p>
        </Link>
        <div className="flex items-center gap-[clamp(0.65rem,3vw,2.5rem)] max-[400px]:gap-2">
          <Link className="py-3 text-sm font-semibold uppercase text-[#24243a] transition-colors hover:text-[#ffbb48] focus-visible:text-[#ffbb48] max-[700px]:text-xs max-[400px]:text-[10px]" to="/">Home</Link>
          <Link className="py-3 text-sm font-semibold uppercase text-[#24243a] transition-colors hover:text-[#ffbb48] focus-visible:text-[#ffbb48] max-[700px]:text-xs max-[400px]:text-[10px]" to="/about">About</Link>
          <Link className="py-3 text-sm font-semibold uppercase text-[#24243a] transition-colors hover:text-[#ffbb48] focus-visible:text-[#ffbb48] max-[700px]:text-xs max-[400px]:text-[10px]" to="/skills">Skills</Link>
          <Link className="py-3 text-sm font-semibold uppercase text-[#24243a] transition-colors hover:text-[#ffbb48] focus-visible:text-[#ffbb48] max-[700px]:text-xs max-[400px]:text-[10px]" to="/contact">Contact</Link>
          <a
            href="https://github.com/christinejoyce674-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="ml-1 flex items-center transition-opacity hover:opacity-70"
          >
            <img
              src={githubLogo}
              alt="GitHub"
              className="h-6 w-6 max-[700px]:h-5 max-[700px]:w-5"
            />
          </a>
        </div>
      </nav>
  </header>
);

export default Header
