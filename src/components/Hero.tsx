import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import TypeWriter from './TypeWriter';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 md:pt-0">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-primary p-1 animate-float">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Aditya Rathore - Professional Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-pulse-slow" />
              
              {/* Floating particles around profile */}
              <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-primary/50 animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute top-4 -right-4 w-2 h-2 rounded-full bg-accent/50 animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-2 left-8 w-2 h-2 rounded-full bg-primary/40 animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-8 -right-2 w-2.5 h-2.5 rounded-full bg-accent/40 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>

          {/* Greeting */}
          <p className="text-muted-foreground text-lg md:text-xl mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-gradient">Aditya</span>
            <br />
            <span className="text-gradient">Rathore</span>
          </h1>

          {/* Dynamic Role TypeWriter */}
          <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <TypeWriter />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.5s' }}>
            I create exceptional digital experiences that combine beautiful design with powerful functionality. Let's build something amazing together.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Instagram, href: '#', label: 'Instagram' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
