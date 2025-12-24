import { useState } from 'react';
import { 
  Home, 
  User, 
  Code2, 
  FolderOpen, 
  Mail, 
  Download,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  const handleDownloadResume = () => {
    window.open('https://www.canva.com/design/DAG8aEY5ycM/oQ0YUu2m-Xyllb69ZrLKnA/view?utm_content=DAG8aEY5ycM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb422fe51ba', '_blank');
  };

  return (
    <>
      {/* Mobile Menu Button - Right side */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 right-4 z-[60] md:hidden w-12 h-12 rounded-xl bg-card/90 backdrop-blur-lg border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar - Now on RIGHT side */}
      <aside
        className={cn(
          "fixed right-0 top-0 h-full z-50 flex flex-col transition-all duration-500 ease-out",
          // Desktop styles
          "md:translate-x-0",
          isExpanded ? "md:w-64" : "md:w-20",
          // Mobile styles
          isMobileOpen ? "translate-x-0 w-72" : "translate-x-full md:translate-x-0"
        )}
      >
        {/* Sidebar Background */}
        <div className="absolute inset-0 bg-card/95 backdrop-blur-xl border-l border-border" />
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 right-0 w-32 h-64 bg-primary/10 blur-[80px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full py-6 px-3">
          {/* Logo */}
          <div className={cn(
            "flex items-center mb-8 px-2 transition-all duration-300",
            isExpanded || isMobileOpen ? "justify-start" : "justify-center"
          )}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-lg">A</span>
            </div>
            <span className={cn(
              "font-heading font-bold text-xl text-gradient ml-3 transition-all duration-300",
              isExpanded || isMobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 hidden md:block md:invisible"
            )}>
              Aditya.
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={cn(
                    "w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Active Indicator - Right side now */}
                  <div className={cn(
                    "absolute right-0 top-1/2 -translate-y-1/2 w-1 rounded-full bg-primary transition-all duration-300",
                    isActive ? "h-8 opacity-100" : "h-0 opacity-0"
                  )} />

                  {/* Hover Glow */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent transition-opacity duration-300",
                    isHovered || isActive ? "opacity-100" : "opacity-0"
                  )} />

                  {/* Icon with enhanced hover effect */}
                  <div className={cn(
                    "relative z-10 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                    isActive ? "bg-primary/20" : "bg-secondary/50 group-hover:bg-primary/10",
                    isHovered && "scale-110 rotate-6"
                  )}>
                    <item.icon size={20} className={cn(
                      "transition-all duration-300",
                      isActive && "scale-110",
                      isHovered && "text-primary"
                    )} />
                  </div>

                  {/* Label */}
                  <span className={cn(
                    "relative z-10 font-medium text-sm transition-all duration-300 whitespace-nowrap",
                    isExpanded || isMobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 md:hidden"
                  )}>
                    {item.label}
                  </span>

                  {/* Tooltip for collapsed state - Left side now */}
                  {!isExpanded && !isMobileOpen && (
                    <div className={cn(
                      "absolute right-full mr-3 px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium whitespace-nowrap transition-all duration-200 hidden md:block",
                      isHovered ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-2 pointer-events-none"
                    )}>
                      {item.label}
                    </div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Resume Download Button */}
          <div className="mt-4 px-1">
            <Button
              variant="glow"
              size={isExpanded || isMobileOpen ? "default" : "icon"}
              onClick={handleDownloadResume}
              className={cn(
                "w-full transition-all duration-300 group",
                !isExpanded && !isMobileOpen && "!w-14 !h-14"
              )}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span className={cn(
                "transition-all duration-300",
                isExpanded || isMobileOpen ? "opacity-100 ml-2" : "opacity-0 hidden"
              )}>
                Resume
              </span>
            </Button>
          </div>

          {/* Expand/Collapse Toggle (Desktop only) - Left side now */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-card border border-border rounded-l-lg items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isExpanded ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;