import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative inline-block">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-primary p-1 animate-float">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-gradient">AS</span>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-pulse-slow" />
            </div>
          </div>

          {/* Greeting */}
          <p className="text-muted-foreground text-lg md:text-xl mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-gradient">Ashish</span>
            <br />
            <span className="text-gradient">Sharma</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Problem Solver
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.5s' }}>
            I create exceptional digital experiences that combine beautiful design with powerful functionality. Let's build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="glow" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
