import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface SkillBarProps { name: string; level: number; }

function SkillBar({ name, level }: SkillBarProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setWidth(level), 150);
      return () => clearTimeout(timeout);
    }
  }, [inView, level]);

  return (
    <div className="space-y-2" ref={ref}>
      <div className="flex items-center justify-between text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
          style={{ width: `${width}%` }}
          role="progressbar"
          aria-valuenow={width}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const technical = [
    { name: "HTML", level: 95 },
    { name: "CSS / Tailwind", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 70 },
  ];

  const tools = ["Git", "GitHub", "VS Code", "Vite", "Figma", "Supabase"];

  return (
    <section id="skills" aria-label="Skills" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <p className="text-muted-foreground mt-2">Technologies and tools I use</p>
        </header>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 animate-fade-in">
            {technical.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 content-start animate-fade-in">
            {tools.map((t) => (
              <div
                key={t}
                className="flex items-center justify-center h-20 rounded-md border bg-card text-sm text-muted-foreground hover-scale"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
