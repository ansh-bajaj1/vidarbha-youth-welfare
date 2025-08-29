import { Phone, Calendar, Users, Award, BookOpen } from 'lucide-react';

const TealHeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Top News Ticker */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8">
            <span className="font-bold bg-white text-red-600 px-3 py-1 rounded text-sm">NEWS</span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-scroll whitespace-nowrap text-sm">
                🔔 Admission Open for Academic Year 2024-25 | 📅 Last Date for Application: 30th June 2024 | 🎓 Merit List will be declared on 5th July 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Contact Bar */}
      <div className="bg-primary text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">For Admissions: 8390292682 / 9011223954</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Application Deadline: June 30, 2024</span>
            </div>
          </div>
          <button className="bg-accent px-6 py-2 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors">
            Apply Now
          </button>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Welcome Message */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Welcome to VYWS Group of Institutions
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Shaping Future Leaders Since 1965 | Excellence in Education, Innovation in Learning
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* About VYWS */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
                    alt="VYWS Logo"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">About VYWS</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Vidarbha Youth Welfare Society, established in 1965, is a premier educational institution dedicated to providing quality education and creating global citizens who contribute meaningfully to society.
              </p>
              <button className="w-full bg-primary text-white py-2 px-4 rounded font-semibold text-sm hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Online Admission</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Users className="w-5 h-5 text-primary" />  
                  <span className="text-sm font-medium">Student Portal</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Examination Results</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Academic Calendar</span>
                </a>
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">Latest Announcements</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <p className="text-sm font-medium text-text-primary">Admission Open 2024-25</p>
                  <p className="text-xs text-text-secondary">June 15, 2024</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm font-medium text-text-primary">Merit List Declaration</p>
                  <p className="text-xs text-text-secondary">July 5, 2024</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="text-sm font-medium text-text-primary">Scholarship Applications</p>
                  <p className="text-xs text-text-secondary">June 20, 2024</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-accent text-white py-2 px-4 rounded font-semibold text-sm hover:bg-accent/90 transition-colors">
                View All
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-bold text-center text-primary mb-8">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">11</div>
                <div className="text-sm">Colleges</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-primary text-white rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">19</div>
                <div className="text-sm">Schools</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm">Hostels</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-primary text-white rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-sm">M.C.V.C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TealHeroSection;