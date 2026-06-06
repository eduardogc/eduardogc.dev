import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AnimatedSection } from "../components/AnimatedSection";
import { content } from "../lib/content";

const WHATSAPP_NUMBER = "5531996675317";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, gostaria de fazer um orçamento para um site institucional ou landing page.",
);

function DeviceMobileIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto mb-3 text-purple-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto mb-3 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto mb-3 text-cyan-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto mb-3 text-green-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto mb-3 text-purple-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto mb-3 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

const featureIcons = [
  DeviceMobileIcon,
  SearchIcon,
  LightningIcon,
  ChatIcon,
  GlobeIcon,
  HeartIcon,
];

export default function SitesInstitucionais() {
  const [lang, setLang] = useState("pt");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Head>
        <title>{t.sites.title} | Eduardo GC</title>
        <meta name="description" content={t.sites.heroText} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url"
          content="https://eduardogc.com/websites"
        />
        <meta property="og:title" content={`${t.sites.title} | Eduardo GC`} />
        <meta property="og:description" content={t.sites.heroText} />
        <meta property="og:image" content="https://github.com/eduardogc.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url"
          content="https://eduardogc.com/websites"
        />
        <meta
          property="twitter:title"
          content={`${t.sites.title} | Eduardo GC`}
        />
        <meta property="twitter:description" content={t.sites.heroText} />
        <meta
          property="twitter:image"
          content="https://github.com/eduardogc.png"
        />
      </Head>

      <Navbar lang={lang} setLang={setLang} texts={t.nav} />

      <main id="main-content">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-12 md:px-24 pt-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />

          <div className="max-w-5xl mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full glass text-sm font-medium text-purple-300 mb-6">
                {t.sites.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="gradient-text">{t.sites.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                {t.sites.heroText}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                {t.sites.cta}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </section>

        {/* Description */}
        <section className="section">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {t.sites.description1}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.sites.description2}
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Features */}
        <section className="section bg-white/5 relative">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <AnimatedSection>
              <h2 className="section-title text-white">{t.sites.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {t.sites.features.map((feature, index) => {
                  const IconComponent = featureIcons[index];
                  return (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="card text-center p-6"
                    >
                      <IconComponent />
                      <h3 className="text-lg font-semibold gradient-text">
                        {feature}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <AnimatedSection>
            <div className="glass-strong rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                {t.sites.title}
              </h2>
              <p className="text-xl text-gray-400 mb-10">{t.sites.subtitle}</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                {t.sites.cta}
              </a>
            </div>
          </AnimatedSection>
        </section>
      </main>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 btn btn-secondary p-3 rounded-full transition-all duration-300 ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label={t.sites.backToTop}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Back to Home */}
      <div className="text-center pb-4">
        <a href="/" className="btn btn-secondary px-6">
          {t.sites.backToHome}
        </a>
      </div>

      <Footer />
    </div>
  );
}
