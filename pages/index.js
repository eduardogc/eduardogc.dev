import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SocialLinks } from '../components/SocialLinks';
import { AnimatedSection } from '../components/AnimatedSection';
import { SkillBadge } from '../components/SkillBadge';
import { ExperienceCard } from '../components/ExperienceCard';
import { content } from '../lib/content';

export default function Home() {
  const [lang, setLang] = useState('pt');
  const t = content[lang];

  const skills = [
    "React", "Next.js", "Node.js", "TypeScript", "JavaScript",
    "AWS", "GraphQL", "SQL", "Tailwind CSS", "Sass",
    "Vue", "Angular", "Go", "Java", "C#", "MongoDB"
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Head>
        <title>Eduardo GC | Full Stack Developer & CTO</title>
        <meta name="description" content={t.hero.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar lang={lang} setLang={setLang} texts={t.nav} />

      <main>
        {/* --- Hero Section --- */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8 md:px-16 pt-20">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />

          <div className="max-w-5xl mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full glass text-sm font-medium text-purple-300 mb-6">
                {t.hero.greeting} Eduardo GC
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                <span className="gradient-text">Full Stack</span> <br />
                Developer
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                {t.hero.role}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="#projects" className="btn btn-primary text-lg px-8 py-4">
                  {t.hero.cta}
                </a>
                <SocialLinks />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="section relative px-8 md:px-16">
          <AnimatedSection>
            <h2 className="section-title text-center">{t.about.title}</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
              <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50" />
                <img
                  src="https://github.com/eduardogc.png"
                  alt="Eduardo GC"
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t.about.description}
                </p>
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                  {/* Stats or extra info could go here */}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="section bg-white/5 relative px-8 md:px-16">
          <div className="absolute inset-0 bg-black/50" /> {/* Texture overlay */}
          <div className="relative z-10">
            <AnimatedSection>
              <h2 className="section-title text-center text-white">{t.skills.title}</h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <SkillBadge name={skill} />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- Experience/Projects Section --- */}
        <section id="projects" className="section px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="section-title text-center">{t.projects.title}</h2>
            </AnimatedSection>

            <div className="flex flex-col gap-8">
              {t.experience.map((xp, index) => (
                <ExperienceCard key={index} {...xp} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://linkedin.com/in/geceduardo"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                {t.projects.viewMore}
              </a>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="section px-8 md:px-16">
          <AnimatedSection>
            <div className="glass-strong rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
              <p className="text-xl text-gray-400 mb-10">
                {t.contact.text}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:contact@eduardogc.dev" className="btn btn-primary w-full sm:w-auto px-8">
                  {t.contact.email}
                </a>
                <a href="https://linkedin.com/in/geceduardo" target="_blank" rel="noreferrer" className="btn btn-secondary w-full sm:w-auto px-8">
                  LinkedIn
                </a>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
