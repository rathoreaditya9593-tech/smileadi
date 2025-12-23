import { Code, Award, Briefcase, GraduationCap } from 'lucide-react';

const stats = [
  { icon: Code, value: '50+', label: 'Projects' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Briefcase, value: '30+', label: 'Happy Clients' },
  { icon: GraduationCap, value: 'B.Tech', label: 'CSE Graduate' },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              B.Tech CSE Student & Aspiring Full Stack Developer
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate developer with a keen eye for creating elegant solutions. 
              My journey in web development started during my college years, and since then, 
              I've been on an exciting path of continuous learning and growth.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building responsive web applications using modern technologies 
              like React, TypeScript, and Node.js. I believe in writing clean, maintainable 
              code that makes a real impact.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
