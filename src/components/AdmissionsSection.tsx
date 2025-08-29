import { Calendar, FileText, Users, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const AdmissionsSection = () => {
  const admissionSteps = [
    {
      step: "01",
      title: "Application Form",
      description: "Fill out the online application form with accurate information",
      icon: FileText
    },
    {
      step: "02", 
      title: "Document Submission",
      description: "Submit required documents for verification",
      icon: CheckCircle
    },
    {
      step: "03",
      title: "Merit List",
      description: "Check your name in the published merit list",
      icon: Users
    },
    {
      step: "04",
      title: "Final Admission",
      description: "Complete the admission process and fee payment",
      icon: Calendar
    }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "June 1, 2024" },
    { event: "Application End Date", date: "June 30, 2024" },
    { event: "Merit List Declaration", date: "July 5, 2024" },
    { event: "First Round Counseling", date: "July 10-15, 2024" },
    { event: "Second Round Counseling", date: "July 20-25, 2024" },
    { event: "Classes Commence", date: "August 1, 2024" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            Join Our Community
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Admissions 2024-25
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Take the first step towards your bright future. Our admission process is designed to be simple and transparent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Admission Process */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Admission Process</h3>
            <div className="space-y-6">
              {admissionSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <h4 className="text-lg font-semibold text-text-primary">{step.title}</h4>
                      </div>
                      <p className="text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Important Dates</h3>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-text-primary">{date.event}</span>
                    <span className="text-primary font-semibold">{date.date}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-accent text-white rounded-lg text-center">
                <p className="font-semibold mb-2">🚨 Important Notice</p>
                <p className="text-sm">Don't miss the deadline! Apply before June 30, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Admission Helpdesk</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white/20 rounded-full p-4">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Call Us</h4>
                <p className="text-sm">8390292682</p>
                <p className="text-sm">9011223954</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white/20 rounded-full p-4">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-sm">admission@vyws.edu.in</p>
                <p className="text-sm">info@vyws.edu.in</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-white/20 rounded-full p-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Visit Us</h4>
                <p className="text-sm">VYWS Campus</p>
                <p className="text-sm">Amravati, Maharashtra</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;