import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio Contact: ${name || "No name"}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name || "Anonymous"} <${email || "no-email"}>`);
    const mailto = `mailto:mrmoyyadi2003@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    form.reset();
  };

  return (
    <section id="contact" className="py-16 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-secondary animate-fade-in">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6">
            Have a question, a project idea, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>Reach me directly via email or connect on social platforms.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a
                  href="mailto:mrmoyyadi2003@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth hover-lift"
                >
                  <Mail className="h-5 w-5" />
                  mrmoyyadi2003@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/moyyadi-bharath-kumar-885275272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth hover-lift"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bharath-hue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth hover-lift"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your name" required />
                  <Input type="email" name="email" placeholder="Your email" required />
                </div>
                <Textarea name="message" placeholder="Your message" rows={6} required />
                <Button type="submit" className="hover-glow">Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
