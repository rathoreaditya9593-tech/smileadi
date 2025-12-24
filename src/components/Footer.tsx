import { Github, Linkedin, Twitter, Instagram, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-heading text-2xl font-bold text-gradient mb-4 block">
              Aditya Rathore.
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Full Stack Developer passionate about creating exceptional digital experiences. Always learning, always coding, always improving.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                rathoreaditya9617@gmail.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                Bhopal, India
              </li>
            </ul>
            <Button
              variant="glow"
              size="sm"
              className="mt-4"
              onClick={() => handleLinkClick('#contact')}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
              </span>
              Available for work
            </Button>
          </div>

          {/* Another Get in Touch */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Get In Touch</h4>
            <p className="text-muted-foreground text-sm mb-4">
              rathoreaditya9617@gmail.com
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Bhopal, India
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleLinkClick('#contact')}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Aditya. Made with <Heart size={14} className="text-primary" /> Using React & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
