import Header from "../components/Header";
import googleCloudLogo from "../assets/GCP.b1a128ce.png";
import graphQLLogo from "../assets/graphql.e8b60270.png";
import nodeLogo from "../assets/icons8-nodejs-500.23d4be78.png";
import javaLogo from "../assets/java.74e943d8.png";
import reactLogo from "../assets/react.svg";

const skills = [
  {
    title: "Mobile development",
    description:
      "Create clear, user-friendly mobile experiences with thoughtful layouts and interactions.",
  },
  {
    title: "Frontend development",
    description:
      "Build responsive interfaces with React, reusable components, and attention to detail.",
  },
  {
    title: "API integration",
    description:
      "Connect application interfaces to backend services and GraphQL APIs.",
  },
  {
    title: "Cloud technologies",
    description:
      "Work with Google Cloud alongside application and backend technologies.",
  },
];

const technologies = [
  { name: "React", image: reactLogo },
  { name: "GraphQL", image: graphQLLogo },
  { name: "Node.js", image: nodeLogo },
  { name: "Java", image: javaLogo },
  { name: "Google Cloud", image: googleCloudLogo },
];

const Skills = () => (
  <>
    <Header />
    <main className="text-slate-800">
      <section
        className="scroll-mt-24 bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-6 py-20 sm:py-28"
        id="skills"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffbb48]">
              Skills
            </p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
              What I can do
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              I enjoy creating useful digital products, from the interface
              people use to the services that support it.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <article
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                key={skill.title}
              >
                <span className="text-sm font-bold text-violet-600">
                  0{index + 1}
                </span>
                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  {skill.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {skill.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-20 sm:py-24"
        aria-labelledby="technologies-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-10 text-center text-3xl font-bold text-slate-900 sm:text-4xl"
            id="technologies-heading"
          >
            Tools and technologies
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map((technology) => (
              <div
                className="flex min-h-36 flex-col items-center justify-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                key={technology.name}
              >
                <img
                  className="h-14 w-14 object-contain"
                  src={technology.image}
                  alt=""
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-slate-700">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Skills;
