import { GraduationCap, School, Building, Home } from 'lucide-react';

const InstitutesSection = () => {
  const institutes = [
    {
      number: '11',
      label: 'Colleges',
      icon: GraduationCap,
    },
    {
      number: '19',
      label: 'Schools',
      icon: School,
    },
    {
      number: '2',
      label: 'Hostels',
      icon: Building,
    },
    {
      number: '6',
      label: 'M.C.V.C',
      icon: Home,
    },
  ];

  return (
    <section id="institutes" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Institutes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {institutes.map((institute, index) => (
            <div key={index} className="text-center">
              <div className="flex flex-col items-center space-y-4">
                <institute.icon className="w-16 h-16 text-gray-800" strokeWidth={1} />
                <div className="text-5xl font-bold text-vyws-navy">{institute.number}</div>
                <div className="text-lg text-gray-600">{institute.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutesSection;