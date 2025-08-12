import avatar from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" aria-label="About Me" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="text-muted-foreground mt-2">A quick introduction</p>
        </header>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={avatar}
              alt="Profile portrait"
              className="rounded-xl w-72 h-72 object-cover border shadow-lg animate-fade-in"
              loading="lazy"
            />
          </div>
          <article className="space-y-4 animate-fade-in">
            <p>
              I'm a passionate developer focused on building delightful, accessible, and performant web applications. I love turning complex problems into simple, beautiful interfaces.
            </p>
            <p>
              With experience across the stack, I specialize in React, TypeScript, and modern CSS—bringing designs to life with smooth motion and clean semantics.
            </p>
            <p>
              When I'm not coding, I explore design trends, contribute to open-source, and learn new technologies.
            </p>
            <Button asChild className="mt-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
