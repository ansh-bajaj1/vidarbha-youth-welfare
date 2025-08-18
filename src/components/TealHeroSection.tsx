import { GraduationCap, School, Building, Home } from 'lucide-react';

const TealHeroSection = () => {
  const quickLinks = [
    {
      icon: GraduationCap,
      title: 'e-Grievances',
      description: 'Submit and track your grievances online',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: School,
      title: 'Online Feedback',
      description: 'Share your valuable feedback',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Building,
      title: 'Alumni',
      description: 'Connect with our alumni network',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Home,
      title: 'Online Payment',
      description: 'Pay fees and charges online',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: GraduationCap,
      title: 'vyws.Life',
      description: 'Student portal and resources',
      color: 'from-purple-400 to-purple-600'
    },
  ];

  return (
    <>
      {/* Quick Links Section */}
      <section className="bg-gradient-to-r from-slate-100 to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{link.title}</h3>
                <p className="text-sm text-text-secondary">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Message */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-600 mb-2">
            At VYWS, learners are our 
            <span className="text-primary font-bold"> Key Stakeholders!</span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default TealHeroSection;