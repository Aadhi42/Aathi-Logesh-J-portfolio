import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="text-muted-foreground mt-2">Get to know me better</p>
        </header>
        <div className="flex justify-center">
          <div className="space-y-6 animate-fade-in bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl max-w-4xl text-center">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                I'm currently pursuing my education at SNS College of Technology in Coimbatore, where I'm developing a strong foundation in computer science and software engineering.
              </p>
              <p>
                My journey in technology began with a curiosity about how things work, which led me to explore programming languages, problem-solving techniques, and the art of building digital solutions.
              </p>
              <p>
                When I'm not coding or studying, you'll find me exploring new technologies, contributing to open-source projects, and constantly learning to stay ahead in this ever-evolving field.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="outline">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
              </Button>
              <Button asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
