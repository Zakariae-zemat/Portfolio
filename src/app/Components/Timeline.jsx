"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, University, Wrench, Rocket } from 'lucide-react';
import { FaBriefcase, FaUserTie } from 'react-icons/fa';

const educationData = [
    { date: "2021 - 2023", title: "University Diploma in Science and Technology", institution: "Faculty of Sciences and Techniques of Errachidia", description: "Obtained a diploma in science and technology", icon: <GraduationCap /> },
    { date: "2023 - Present", title: "Engineering Degree in Computer Science", institution: "Faculty of Sciences and Techniques of Settat", description: "Currently pursuing an engineering degree in computer science", icon: <University /> }
];

const experiencesData = [
    { date: "August 2025 - October 2025", title: "Cloud & DevOps Engineering Intern", institution: "XAI (in progress)", description: "Worked remotely on the Sovereign AI Gateway, a Moroccan LLM platform. Designed and deployed scalable cloud infrastructure on Azure, implemented CI/CD pipelines, and contributed to API gateway and containerization for robust service delivery.", icon: <FaBriefcase /> },
    { date: "July 2025 - August 2025", title: "Software Engineering Intern", institution: "Business IT Solutions", description: "Built a secure insurance management system (Spring Boot/Angular) with OCR, 2FA, and analytics. Automated deployment using Docker and CI/CD, and set up monitoring with Prometheus, Grafana, and Loki on AWS.", icon: <FaBriefcase /> },
    { date: "June 2024 - August 2024", title: "PFA Internship", institution: "YHS Consulting (French Startup)", description: "Developed a real-time job offers platform: integrated external APIs, processed data with Kafka and Talend ETL, and built a responsive web interface with MySQL backend.", icon: <FaBriefcase /> },
    { date: "2025 - Present", title: "Co-founder and Content Creator", institution: "Khaliha 3ala Lah community", description: "Launched and grew a tech community, producing educational content and organizing collaborative events for aspiring developers.", icon: <FaUserTie /> }
];

const parascolaireData = [
    { date: "October 2025", title: "MCPC: Moroccan Collegiate Programming Contest", institution: "UM6P - University Mohammed VI Polytechnic Rabat", description: "Completed an intensive competitive programming contest at UM6P, tackling complex algorithmic challenges and collaborating with talented peers from across Morocco.", icon: <Code /> },
    { date: "September 2025", title: "ENSET Challenge Hackathon 2025", institution: "ENSET Mohammedia", description: "Participated in a national AI-focused hackathon with Team Khaliha 3ala Lah, developing innovative solutions for economic and social development during the intensive 48-hour finals.", icon: <Rocket /> },
    { date: "April 26th - April 27th, 2025", title: "Code IT v8 Hackathon", institution: "EHTP", description: "Built an AI-driven solution in 2 days during a hackathon focused on societal challenges.", icon: <Rocket /> },
    { date: "April 6th - April 26th, 2025", title: "OpportunAI Hackathon", institution: "EMSI Casablanca", description: "Participated in OpportunAI hackathon and won 4th place with LifeLinkAI project.", icon: <Rocket /> },
    { date: "April 12th, 2025", title: "CodEMI 2025 CP Competition", institution: "ESI", description: "Participated in the CodEMI 2025 competitive programming contest.", icon: <Code /> },
    { date: "2025 - Present", title: "Vice President of IMPACT Club", institution: "IMPACT Club", description: "Serving as Vice President of the club IMPACT, contributing to leadership and project coordination.", icon: <FaUserTie /> },
    { date: "March 2nd, 2024 / March 16th, 2025 ", title: "Itholic CP v3 & v4", institution: "ENSIAS IT Club", description: "Participated in both version 3 & 4 of the Itholic Programming Competition organized by ENSIAS IT Club.", icon: <Code /> },
    { date: "November 26th, 2024", title: "MLOps Hackathon", institution: "Dataverse Club", description: "Participated in the MLOps Hackathon organized by ENSA Khouribga.", icon: <Rocket /> },
    { date: "March 9th, 2024", title: "AMPC3 Competition", institution: "Gadz'IT-Club Informatique", description: "Participated in the AMPC3 CP Competition organized by ENSAM Meknes.", icon: <Code /> }
];


const Timeline = () => {
    const [activeTab, setActiveTab] = useState('education');
    
    const getActiveData = () => {
        switch (activeTab) {
            case 'education': return educationData;
            case 'experiences': return experiencesData;
            case 'parascolaire': return parascolaireData;
            default: return educationData;
        }
    };

    return (
        <div className="text-white px-4 sm:px-10 py-20 sm:py-48 overflow-hidden md:px-32 flex flex-col items-center text-center">
            <motion.div
                className="space-y-10 max-w-7xl w-full"
            >
                <div className="flex flex-col items-center mb-10 sm:mb-16">
                  <h2 className="text-3xl sm:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
                  Education & Experiences
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
                </div>
                
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center mb-8 bg-blue-900/40 backdrop-blur-sm border border-blue-400/20 rounded-xl p-1 max-w-lg mx-auto">
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                            activeTab === 'education'
                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                                : 'text-blue-300 hover:text-white'
                        }`}
                    >
                        Education
                    </button>
                    <button
                        onClick={() => setActiveTab('experiences')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                            activeTab === 'experiences'
                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                                : 'text-blue-300 hover:text-white'
                        }`}
                    >
                        Experiences
                    </button>
                    <button
                        onClick={() => setActiveTab('parascolaire')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                            activeTab === 'parascolaire'
                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                                : 'text-blue-300 hover:text-white'
                        }`}
                    >
                        Parascolaire
                    </button>
                </div>
            
            {/* Desktop Timeline (hidden on mobile) */}
            <div className="hidden md:block relative before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:border-l-2 before:border-dashed before:border-blue-500">
                {getActiveData().map((item, index) => (
                    <motion.div
                        key={`desktop-${index}`}
                        className={`relative mb-10 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="flex flex-col w-[40%] mx-16 p-4">
                            <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center mb-2`}>
                                {item.icon}
                            </div>
                            <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                <div className="text-blue-400 font-medium mr-4 whitespace-nowrap">{item.date}</div>
                                <div className="text-white font-bold text-xl mr-2 whitespace-nowrap">{item.title}</div>
                            </div>
                            <div className={`text-gray-400 ${index % 2 === 0 ? 'text-right' : 'text-left'} mb-4`}>
                                {item.description}
                            </div>
                            <div className={`text-gray-300 font-medium ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                {item.institution}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Mobile Timeline (shown only on mobile) */}
            <div className="md:hidden relative before:absolute before:inset-x-0 before:left-6 before:w-1 before:border-l-2 before:border-dashed before:border-blue-500">
                {getActiveData().map((item, index) => (
                    <motion.div
                        key={`mobile-${index}`}
                        className="relative mb-8 flex flex-row pl-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="absolute top-0 left-6 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="flex flex-col w-full text-left p-2">
                            <div className="flex items-center mb-2">
                                <span className="mr-2 text-blue-400">
                                    {item.icon}
                                </span>
                                <div className="text-blue-400 font-medium text-sm whitespace-nowrap">{item.date}</div>
                            </div>
                            <div className="text-white font-bold text-lg mb-1">{item.title}</div>
                            <div className="text-gray-400 text-sm mb-2">
                                {item.description}
                            </div>
                            <div className="text-gray-300 text-sm font-medium">
                                {item.institution}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            </motion.div>
            <div className="mt-24 flex justify-center">
              <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
            </div>
        </div>
    );
};

export default Timeline;