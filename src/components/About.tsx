import { Code, Award, Briefcase, GraduationCap } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '2+', label: 'Projects' },
  { icon: GraduationCap, value: '4th', label: 'Current Year' },
  { icon: Award, value: '3+', label: 'Certifications' },
  { icon: Code, value: '370+', label: 'DSA Problems' },
];

const coreStrengths = [
  'Problem Solving',
  'Critical Thinking',
  'Adaptability',
  'MERN Stack',
  'Full Stack Development',
  'Database Management',
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
              Currently completing my Node.js certification and continuously improving my skills through 370+ DSA problems on LeetCode. I'm actively seeking internship opportunities to apply my skills in professional environments and contribute to innovative projects.
            </p>

            {/* Core Strengths */}
            <div className="pt-4">
              <h4 className="font-heading text-xl font-semibold text-foreground mb-4">
                Core Strengths
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {coreStrengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Node.js', 'Tailwind CSS', 'MongoDB'].map((tech) => (
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
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-secondary/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:bg-secondary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
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