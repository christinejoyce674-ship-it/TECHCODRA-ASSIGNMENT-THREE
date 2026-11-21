import { useState } from "react";
import Header from "../components/Header";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const nextErrors = {};

    if (!name) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);
    setStatus("");

    if (Object.keys(nextErrors).length === 0) {
      setStatus(
        "The form is valid, but email delivery is not configured yet. Your message has not been sent.",
      );
    }
  };

  const clearError = (field) => {
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: "",
    }));
    setStatus("");
  };

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-88px)] bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-6 py-16 sm:py-24">
        <section
          className="mx-auto max-w-3xl scroll-mt-24 rounded-3xl bg-white p-6 shadow-xl shadow-violet-900/5 sm:p-10"
          id="contact-form"
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffbb48]">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Let’s talk about your project
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Fill in the form and I’ll be glad to hear from you.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            onReset={() => {
              setErrors({});
              setStatus("");
            }}
            noValidate
          >
            <div>
              <label
                className="mb-2 block font-semibold text-slate-800"
                htmlFor="contact-name"
              >
                Your name
              </label>
              <input
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                onChange={() => clearError("name")}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                className="mb-2 block font-semibold text-slate-800"
                htmlFor="contact-email"
              >
                Your email
              </label>
              <input
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={() => clearError("email")}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                className="mb-2 block font-semibold text-slate-800"
                htmlFor="contact-message"
              >
                Your message
              </label>
              <textarea
                className="min-h-40 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
                id="contact-message"
                name="message"
                rows="6"
                maxLength="3000"
                placeholder="Write your message..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={() => clearError("message")}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>

            {status && (
              <p
                className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900"
                role="status"
              >
                {status}
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-lg bg-[#ffbb48] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbb48]"
                type="submit"
              >
                Send message
              </button>
              <button
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbb48]"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
