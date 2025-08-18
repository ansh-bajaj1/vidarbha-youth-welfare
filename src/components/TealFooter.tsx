import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const TealFooter = () => {
  const quickLinks = [
    'Institutes', 'Founders', 'Executive Committee', 'Our History', 'Admissions', 'Facilities', 'Research', 'Activities'
  ];

  const studentCorner = [
    'Courses', 'Grievances', 'SC/ST Cell', 'Anti-ragging Help', 'Scholarships', 'Library', 'Committees', 'Student Activities'
  ];

  const importantLinks = [
    'VMeduLife Login', 'IQAC', 'NIRF', 'AISHE', 'Approvals', 'NAAC', 'Research Portal', 'E-Learning'
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
                alt="VYWS Logo"
                className="h-12 w-auto bg-white rounded p-1"
              />
              <div>
                <div className="font-bold text-lg">VYWS</div>
                <div className="text-sm opacity-80">Since 1965</div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold mb-3">Vidarbha Youth Welfare Society, Amravati</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Vidarbha Youth Welfare society, Amravati was established and registered under the Societies Registration Act, 1860, and the Public Trust Acts, 1950 in July 1965, with a dedicated view and motto to impart education to all categories.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">IMPORTANT LINKS</h3>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors flex items-center">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Corner & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">STUDENT CORNER</h3>
            <ul className="space-y-2 mb-6">
              {studentCorner.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mb-4 text-accent">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  Chaitanya Building, Infront of Telephone Office, Camp Road Amravati – 444602
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm opacity-90">+91-721-2662618</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm opacity-90">secretary_vyws@rediffmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <div>© All Rights Reserved | Developed By PrimaThink</div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TealFooter;