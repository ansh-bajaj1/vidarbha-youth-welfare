import { MapPin, Mail, Phone, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ModernFooter = () => {
  const quickLinks = [
    { name: 'Institutes', href: '#institutes' },
    { name: 'Founders', href: '#founders' },
    { name: 'Executive Committee', href: '#committee' },
    { name: 'Our History', href: '#history' },
    { name: 'E-Learning Portal', href: '#elearning' },
    { name: 'Admissions', href: '#admissions' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
                alt="VYWS Logo"
                className="h-12 w-auto"
              />
              <div>
                <div className="font-heading font-bold text-lg">VYWS</div>
                <div className="text-sm text-gray-400">Since 1965</div>
              </div>
            </div>
            
            <h3 className="text-xl font-heading font-bold">
              Vidarbha Youth Welfare Society
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              Established in 1965 with a dedicated vision to impart quality education across all categories and levels.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 bg-gray-800 rounded-lg ${social.color} transition-all duration-200 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-heading font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-heading font-bold">Get in Touch</h3>
            
            <div className="grid md:grid-cols-1 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Address</div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      Chaitanya Building, Infront of Telephone Office,<br />
                      Camp Road Amravati – 444602
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a 
                      href="mailto:secretary_vyws@rediffmail.com"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      secretary_vyws@rediffmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <a 
                      href="tel:0721-2662618"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      0721-2662618
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="font-heading font-bold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to receive updates about admissions, events, and educational opportunities.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-gradient-primary px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2024 Vidarbha Youth Welfare Society. All Rights Reserved | Developed By PrimaThink
            </div>
            <div className="flex space-x-6">
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;