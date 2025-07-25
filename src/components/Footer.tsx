const Footer = () => {
  const quickLinks = [
    { name: 'Institutes', href: '#institutes' },
    { name: 'Founders', href: '#founders' },
    { name: 'Executive Committee', href: '#committee' },
    { name: 'Our History', href: '#history' },
  ];

  return (
    <footer className="bg-vyws-footer-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Vidarbha Youth Welfare Society, Amravati</h3>
            <p className="text-gray-300 leading-relaxed">
              Vidarbha Youth Welfare society , Amravati was established and registered under the Societies Registration Act , 1860, and the Public Trust Acts, 1950 in July 1965 , with a dedicated view and motto to impart education to all categories.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <span className="font-semibold">Address:</span> Chaitanya Building, Infront of Telephone Office, Camp Road Amravati – 444602
              </div>
              <div>
                <span className="font-semibold">Email:</span> secretary_vyws@rediffmail.com
              </div>
              <div>
                <span className="font-semibold">Phone:</span> 0721-2662618
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <div>© All Rights Reserved | Developed By PrimaThink</div>
            <div className="mt-2 sm:mt-0">
              <a href="#terms" className="hover:text-white mr-4">Terms of Service</a>
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;