import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech - CSE (AI & ML)",
      institution: "CMR Engineering College, Hyderabad",
      duration: "2022–2026",
      score: "CGPA: 8.75",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Intermediate",
      institution: "TS Residential Jr. College, Sarvail",
      duration: "2020–2022",
      score: "GPA: 9.08",
      icon: <Award className="h-6 w-6" />
    },
    {
      degree: "10th Standard",
      institution: "Sai Mohit Memorial High School",
      duration: "2019–2020",
      score: "CGPA: 10.0",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="education" className="py-12 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary animate-fade-in">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-gradient-card border-border hover-lift shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-accent/20 rounded-full">
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-accent">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <span className="text-sm text-muted-foreground">{edu.duration}</span>
                        <span className="text-primary font-semibold">{edu.score}</span>
                      </div>
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

export default Education;