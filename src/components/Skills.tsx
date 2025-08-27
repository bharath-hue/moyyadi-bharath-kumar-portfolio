import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Brain, 
  Wrench,
  FileCode2,
  Palette,
  Cpu,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Python", "Java", "C++", "C"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Development",
      icon: <Palette className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Flask"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "AI/ML Libraries",
      icon: <Brain className="h-6 w-6" />,
      skills: ["TensorFlow", "Keras", "Scikit-learn"],
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["REST API", "GitHub", "Prompt Engineering", "OpenAI APIs"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary animate-fade-in">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications and scalable solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border hover-lift shadow-card group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-smooth`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-secondary">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Machine Learning</h4>
                  <p className="text-muted-foreground">Deep Learning, Computer Vision, Neural Networks, Model Training & Optimization</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Web Development</h4>
                  <p className="text-muted-foreground">Full-Stack Development, RESTful APIs, Real-time Applications, Responsive Design</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;