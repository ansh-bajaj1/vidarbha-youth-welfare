import { GraduationCap, School, Building, Home } from 'lucide-react';

const TealInstitutesSection = () => {
  const institutes = [
    {
      number: '11',
      label: 'Colleges',
      icon: GraduationCap,
      description: 'Comprehensive higher education across various disciplines'
    },
    {
      number: '19',
      label: 'Schools',
      icon: School,
      description: 'Quality primary and secondary education foundation'
    },
    {
      number: '2',
      label: 'Hostels',
      icon: Building,
      description: 'Safe and comfortable residential facilities'
    },
    {
      number: '6',
      label: 'M.C.V.C',
      icon: Home,
      description: 'Specialized vocational and community centers'
    },
  ];

  return (
    <section id="institutes" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Our Institutes</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive network of educational institutions serving students across all levels of learning.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {institutes.map((institute, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                <institute.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              
              <div className="text-4xl font-bold text-primary mb-2">
                {institute.number}
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {institute.label}
              </h3>
              
              <p className="text-text-secondary text-sm leading-relaxed">
                {institute.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200">
            View All Institutes
          </button>
        </div>
      </div>
    </section>
  );
};

export default TealInstitutesSection;