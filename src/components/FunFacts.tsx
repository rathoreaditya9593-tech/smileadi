import { useState } from 'react';
import { GraduationCap, Code2, Award } from 'lucide-react';

const funFacts = [
  { 
    icon: GraduationCap, 
    emoji: '🎓',
    title: 'Studying Computer Science at Technocrats, Bhopal (4th Year)',
  },
  { 
    icon: Code2, 
    emoji: '💻',
    title: 'Solved 370+ DSA problems with 50+ day coding streak',
  },
  { 
    icon: Award, 
    emoji: '🏆',
    title: 'Oracle certified in Cloud Professional',
  },
];

const FunFacts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Fun Facts <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A little glimpse into my life beyond the code editor
          </p>
        </div>

        {/* Fun Facts Grid - 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Emoji Icon */}
              <div className={`text-5xl mb-6 transition-all duration-300 ${hoveredIndex === index ? 'scale-125 animate-bounce' : ''}`}>
                {fact.emoji}
              </div>
              
              {/* Title */}
              <p className="text-foreground font-medium leading-relaxed">
                {fact.title}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Card */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 text-center hover:shadow-xl hover:shadow-primary/10">
            <p className="text-xl md:text-2xl text-foreground italic font-light leading-relaxed">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-primary mt-4 font-medium">— Cory House</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;