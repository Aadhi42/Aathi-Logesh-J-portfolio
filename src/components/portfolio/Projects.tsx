import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  code?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Dashboard UI",
    description: "A responsive analytics dashboard with charts, filters, and dark mode.",
    image: p1,
    tech: ["React", "TypeScript", "Tailwind"],
    demo: "#",
    code: "#",
  },
  {
    title: "Marketing Site",
    description: "High-performance landing page with SEO, animations, and CMS-ready sections.",
    image: p2,
    tech: ["Vite", "React", "SEO"],
    demo: "#",
    code: "#",
  },
  {
    title: "Mobile UI Kit",
    description: "Reusable components and patterns for rapid mobile app prototyping.",
    image: p3,
    tech: ["Design", "Components", "UX"],
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <p className="text-muted-foreground mt-2">Selected work</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj) => (
            <article key={proj.title} className="group rounded-xl border bg-card/50 backdrop-blur-md overflow-hidden hover-scale relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={proj.image}
                  alt={`${proj.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 blur-sm"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center p-4">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-muted-foreground">Coming Soon! 🚀</p>
                    <p className="text-sm text-muted-foreground mt-2">Project in development</p>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-muted-foreground">{proj.title}</h3>
                <p className="text-sm text-muted-foreground">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" disabled className="opacity-50">
                    Coming Soon
                  </Button>
                  <Button size="sm" variant="secondary" disabled className="opacity-50">
                    Coming Soon
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4">Projects coming soon! 🚀</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently working on exciting new projects — they'll be showcased here soon. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
}
