import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const NAME = "Your Name"; // Quick edit variable for your name

const Index = () => {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const personJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: NAME,
      url: "https://your-domain.com/",
      sameAs: [
        "https://www.linkedin.com/in/your-profile/",
        "https://github.com/your-handle",
        "mailto:hello@example.com",
      ],
      jobTitle: "Web Developer",
    }),
    []
  );

  return (
    <div>
      <Navbar active={active} name={NAME} />
      <main className="pt-16">
        <Hero name={NAME} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </div>
  );
};

export default Index;
