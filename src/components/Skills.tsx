import { useEffect, useState, useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️', percentage: 95 },
      { name: 'JavaScript', icon: '𝗃𝘀', percentage: 90 },
      { name: 'HTML5', icon: '🌐', percentage: 95 },
      { name: 'CSS3', icon: '🎨', percentage: 90 },
      { name: 'Tailwind', icon: '💨', percentage: 88 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢', percentage: 88 },
      { name: 'Express', icon: '⚡', percentage: 85 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃', percentage: 85 },
      { name: 'PostgreSQL', icon: '🐘', percentage: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: '📦', percentage: 90 },
      { name: 'Microsoft Azure', icon: '☁️', percentage: 75 },
    ],
  },
];

const currentlyLearning = ['GSAP', 'SpringBoot', 'SpringAI', 'Docker'];

const SkillBar = ({ skill, delay }: { skill: { name: string; icon: string; percentage: number }; delay: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setWidth(skill.percentage), delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [skill.percentage, delay]);

  return (
    <div ref={barRef} className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-foreground font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-muted-foreground text-sm">{skill.percentage}%</span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

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
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={(catIndex * 100) + (skillIndex * 100)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyLearning.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;