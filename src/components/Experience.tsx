import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "internship",
      title: "Data Science Intern",
      company: "V Cube Software Solutions Pvt. Ltd.",
      duration: "Feb 2025",
      description: "Learned basics of AI/ML, worked on data preprocessing, model building, and performance evaluation with mentor guidance.",
      skills: ["Machine Learning", "Data Preprocessing", "Model Building", "Performance Evaluation"],
      icon: <Building2 className="h-6 w-6" />
    }
  ];

  return (
    <section id="experience" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-secondary animate-fade-in">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card border-border hover-lift shadow-card animate-fade-in">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="p-4 bg-primary/20 rounded-full w-fit">
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-lg text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-muted/50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;