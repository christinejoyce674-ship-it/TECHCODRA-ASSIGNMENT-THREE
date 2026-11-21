import { Link } from "react-router";
import Header from "../components/Header";
import portrait from "../images/image1.png";
import googleCloudLogo from "../assets/GCP.b1a128ce.png";
import graphQLLogo from "../assets/graphql.e8b60270.png";
import nodeLogo from "../assets/icons8-nodejs-500.23d4be78.png";
import javaLogo from "../assets/java.74e943d8.png";
import reactLogo from "../assets/react.svg";

const technologies = [
  { name: "React", image: reactLogo },
  { name: "GraphQL", image: graphQLLogo },
  { name: "Node.js", image: nodeLogo },
  { name: "Java", image: javaLogo },
  { name: "Google Cloud", image: googleCloudLogo },
];

const services = [
  {
    title: "Mobile app development",
    description:
      "Thoughtful mobile experiences with clear flows and interfaces that are easy to use.",
  },
  {
    title: "Frontend development",
    description:
      "Responsive web interfaces built with React and a focus on polished details.",
  },
  {
    title: "API and cloud integration",
    description:
      "Connecting user-facing applications with services, APIs, and cloud platforms.",
  },
];

const testimonials = [
  {
    topic: "iOS & Android",
    quote:
      "Joyce turned our rough idea into an app that feels effortless to use. Every detail, from onboarding to checkout, was thought through.",
    name: "Alex Morgan",
    role: "Founder, Grove Market",
    image:
      "https://res.cloudinary.com/zqo9aoei/image/upload/v1786606469/image-daniel_pn9qdy.jpg",
  },
  {
    topic: "Product Partnership",
    quote:
      "More than a developer—a genuine product partner. Joyce asked the right questions, communicated clearly, and made the whole process feel simple.",
    name: "Daniela Lee",
    role: "Product Lead, Tempo",
    image:
      "https://res.cloudinary.com/zqo9aoei/image/upload/v1786606468/image-jeanette_rsa5jt.jpg",
  },
  {
    topic: "Launch & Support",
    quote:
      "Our launch felt calm, not chaotic. The app was fast, the handover was clear, and we had someone we could count on long after release.",
    name: "Jordan Taylor",
    role: "Co-founder, Fieldnote",
    image:
      "https://res.cloudinary.com/zqo9aoei/image/upload/v1786606468/image-kira_u5oncy.jpg",
  },
];

const About = () => (
  <>
    <Header />
    <main className="text-slate-800">
      <section
        className="scroll-mt-24 bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-6 py-20 sm:py-28"
        id="about-me"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="mx-auto w-full max-w-[420px] rounded-[2rem] bg-gradient-to-br from-indigo-200 via-white to-violet-300 p-2 shadow-2xl">
            <img
              className="aspect-[4/5] w-full rounded-[1.65rem] object-cover object-[center_45%]"
              src={portrait}
              alt="Image of Christine Joyce"
              loading="lazy"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ffbb48]">
              About Me
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Turning ideas into digital experiences
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I’m Nakiganda Christine Joyce, a mobile developer who enjoys turning ideas
              into thoughtful, user-friendly digital experiences.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              I care about clear interfaces, useful features, and building
              applications that work well across devices. My toolkit includes
              React, Java, Node.js, GraphQL, and Google Cloud.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded-lg bg-[#ffbb48] px-5 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbb48]"
                to="/contact"
              >
                Get in touch
              </Link>
              <Link
                className="rounded-lg border border-[#ffbb48] px-5 py-3 font-semibold text-[#ffbb48] transition hover:bg-[#fff8ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbb48]"
                to="/skills"
              >
                View my skills
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" aria-labelledby="toolkit-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffbb48]">
              My toolkit
            </p>
            <h2
              className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
              id="toolkit-heading"
            >
              Technologies I work with
            </h2>
          </div>
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

      <section
        className="bg-slate-50 px-6 py-20 sm:py-24"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffbb48]">
              What I do
            </p>
            <h2
              className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
              id="services-heading"
            >
              How I can help
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
                key={service.title}
              >
                <span className="text-sm font-bold text-[#ffbb48]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-20 sm:py-24"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffbb48]">
              Testimonials
            </p>
            <h2
              className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
              id="testimonials-heading"
            >
              Clients say about me
            </h2>
            
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                key={testimonial.name}
              >
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#ffbb48]">
                  {testimonial.topic}
                </p>
                <blockquote className="flex-1 text-base leading-7 text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>
                    <span className="block font-bold text-slate-900">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#ffbb48] px-8 py-10 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold">Have a project in mind?</h2>
            <p className="mt-2 text-white/85">
              I’d love to hear what you’re building.
            </p>
          </div>
          <Link
            className="shrink-0 rounded-lg bg-white px-5 py-3 font-semibold text-[#ffbb48] transition hover:bg-[#fff8ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            to="/contact"
          >
            Contact me
          </Link>
        </div>
      </section>
    </main>
  </>
);

export default About;
