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
            <article key={proj.title} className="group rounded-xl border bg-card overflow-hidden hover-scale">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={proj.image}
                  alt={`${proj.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <p className="text-sm text-muted-foreground">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-secondary text-xs">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  {proj.demo && (
                    <Button size="sm" asChild>
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer">View Demo</a>
                    </Button>
                  )}
                  {proj.code && (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={proj.code} target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
