const ManagementSection = () => {
  const managementTeam = [
    {
      name: "Dr. Nitin R. Dhande",
      position: "Chairman",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    },
    {
      name: "Adv. U.S. Deshmukh",
      position: "Vice-President",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    },
    {
      name: "Dr. H.M. Deshmukh",
      position: "Treasurer",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    },
    {
      name: "Shri Y.V. Chaudhary",
      position: "Secretary",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    }
  ];

  const executiveMembers = [
    {
      name: "Shri. S. D. Kale",
      position: "Executive Member",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    },
    {
      name: "Shri. N. B. Hiwase",
      position: "Executive Member",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    },
    {
      name: "Sau. R. H. Deshmukh",
      position: "Executive Member",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    },
    {
      name: "Dr. Mrs. V.N. Dhande",
      position: "Executive Member",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    },
    {
      name: "Dr. Mrs P.V. Chaudhary",
      position: "Executive Member",
      image: "/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Management</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Main Management Team */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {managementTeam.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-text-primary mb-1">{member.name}</h3>
              <p className="text-sm text-text-secondary">({member.position})</p>
            </div>
          ))}
        </div>

        {/* Executive Members */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {executiveMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden shadow-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-sm text-text-primary mb-1">{member.name}</h4>
              <p className="text-xs text-text-secondary">({member.position})</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;