import { Target, BookOpen, Users, Award } from 'lucide-react';

const TealAboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'ACADEMICS',
      description: 'We provide excellent quality of education to our learners. Our aim is to bring all round development in our students.',
      action: 'VIEW MORE'
    },
    {
      icon: BookOpen,
      title: 'RESEARCH',
      description: 'Come, satisfy your greed for research. We have M.Pharm and Ph.D. programs with excellent lab facilities.',
      action: 'VIEW MORE'
    },
    {
      icon: Users,
      title: 'SPORTS & CULTURE',
      description: 'Humongous playground with variety of sports facilities is available at VYWS. It\'s your play time!',
      action: 'VIEW MORE'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-secondary mb-3 leading-relaxed">{feature.description}</p>
                  <button className="text-primary font-semibold text-sm hover:text-accent transition-colors">
                    {feature.action} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - About Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">About VYWS</h2>
              <div className="prose prose-lg text-text-secondary space-y-4">
                <p>
                  Vidarbha Youth Welfare Society was founded by the great visionaries of this region Late. Prof Ram K. Meghe, Late. Surendra B. Deshmukh, Late. Prof. Baburao D. Hiwase, Late. Prof. Dinkarrao K. Deshmukh, Late. Pundlikrao B. Gohad, Late. Vasantrao N. Chaudhary, Late. Dr. Murlidhar R. Deshmukh, Shri. Shashikumar R. Deshmukh, Shri. Ramdas Alias Nanasaheb P. Dhande & Shri. Shankarrao D. Kale in the year 1965, with a clear vision of making it a world class premier organization for primary, secondary, higher, technical, and professional education.
                </p>
                <p>
                  With over six decades of educational excellence, we continue to serve the Vidarbha region by nurturing young minds and providing quality education across all levels.
                </p>
              </div>
            </div>

            <div className="bg-card-bg p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-text-secondary">
                To be a world-class premier organization providing comprehensive education from primary to professional levels, fostering innovation, research, and holistic development of students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TealAboutSection;