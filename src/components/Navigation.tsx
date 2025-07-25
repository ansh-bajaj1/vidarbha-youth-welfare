import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

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
    <nav className="bg-vyws-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => {
                    setActiveItem(item.name);
                    if (item.hasDropdown) {
                      setIsAboutDropdownOpen(!isAboutDropdownOpen);
                    }
                  }}
                  onMouseEnter={() => item.hasDropdown && setIsAboutDropdownOpen(true)}
                  className={`relative flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeItem === item.name
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  {activeItem === item.name && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-vyws-teal"></div>
                  )}
                </button>

                {item.hasDropdown && isAboutDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md border z-50"
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <div className="py-2">
                      <a
                        href="#about"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        About Society
                      </a>
                      <a
                        href="#history"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Our History
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;