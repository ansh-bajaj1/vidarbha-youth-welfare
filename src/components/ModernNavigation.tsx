import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const ModernNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about', hasDropdown: true },
    { name: 'Founders', href: '#founders' },
    { name: 'E-Learning Portal', href: '#elearning' },
    { name: 'Executive Committee', href: '#committee' },
    { name: 'Institutes', href: '#institutes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-modern-border-light z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
              alt="VYWS Logo"
              className="h-10 w-auto"
            />
            <div className="hidden md:block">
              <div className="font-heading font-bold text-modern-primary">VYWS</div>
              <div className="text-xs text-modern-secondary">Since 1965</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onMouseEnter={() => item.hasDropdown && setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsAboutDropdownOpen(false)}
                  className="flex items-center space-x-1 text-modern-secondary hover:text-primary font-medium transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.hasDropdown && isAboutDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-card rounded-lg border border-modern-border-light overflow-hidden"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <a href="#about" className="block px-4 py-3 text-sm text-modern-secondary hover:bg-modern-card-bg transition-colors">
                      About Society
                    </a>
                    <a href="#history" className="block px-4 py-3 text-sm text-modern-secondary hover:bg-modern-card-bg transition-colors">
                      Our History
                    </a>
                  </div>
                )}
              </div>
            ))}
            
            <button className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-modern-secondary hover:bg-modern-card-bg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-modern-border-light">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-modern-secondary hover:text-primary hover:bg-modern-card-bg rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-primary text-white px-4 py-2 rounded-lg font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavigation;