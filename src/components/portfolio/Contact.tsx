import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Contact Me</h2>
          <p className="text-muted-foreground mt-2">Let’s work together</p>
        </header>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6 animate-fade-in bg-background/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-semibold">Let's Connect</h3>
              <p className="text-base lg:text-lg leading-relaxed">
                Have a project in mind or just want to say hello? Fill out the form and I'll get back to you soon.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg lg:text-xl font-medium">Connect with me</h4>
              <div className="flex gap-6 pt-2">
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aadhi-logesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-background/20">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a aria-label="GitHub" href="https://github.com/Aadhi42" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-background/20">
                  <Github className="w-7 h-7" />
                </a>
                <a aria-label="Email" href="mailto:aathilogesh@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-background/20">
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          <form
            className="space-y-6 animate-fade-in bg-background/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-semibold">Send Message</h3>
              <p className="text-muted-foreground">I'd love to hear from you!</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input name="name" placeholder="Your name" required className="h-12 text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input name="email" type="email" placeholder="you@example.com" required className="h-12 text-base" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea name="message" placeholder="How can I help?" required rows={6} className="text-base resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto px-8 py-3 text-base">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
