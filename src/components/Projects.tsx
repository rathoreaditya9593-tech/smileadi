import { useState } from 'react';
import { ExternalLink, Github, Lock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'SigmaGPT Chatbot',
    description: 'An intelligent AI-powered chatbot built with modern web technologies for seamless conversation experiences.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    category: 'Full Stack',
  },
  {
    title: 'Dynamic Portfolio',
    description: 'A modern, responsive portfolio website showcasing projects and skills with beautiful animations.',
    tags: ['Tailwind CSS', 'React.js'],
    liveUrl: '#',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    category: 'Frontend',
  },
];

const Projects = () => {
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Full Stack', 'Frontend', 'Backend'].map((filter) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'Full Stack'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid - 2 cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-secondary/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/80 text-primary-foreground backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-card transition-all duration-300"
                    aria-label="View GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-card transition-all duration-300"
                    aria-label="View Live"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-card/80 text-xs text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowSecretMessage(!showSecretMessage)}
            className="group"
          >
            <Lock size={18} className="mr-2 group-hover:hidden" />
            <Sparkles size={18} className="mr-2 hidden group-hover:block" />
            View All Projects
          </Button>
          
          {/* Secret Project Message */}
          {showSecretMessage && (
            <div className="mt-8 p-6 rounded-2xl bg-secondary/80 border border-primary/30 max-w-2xl mx-auto animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="text-primary" size={24} />
                <h4 className="font-heading text-xl font-semibold text-gradient">Secret Projects</h4>
                <Sparkles className="text-primary" size={24} />
              </div>
              <p className="text-muted-foreground text-center">
                Working on <span className="text-primary font-semibold">Industry Level Secret Projects</span> that showcase advanced skills and innovative solutions. Stay tuned for updates!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;