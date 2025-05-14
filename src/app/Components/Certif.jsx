import { useState } from 'react';
import { Award, ExternalLink, Check } from 'lucide-react';

export default function CertificatesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const certificates = [
    {
      id: 1,
      title: "OCA, Java SE 8 Programmer",
      issuer: "Oracle University",
      date: "April 2025",
      image: "/oracle.png",
      skills: ["Java Programming", "OOP Concepts"],
      link: "#"
    },
    {
      id: 2,
      title: "Spring Boot & Hibernate",
      issuer: "Udemy",
      date: "Nov 2024",
      image: "/SBC.jpg",
      skills: ["Spring Boot", "Hibernate"],
      link: "#"
    },
    {
      id: 3,
      title: "Master Scrum Basics",
      issuer: "Udemy",
      date: "May 2025",
      image: "/scrum.jpg",
      skills: ["Scrum", "Agile Methodology"],
      link: "#"
    }
  ];
  

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
        </div>

        {/* Certificate grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 justify-items-center">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="group relative w-full max-w-sm"
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="transform transition-all duration-700 group-hover:translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-300/10 rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                <div className="relative bg-blue-900/40 backdrop-blur-sm border border-blue-400/20 rounded-xl overflow-hidden shadow-xl">
                  <div className="relative h-40 sm:h-48 md:h-52 lg:h-56">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-3 sm:p-4">
                    <div className="flex justify-between items-start mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-100">
                        {cert.title}
                      </h3>
                      <span className="text-blue-300 text-xs sm:text-sm">
                        {cert.date}
                      </span>
                    </div>
                    
                    <div className="mb-2">
                      {cert.skills.map((skill, index) => (
                        <div key={index} className="flex items-center mb-1 text-blue-200">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-400" />
                          <span className="text-xs sm:text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center transform transition-all duration-500 shadow-lg border-2 border-blue-900 ${hoveredCard === cert.id ? 'scale-110' : 'scale-100'}`}>
                <Award className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-100 transform transition-all duration-700 ${hoveredCard === cert.id ? 'rotate-12' : 'rotate-0'}`} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom connector for your timeline */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center">
          <div className="w-1 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}