import { GraduationCap, School, Building, Home, ArrowRight } from 'lucide-react';

const ModernInstitutesSection = () => {
  const institutes = [
    {
      number: '11',
      label: 'Colleges',
      icon: GraduationCap,
      description: 'Comprehensive higher education across various disciplines',
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: '19',
      label: 'Schools',
      icon: School,
      description: 'Quality primary and secondary education foundation',
      color: 'from-green-500 to-teal-600'
    },
    {
      number: '2',
      label: 'Hostels',
      icon: Building,
      description: 'Safe and comfortable residential facilities',
      color: 'from-orange-500 to-red-600'
    },
    {
      number: '6',
      label: 'M.C.V.C',
      icon: Home,
      description: 'Specialized vocational and community centers',
      color: 'from-purple-500 to-pink-600'
    },
  ];

  return (
    <section id="institutes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>Our Educational Network</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-modern-primary mb-6">
            Comprehensive Learning
            <span className="block text-primary">Ecosystem</span>
          </h2>
          
          <p className="text-xl text-modern-secondary max-w-3xl mx-auto leading-relaxed">
            From early childhood to professional development, our diverse network of institutions provides world-class education at every stage of learning.
          </p>
        </div>

        {/* Institutes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {institutes.map((institute, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-3 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${institute.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <institute.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl font-heading font-bold text-modern-primary group-hover:text-primary transition-colors duration-300">
                  {institute.number}
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-bold text-modern-primary mb-2">
                    {institute.label}
                  </h3>
                  <p className="text-modern-secondary text-sm leading-relaxed">
                    {institute.description}
                  </p>
                </div>
                
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft text-center">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-modern-primary mb-4">
            Ready to Join Our Educational Family?
          </h3>
          <p className="text-modern-secondary mb-8 max-w-2xl mx-auto">
            Discover opportunities across our network of institutions and begin your journey towards excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              View All Institutes
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200">
              Admission Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernInstitutesSection;