import profile from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  name?: string;
  roles?: string[];
  resumeUrl?: string;
}

export default function Hero({
  name = "Aathi Logesh J",
  roles = ["Web Developer", "Java Developer"],
  resumeUrl = "/resume.pdf",
}: HeroProps) {
  const typed = useTypingEffect(roles, 90, 1200);

  return (
    <section id="home" aria-label="Hero" className="relative min-h-[92vh] flex items-center">
      <div className="container flex flex-col items-center text-center relative z-10">
        <div className="space-y-6 animate-enter bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl max-w-4xl">
          <p className="text-sm text-muted-foreground">Welcome</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm Aathi
          </h1>
          <p className="text-lg text-primary font-medium h-7" aria-live="polite">{typed}</p>
          <p className="text-muted-foreground max-w-prose mx-auto">
            Hi, I'm Aathi, a passionate and curious developer who believes in working smarter, not just harder. I love finding efficient, creative solutions that save time without compromising quality.
          </p>
          <p className="text-muted-foreground max-w-prose mx-auto">
            My approach to learning and building is all about leveraging the right tools, automation, and innovative thinking — just like I did when I created this portfolio using Vibe Coding. It's proof that with the right mindset and smart strategies, you can achieve professional results without endless hours of grind.
          </p>
          <p className="text-muted-foreground max-w-prose mx-auto">
            I'm always eager to explore new technologies, refine my skills, and craft projects that combine functionality, design, and performance to deliver exceptional digital experiences.
          </p>
          <div className="flex gap-4 pt-2 justify-center">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aadhi-logesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a aria-label="GitHub" href="https://github.com/Aadhi42" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a aria-label="Email" href="mailto:aathilogesh@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-2 justify-center">
            <Button asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/resume.pdf" download="Aathi_Logesh_Resume.pdf">Download Resume</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 animate-scale-in">
          <img
            src={profile}
            alt="Professional avatar for portfolio"
            className="rounded-xl w-72 h-72 object-cover border shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
