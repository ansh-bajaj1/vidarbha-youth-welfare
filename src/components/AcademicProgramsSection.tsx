import { GraduationCap, BookOpen, Users, Award, ArrowRight } from 'lucide-react';

const AcademicProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Undergraduate Programs",
      description: "Comprehensive bachelor's degree programs across multiple disciplines",
      courses: ["B.Tech", "B.Com", "B.Sc", "BBA", "B.Ed"],
      color: "from-primary to-accent"
    },
    {
      icon: BookOpen,
      title: "Postgraduate Programs", 
      description: "Advanced master's degree programs for specialized knowledge",
      courses: ["M.Tech", "M.Com", "M.Sc", "MBA", "M.Ed"],
      color: "from-accent to-primary"
    },
    {
      icon: Users,
      title: "Diploma Courses",
      description: "Professional diploma programs for skill development",
      courses: ["Engineering", "Management", "Education", "Computer Science"],
      color: "from-primary to-accent"
    },
    {
      icon: Award,
      title: "Certificate Programs",
      description: "Short-term certificate courses for professional enhancement",
      courses: ["Digital Marketing", "Data Science", "Soft Skills", "Language"],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Academic Programs
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover our comprehensive range of academic programs designed to prepare students for successful careers and lifelong learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{program.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-2">Available Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.courses.map((course, courseIndex) => (
                      <span key={courseIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-card p-8 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to Start Your Academic Journey?</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Join thousands of successful alumni who have built their careers with our quality education and comprehensive support system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;