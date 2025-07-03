import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowUp } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Plant Disease Prediction",
      description: "Chatbot-enabled app to diagnose 40+ plant diseases using AlexNet deep learning model with high accuracy prediction capabilities.",
      technologies: ["ReactJS", "FastAPI", "PyTorch", "Qwen LLM", "AlexNet"],
      category: "AI/ML",
      link: "#",
      githubLink: "#"
    },
    {
      title: "Energy Management System",
      description: "Predicts and monitors electricity/solar usage at Kongu Engineering College with real-time analytics and optimization.",
      technologies: ["MERN Stack", "Tailwind CSS", "Sarima", "Flask API", "Chart.js"],
      category: "Full Stack",
      link: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS featuring smooth animations.",
      technologies: ["React.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "Frontend",
      link: "#",
      githubLink: "#"
    },
    {
      title: "AI Chatbot Interface",
      description: "Intelligent chatbot interface with natural language processing capabilities for enhanced user interaction.",
      technologies: ["Python", "Flask", "NLP", "React.js", "WebSocket"],
      category: "AI/ML",
      link: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my most impactful projects in AI, web development, and data science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:rotate-45" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="default" className="flex-1">
                    View Project
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;