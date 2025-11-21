"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaFigma, FaJs, FaReact, FaJava, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs,SiTerraform, SiSpringboot, SiFlutter, SiMysql, SiPostgresql, SiUml, SiJira, SiPostman, SiTailwindcss, SiApachekafka, SiAngular, SiTypescript, SiGrafana, SiPrometheus, SiGithubactions, SiGitlab, SiOracle } from 'react-icons/si';
import { TbDatabase, TbShieldLock, TbApi, TbTemplate, TbCode, TbPalette, TbCloudCog, TbChartBar } from 'react-icons/tb';
import { DiScrum } from 'react-icons/di';
import { MdPattern } from 'react-icons/md';

const technicalCategories = [
    {
        title: "Backend",
        skills: [
            { name: "Java", icon: <FaJava className="text-red-400" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
            { name: "JEE", icon: <FaJava className="text-orange-400" /> },
            { name: "Spring Security", icon: <TbShieldLock className="text-green-400" /> },
            { name: "API REST", icon: <TbApi className="text-blue-400" /> },
            { name: "Kafka", icon: <SiApachekafka className="text-purple-400" /> },
            { name: "Design Patterns", icon: <MdPattern className="text-cyan-400" /> },
            { name: "Principes SOLID", icon: <TbCode className="text-yellow-400" /> }
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "Angular", icon: <SiAngular className="text-red-600" /> },
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
            { name: "Flutter", icon: <SiFlutter className="text-blue-300" /> }
        ]
    },
    {
        title: "Bases de données",
        skills: [
            { name: "SQL", icon: <TbDatabase className="text-blue-300" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
            { name: "Talend Open Studio (ETL)", icon: <TbDatabase className="text-cyan-400" /> }
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
            { name: "GitHub Actions CI/CD", icon: <SiGithubactions className="text-blue-500" /> },
            { name: "Terraform", icon: <SiTerraform className="text-orange-500" /> },
            { name: "AWS", icon: <FaAws className="text-orange-400" /> },
            { name: "OCI", icon: <SiOracle className="text-red-500" /> },
            { name: "Méthodologie Agile", icon: <TbCloudCog className="text-green-400" /> }
        ]
    },
    {
        title: "Monitoring & Observabilité",
        skills: [
            { name: "Grafana", icon: <SiGrafana className="text-orange-500" /> },
            { name: "Prometheus", icon: <SiPrometheus className="text-orange-600" /> },
            { name: "Loki", icon: <TbChartBar className="text-blue-400" /> },
            { name: "Promtail", icon: <TbChartBar className="text-cyan-400" /> }
        ]
    },
    {
        title: "Outils & Méthodologies",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
            { name: "Figma", icon: <FaFigma className="text-rose-300" /> },
            { name: "UML", icon: <SiUml className="text-gray-400" /> },
            { name: "Merise", icon: <TbDatabase className="text-blue-400" /> },
            { name: "Scrum", icon: <DiScrum className="text-blue-500" /> },
            { name: "Jira", icon: <SiJira className="text-blue-500" /> }
        ]
    }
];

const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management",
    "Critical Thinking",
    "Adaptability",
    "Time Management",
    "Creative Thinking",
    "Collaboration"
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState('technical');

    return (
        <motion.section
            id="skills"
            className="text-white px-10 py-20 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
                    Skills & Technologies
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
            </div>
            
            {/* Tab Navigation - Only 2 items */}
            <div className="flex mb-12 bg-blue-900/40 backdrop-blur-sm border border-blue-400/20 rounded-xl p-1">
                <button
                    onClick={() => setActiveTab('technical')}
                    className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === 'technical'
                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                            : 'text-blue-300 hover:text-white'
                    }`}
                >
                    Technical Skills
                </button>
                <button
                    onClick={() => setActiveTab('soft')}
                    className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === 'soft'
                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                            : 'text-blue-300 hover:text-white'
                    }`}
                >
                    Soft Skills
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'technical' ? (
                /* Technical Skills - Category Squares */
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {technicalCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/30 hover:border-blue-400/60 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-xl font-bold text-blue-300 mb-4 text-left border-b border-blue-400/30 pb-2">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill.name}
                                        className="px-3 py-1.5 bg-blue-700/30 text-blue-100 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-600/40 hover:border-blue-400/50 transition-all duration-200 flex items-center gap-1.5"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: (index * 0.1) + (skillIndex * 0.05) }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="text-base">{skill.icon}</span>
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                /* Soft Skills Grid */
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            className="p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-400/30 rounded-lg shadow-md hover:shadow-blue-400/50 hover:border-blue-400/60 cursor-pointer text-center transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <span className="text-sm font-medium text-blue-100">{skill}</span>
                        </motion.div>
                    ))}
                </motion.div>
            )}
            
            <div className="mt-16 flex justify-center">
                <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
            </div>
        </motion.section>
    );
}