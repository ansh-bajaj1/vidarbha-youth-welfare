import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const TealNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { 
      name: 'ABOUT', 
      href: '#about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Society', href: '#about' },
        { name: 'Our History', href: '#history' },
        { name: 'Vision & Mission', href: '#vision' }
      ]
    },
    { name: 'APPROVALS', href: '#approvals' },
    { name: 'ADMISSIONS', href: '#admissions' },
    { name: 'ACADEMICS', href: '#academics' },
    { name: 'STUDENTS', href: '#students' },
    { name: 'R&D', href: '#research' },
    { name: 'T&P', href: '#placement' },
    { name: 'FEEDBACK', href: '#feedback' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'EVENTS', href: '#events' },
    { name: 'NAAC', href: '#naac' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span>AICTE EOA | NIRF | NAAC | IQAC | E-Bulletin | Contact | Email Login</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>0721-2662618</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>secretary_vyws@rediffmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
                alt="VYWS Logo"
                className="h-16 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">
                  Vidarbha Youth Welfare Society, Amravati
                </h1>
                <p className="text-text-secondary">
                  At & Post – Amravati, 444602, M.S., India
                </p>
                <p className="text-sm text-text-secondary">
                  Since 1965 | Estd. in 1965
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="text-right">
                <div className="text-lg font-semibold text-primary">+91-721-2662618</div>
                <div className="text-lg font-semibold text-primary">+91-721-2662619</div>
                <div className="text-sm text-text-secondary">info@vyws.org.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 px-4 py-4 text-sm font-medium hover:bg-accent transition-colors duration-200">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg border border-border-light overflow-hidden z-50">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-text-primary hover:bg-card-bg transition-colors"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-accent/30">
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-accent rounded transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && item.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-8 py-2 text-sm text-white/80 hover:bg-accent rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default TealNavigation;