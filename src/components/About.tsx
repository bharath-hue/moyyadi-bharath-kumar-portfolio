import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm <span className="text-primary font-semibold">Moyyadi Bharath Kumar</span>, a self-driven B.Tech student majoring in 
              <span className="text-accent font-semibold"> Computer Science and Engineering (AI & ML)</span> at CMR Engineering College, Hyderabad.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Graduating in 2026, I'm passionate about using 
              data science and full-stack development to build smart, real-world applications that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology is driven by curiosity and the desire to solve complex problems through innovative AI and ML solutions.
            </p>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <Card className="bg-gradient-card border-border hover-lift shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education Excellence</h3>
                    <p className="text-muted-foreground">Graduating 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover-lift shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Specialization</h3>
                    <p className="text-muted-foreground">AI & ML, Data Science, Full-Stack</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover-lift shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Passion</h3>
                    <p className="text-muted-foreground">Building smart, real-world applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;