import { useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/rathoreaditya9593-tech?tab=repositories', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-rathore-7546472bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/AdityaRath19621', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/smile_adi9617/#', label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [likerEmail, setLikerEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const { toast } = useToast();

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLike = async () => {
    if (hasLiked) {
      toast({
        title: 'Already Liked!',
        description: 'You have already shown your appreciation.',
      });
      return;
    }

    if (!showEmailInput) {
      setShowEmailInput(true);
      return;
    }

    setIsLiking(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-like-email', {
        body: {
          likerEmail: likerEmail || 'Anonymous',
        },
      });

      if (error) throw error;

      setLikes(prev => prev + 1);
      setHasLiked(true);
      setShowEmailInput(false);
      
      toast({
        title: 'Thank you! ❤️',
        description: 'Your appreciation means a lot to me!',
      });
    } catch (error: any) {
      console.error('Error sending like notification:', error);
      // Still count the like even if email fails
      setLikes(prev => prev + 1);
      setHasLiked(true);
      setShowEmailInput(false);
      
      toast({
        title: 'Thank you! ❤️',
        description: 'Your appreciation has been noted!',
      });
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <footer className="py-16 border-t border-border bg-secondary/50 backdrop-blur-sm">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
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
                +91 96170 42206
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

          {/* Resume & Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Resume</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Check out my resume to learn more about my experience and skills.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://www.canva.com/design/DAG8aEY5ycM/oQ0YUu2m-Xyllb69ZrLKnA/view?utm_content=DAG8aEY5ycM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb422fe51ba', '_blank')}
            >
              View Resume
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">
              © {currentYear} <span className="text-primary font-semibold">Smile_adi</span>
            </span>
            <span className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-primary" /> Using React & Tailwind CSS
            </span>
          </div>
          
          {/* Like Button with Email Input */}
          <div className="flex items-center gap-3">
            {showEmailInput && !hasLiked && (
              <input
                type="email"
                placeholder="Your email (optional)"
                value={likerEmail}
                onChange={(e) => setLikerEmail(e.target.value)}
                className="px-3 py-2 rounded-full bg-card/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors w-48"
              />
            )}
            <button
              onClick={handleLike}
              disabled={isLiking}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                hasLiked 
                  ? 'bg-primary/20 border-primary text-primary' 
                  : 'bg-card/50 border-border text-muted-foreground hover:border-primary hover:text-primary'
              } ${isLiking ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Heart 
                size={18} 
                className={hasLiked ? 'fill-primary' : ''} 
              />
              <span className="text-sm font-medium">
                {isLiking ? 'Sending...' : hasLiked ? 'Liked!' : showEmailInput ? 'Submit' : 'Like this portfolio'}
              </span>
              {likes > 0 && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  {likes}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
