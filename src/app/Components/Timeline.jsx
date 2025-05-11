"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, University, Wrench, Rocket } from 'lucide-react';
import { FaBriefcase, FaUserTie } from 'react-icons/fa';

const timelineData = [
    { date: "2021 - 2023", title: "University Diploma in Science and Technology", institution: "Faculty of Sciences and Techniques of Errachidia", description: "Obtained a diploma in science and technology", icon: <GraduationCap /> },
    { date: "2023 - Present", title: "Engineering Degree in Computer Science", institution: "Faculty of Sciences and Techniques of Settat", description: "Currently pursuing an engineering degree in computer science", icon: <University /> },
    { date: "March 2nd, 2024 / March 16th, 2025 ", title: "Itholic CP v3 & v4", institution: "ENSIAS IT Club", description: "Participated in both version 3 & 4 of the Itholic Programming Competition organized by ENSIAS IT Club.", icon: <Code /> },
    { date: "March 9th, 2024", title: "AMPC3 Competition", institution: "Gadz'IT-Club Informatique", description: "Participated in the AMPC3 CP Competition organized by ENSAM Meknes.", icon: <Code /> },
    { date: "June 2024 - August 2024", title: "PFA Internship", institution: "YHS Consulting (French Startup)", description: "Developed a full-stack real-time job offers platform during an internship. Captures data from external APIs, processes it with Kafka and Talend ETL, stores it in MySQL, and displays it via a web platform.", icon: <FaBriefcase /> },
    { date: "November 26th, 2024", title: "MLOps Hackathon", institution: "Dataverse Club", description: "Participated in the MLOps Hackathon organized by ENSA Khouribga.", icon: <Rocket /> },
    { date: "2025 - Present", title: "Vice President of IMPACT Club", institution: "IMPACT Club", description: "Serving as Vice President of the club IMPACT, contributing to leadership and project coordination.", icon: <FaUserTie /> },
    { date: "April 12th, 2025", title: "CodEMI 2025 CP Competition", institution: "ESI", description: "Participated in the CodEMI 2025 competitive programming contest.", icon: <Code /> },
    { date: "April 6th - April 26th, 2025", title: "OpportunAI Hackathon", institution: "EMSI Casablanca", description: "Participated in OpportunAI hackathon and won 4th place with LifeLinkAI project.", icon: <Rocket /> },
    { date: "April 26th - April 27th, 2025", title: "Code IT v8 Hackathon", institution: "EHTP", description: "Built an AI-driven solution in 2 days during a hackathon focused on societal challenges.", icon: <Rocket /> }
];


const Timeline = () => (
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
            
            {/* Desktop Timeline (hidden on mobile) */}
            <div className="hidden md:block relative before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:border-l-2 before:border-dashed before:border-blue-500">
                {timelineData.map((item, index) => (
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
                {timelineData.map((item, index) => (
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

export default Timeline;