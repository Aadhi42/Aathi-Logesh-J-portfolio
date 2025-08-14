import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

interface NavbarProps {
  active?: string;
  name?: string;
}

export default function Navbar({ active = "home", name = "Aathi Logesh J" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all",
      scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b" : "bg-transparent"
    )}>
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-semibold tracking-tight text-lg hover-scale" aria-label="Go to home">
          {name}
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "transition-colors story-link",
                  active === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
