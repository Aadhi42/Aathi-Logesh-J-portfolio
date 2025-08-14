export default function Footer() {
  return (
    <footer className="border-t py-8 mt-10 bg-background/10 backdrop-blur-md border-white/20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Aathi Logesh J. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
