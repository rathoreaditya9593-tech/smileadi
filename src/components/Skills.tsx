import { Code2, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Firebase'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Supabase'],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Prototyping', 'Wireframing'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'PWA', 'App Store', 'Play Store', 'Mobile UI'],
  },
  {
    title: 'Other',
    icon: Code2,
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Testing', 'Agile'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I work with a variety of tools and technologies to bring ideas to life. 
            Here's an overview of my technical expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
