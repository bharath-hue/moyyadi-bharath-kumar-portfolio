import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-primary">Moyyadi Bharath Kumar</span>
          </h1>
          
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about building smart, real-world applications using data science and full-stack development
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={`${import.meta.env.BASE_URL}RESUME.pdf`} download>
              <Button variant="default" size="lg" className="hover-glow animate-bounce-in">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center gap-6 animate-slide-in-right">
            <a href="https://linkedin.com/in/moyyadi-bharath-kumar-885275272" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-smooth hover-lift">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/bharath-hue" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-smooth hover-lift">
              <Github className="h-8 w-8" />
            </a>
            <a href="mailto:mrmoyyadi2003@gmail.com"
               className="text-muted-foreground hover:text-primary transition-smooth hover-lift">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;