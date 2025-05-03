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
    <div className="w-full py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
        </div>

        {/* Certificate grid */}
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">

  {certificates.map((cert) => (
    <div 
      key={cert.id}
      className="group relative w-[380px] mx-auto"
      onMouseEnter={() => setHoveredCard(cert.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="transform transition-all duration-700 group-hover:translate-y-2 group-hover:scale-102">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-300/10 rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
        
        <div className="relative bg-blue-900/40 backdrop-blur-sm border border-blue-400/20 rounded-xl overflow-hidden shadow-xl">
          <div className="relative h-56">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-[260px] object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mt-12 mb-4">
              <h3 className="text-xl font-bold text-blue-100">
                {cert.title}
              </h3>
              <span className="text-blue-300 text-sm">
                {cert.date}
              </span>
            </div>
            
            <div className="mb-2">
              {cert.skills.map((skill, index) => (
                <div key={index} className="flex items-center mb-1 text-blue-200">
                  <Check className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center transform transition-all duration-500 shadow-lg border-2 border-blue-900 ${hoveredCard === cert.id ? 'scale-110' : 'scale-100'}`}>
        <Award className={`w-7 h-7 text-blue-100 transform transition-all duration-700 ${hoveredCard === cert.id ? 'rotate-12' : 'rotate-0'}`} />
      </div>
    </div>
  ))}
</div>

        
        {/* Bottom connector for your timeline */}
        <div className="mt-16 flex justify-center">
          <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}