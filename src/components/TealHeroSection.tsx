import { Phone } from 'lucide-react';

const TealHeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Admission Banner */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2 rounded">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold">For Admissions:</div>
              <div className="text-sm">8390292682 / 9011223954</div>
            </div>
          </div>
          <div className="bg-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors cursor-pointer">
            Admission Enquiry for All Courses
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Welcome Message */}
          <div className="bg-primary text-white rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
                  alt="Secretary"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Secretary's Message</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Welcome to Vidarbha Youth Welfare Society, Amravati. It gives me immense pleasure to serve the society through our distinctive educational institutions spanning over 58 years of excellence.
            </p>
            <button className="bg-white text-primary px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
              Read More
            </button>
          </div>

          {/* Center Column - Main Banner */}
          <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg p-8 text-center">
            <img
              src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
              alt="VYWS Logo"
              className="h-16 w-auto mx-auto mb-4 bg-white rounded p-2"
            />
            <h1 className="text-2xl font-bold mb-2">VYWS</h1>
            <p className="text-lg mb-4">Excellence in Education Since 1965</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h2 className="font-bold mb-2">Our Achievement</h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-300">11</div>
                  <div className="text-xs">Colleges</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">19</div>
                  <div className="text-xs">Schools</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">2</div>
                  <div className="text-xs">Hostels</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">6</div>
                  <div className="text-xs">M.C.V.C</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Vision & Mission */}
          <div className="space-y-6">
            <div className="bg-yellow-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Motto: Lux Vita Caritas</h3>
              <p className="text-sm text-gray-700 mb-4">
                Meaning - Education Enlightens the Mind, It Nurtures Life and Inculcates Humanity, Love and Respect
              </p>
            </div>
            
            <div className="bg-yellow-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Vision</h3>
              <p className="text-sm text-gray-700">
                VYWS vision is to inspire every child to become worthy Global Citizens, a pride of human race and a potential light of the world.
              </p>
            </div>

            <div className="bg-yellow-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Mission</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <div>T – TEACH</div>
                <div>I – INSPIRE</div>
                <div>T – TRANSFORM</div>
                <div>A – ANALYSE</div>
                <div>N – NURTURE</div>
                <div>S – STRIVE FOR EXCELLENCE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TealHeroSection;