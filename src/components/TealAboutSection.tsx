const TealAboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Achievement */}
          <div className="relative">
            <div className="bg-white rounded-lg p-8 shadow-card">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
                    alt="VYWS Achievement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-primary text-white rounded-full px-4 py-2 inline-block mb-4">
                  <span className="text-sm font-bold">58 Years Celebration</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg p-4">
                  <div className="text-2xl font-bold">11</div>
                  <div className="text-sm">Colleges</div>
                </div>
                <div className="bg-gradient-to-br from-accent to-primary text-white rounded-lg p-4">
                  <div className="text-2xl font-bold">19</div>
                  <div className="text-sm">Schools</div>
                </div>
                <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg p-4">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm">Hostels</div>
                </div>
                <div className="bg-gradient-to-br from-accent to-primary text-white rounded-lg p-4">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm">M.C.V.C</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-6">About Us</h2>
            <div className="prose prose-lg text-text-secondary">
              <p className="mb-6 leading-relaxed">
                Vidarbha Youth Welfare Society was founded by the great visionaries of this region Late. Prof Ram K. Meghe, Late. Surendra B. Deshmukh, Late. Prof. Baburao D. Hiwase, Late. Prof. Dinkarrao K. Deshmukh, Late. Pundlikrao B. Gohad, Late. Vasantrao N. Chaudhary, Late. Dr. Murlidhar R. Deshmukh, Shri. Shashikumar R. Deshmukh, Shri. Ramdas Alias Nanasaheb P. Dhande & Shri. Shankarrao D. Kale in the year 1965, with a clear vision of making it a world class premier organization for primary, secondary, higher, technical, and professional education.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Vidarbha Youth Welfare society, Amravati was established and registered under the Societies Registration Act, 1860, and the Public Trust Acts, 1950 in July 1965, with a dedicated view and motto to impart education to all categories.
              </p>

              <div className="bg-primary text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-white/90">
                  To provide quality education and create global citizens who contribute meaningfully to society through excellence in academics, character building, and holistic development.
                </p>
              </div>

              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200">
                Learn More About Our History
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TealAboutSection;