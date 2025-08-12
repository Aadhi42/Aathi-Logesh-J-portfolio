import heroImage from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/use-typing-effect";

interface HeroProps {
  name?: string;
  roles?: string[];
  resumeUrl?: string;
}

export default function Hero({
  name = "Your Name",
  roles = ["Web Developer", "Designer", "Freelancer"],
  resumeUrl = "/resume.pdf",
}: HeroProps) {
  const typed = useTypingEffect(roles, 90, 1200);

  return (
    <section id="home" aria-label="Hero" className="relative min-h-[92vh] flex items-center">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, hsl(var(--background)/0), hsl(var(--background)/0.2)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-enter">
          <p className="text-sm text-muted-foreground">Welcome</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm {name}
          </h1>
          <p className="text-lg text-primary font-medium h-7" aria-live="polite">{typed}</p>
          <p className="text-muted-foreground max-w-prose">
            I craft modern, accessible, and performant web experiences with a focus on clean design and smooth interactions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center animate-scale-in">
          <img
            src={avatar}
            alt="Professional avatar for portfolio"
            className="rounded-full w-56 h-56 object-cover border shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
