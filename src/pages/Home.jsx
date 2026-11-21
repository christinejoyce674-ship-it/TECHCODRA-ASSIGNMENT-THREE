
import Header from "../components/Header"
import portrait from "../images/image1.png"
import githubLogo from "../assets/github-logo.76d344f0.svg"
import { Link } from "react-router"

const Home = () => (
  <>
    <Header />
    <main className="min-h-[calc(100vh-88px)]">
      <section className="flex min-h-[calc(100vh-88px)] items-center bg-[radial-gradient(ellipse_at_82%_50%,rgba(133,79,238,0.09),transparent_42%),white] px-6 py-[clamp(3rem,8vw,7rem)] max-[700px]:min-h-[calc(100vh-76px)]">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-[clamp(2rem,6vw,6rem)] text-center lg:grid-cols-[1.1fr_0.9fr] lg:text-left">
          <div>
            <h3 className="mb-5 flex items-center justify-center gap-4 text-lg font-semibold text-[#55556b] after:h-0.5 after:w-[clamp(3rem,9vw,7rem)] after:bg-gradient-to-r after:from-[#3157D5] after:to-[#854fee] after:content-[''] lg:justify-start">
              Hello, I’m
            </h3>
            <h1 className="m-0 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.08] text-[#24243a]">
               Nakiganda Christine Joyce
            </h1>
            <h2 className="mt-5 text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-[#ffbb48]">
              Mobile Developer
            </h2>
            <p className="mt-4 text-[1.05rem] leading-[1.7] text-[#626276]">
              I build thoughtful, user-friendly mobile experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#ffbb48] bg-[#ffbb48] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,187,72,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbb48]"
                to="/contact"
              >
                Contact Me
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#ffbb48] px-5 py-3 text-sm font-bold text-[#ffbb48] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,187,72,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbb48]"
                to="/skills"
              >
                Explore my skills
              </Link>
              <a
                href="https://github.com/christinejoyce674-ship-it"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-[#24243a] transition hover:-translate-y-0.5 hover:border-[#ffbb48] hover:text-[#ffbb48] hover:shadow-[0_12px_30px_rgba(255,187,72,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbb48]"
              >
                <img src={githubLogo} alt="" className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[420px] rounded-[2rem] bg-gradient-to-br from-indigo-200 via-white to-violet-300 p-2 shadow-2xl">
            <img
              className="aspect-[4/5] w-full rounded-[1.65rem] object-cover object-[center_45%]"
              src={portrait}
              alt="Image of Christine Joyce"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Home;
