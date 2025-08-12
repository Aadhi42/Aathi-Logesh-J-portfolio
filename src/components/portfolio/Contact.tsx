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
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 animate-fade-in">
            <p>
              Have a project in mind or just want to say hello? Fill out the form and I'll get back to you soon.
            </p>
            <div className="flex gap-4 pt-2">
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Linkedin />
              </a>
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Github />
              </a>
              <a aria-label="Email" href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground">
                <Mail />
              </a>
            </div>
          </div>
          <form
            className="space-y-4 animate-fade-in"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            {/* Replace the action URL with your Formspree form ID above */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm mb-1 block">Name</label>
                <Input name="name" placeholder="Your name" required />
              </div>
              <div>
                <label className="text-sm mb-1 block">Email</label>
                <Input name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div>
              <label className="text-sm mb-1 block">Message</label>
              <Textarea name="message" placeholder="How can I help?" required rows={6} />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
