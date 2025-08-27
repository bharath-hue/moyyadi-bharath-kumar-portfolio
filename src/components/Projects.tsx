import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Based Handwritten Digit Recognition",
      duration: "Mar 2025 – Jun 2025",
      description:
        "Built a web app using Flask that uses CNN to recognize handwritten digits in real-time. Trained on MNIST dataset, includes image preprocessing, normalization, and data augmentation. Ideal for automation in banking, postal services, and forms.",
      techStack: ["CNN", "TensorFlow", "Keras", "Flask", "HTML/CSS/JS"],
      github: "https://github.com/bharath-hue/handwritten-digit-recognition",
      image: `${import.meta.env.BASE_URL}projects/screenshot-2025-07-02-110436.png`,
    },
    {
      title: "AI-Driven Crop Disease Prediction",
      duration: "Sep 2024 – Jun 2025",
      description:
        "Developed an AI-based system to detect paddy leaf diseases with high accuracy. The system uses CNN and Flask to predict disease from uploaded leaf images, aiding farmers with timely and efficient crop treatment.",
      techStack: ["CNN", "TensorFlow", "Flask", "REST API", "HTML/CSS/JS"],
      github: "https://github.com/bharath-hue/paddy-crop-disease-detection",
      image: `${import.meta.env.BASE_URL}projects/chatgpt-image-aug-1-2025-07-40-27-pm.png`,
    },
  ];

  return (
    <section id="projects" className="py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-secondary animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 whitespace-nowrap">
            Explore my AI/ML projects that showcase practical applications of deep learning and computer vision
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover-lift shadow-card group animate-fade-in px-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex flex-col items-center md:items-start gap-0 md:w-64 lg:w-72">
                    <img src={project.image} alt={project.title + ' image'} className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56 object-cover rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-muted/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2">
                      <Button variant="default" size="sm" className="hover-glow" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
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

export default Projects;
