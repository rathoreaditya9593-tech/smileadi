import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, checkout, and payment integration. Built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'AI Chat Application',
    description: 'An intelligent chatbot application powered by OpenAI, featuring conversation history and custom prompts.',
    tags: ['React', 'OpenAI', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with dark theme and smooth animations.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts and interactive maps.',
    tags: ['React', 'API', 'Charts.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description: 'A content management system for bloggers with markdown support and SEO optimization.',
    tags: ['Next.js', 'MDX', 'Prisma'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const Projects = () => {
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
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="text-primary" size={24} />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View Live"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-primary/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
