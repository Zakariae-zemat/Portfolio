"use client";
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaFigma, FaJs, FaReact, FaJava, FaPython, FaGitAlt, FaDocker, FaGithub, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiSpringboot, SiFlutter, SiMysql, SiPostgresql, SiOracle, SiUml, SiJira, SiPostman, SiKubernetes, SiC, SiTailwindcss, SiApachekafka, SiDart, SiAngular, SiTypescript, SiGrafana, SiPrometheus } from 'react-icons/si';
import { TbCloudCog, TbHexagonLetterM, TbDatabase } from 'react-icons/tb';
import { AiOutlineGlobal, AiOutlineMail } from 'react-icons/ai';
import { Wrench } from 'lucide-react';
import { useState } from 'react';

const technicalSkills = [
    // Web and Mobile Development
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, category: "Web and Mobile Development" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, category: "Web and Mobile Development" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, category: "Web and Mobile Development" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, category: "Web and Mobile Development" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, category: "Web and Mobile Development" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, category: "Web and Mobile Development" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, category: "Web and Mobile Development" },
    { name: "Angular", icon: <SiAngular className="text-red-600" />, category: "Web and Mobile Development" },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" />, category: "Web and Mobile Development" },
    { name: "JEE", icon: <FaJava className="text-red-400" />, category: "Web and Mobile Development" },
    { name: "Spring Security", icon: <Wrench className="text-green-400" />, category: "Web and Mobile Development" },
    { name: "API REST", icon: <AiOutlineGlobal className="text-blue-400" />, category: "Web and Mobile Development" },
    { name: "JWT", icon: <TbCloudCog className="text-yellow-400" />, category: "Web and Mobile Development" },
    { name: "Flutter", icon: <SiFlutter className="text-blue-300" />, category: "Web and Mobile Development" },

    // Programming Languages
    { name: "Java", icon: <FaJava className="text-red-400" />, category: "Programming Languages" },
    { name: "C", icon: <SiC className="text-gray-400" />, category: "Programming Languages" },

    // Databases
    { name: "MySQL", icon: <SiMysql className="text-blue-400" />, category: "Databases" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, category: "Databases" },
    { name: "Supabase", icon: <TbDatabase className="text-cyan-400" />, category: "Databases" },

    // Modeling and Design
    { name: "UML", icon: <SiUml className="text-gray-400" />, category: "Modeling and Design" },
    { name: "Merise", icon: <TbDatabase className="text-blue-400" />, category: "Modeling and Design" },
    { name: "Figma", icon: <FaFigma className="text-rose-300" />, category: "Modeling and Design" },

    // Project Management
    { name: "Scrum", icon: <SiJira className="text-blue-500" />, category: "Project Management" },
    { name: "Jira", icon: <SiJira className="text-blue-500" />, category: "Project Management" },

    // DevOps and Cloud
    { name: "Docker", icon: <FaDocker className="text-blue-400" />, category: "DevOps and Cloud" },
    { name: "CI/CD", icon: <TbCloudCog className="text-indigo-500" />, category: "DevOps and Cloud" },
    { name: "AWS", icon: <FaAws className="text-orange-400" />, category: "DevOps and Cloud" },

    // Observability and Monitoring
    { name: "Grafana", icon: <SiGrafana className="text-orange-500" />, category: "Observability and Monitoring" },
    { name: "Prometheus", icon: <SiPrometheus className="text-orange-600" />, category: "Observability and Monitoring" },
    { name: "Loki", icon: <SiPrometheus className="text-blue-400" />, category: "Observability and Monitoring" },
    { name: "Promtail", icon: <SiPrometheus className="text-blue-400" />, category: "Observability and Monitoring" },

    // Tools and Technologies
    { name: "Git", icon: <FaGitAlt className="text-orange-500" />, category: "Tools and Technologies" },
    { name: "Kafka", icon: <SiApachekafka className="text-purple-400" />, category: "Tools and Technologies" },
    { name: "Postman", icon: <SiPostman className="text-orange-400" />, category: "Tools and Technologies" },
    { name: "Talend Open Studio (ETL)", icon: <TbDatabase className="text-cyan-400" />, category: "Tools and Technologies" }
];

const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management",
    "Critical Thinking",
    "Adaptability",
    "Time Management",
    "Mentoring",
    "Creative Thinking",
    "Collaboration"
];

const skillCategories = [
    "Web and Mobile Development",
    "Programming Languages",
    "Databases",
    "Modeling and Design",
    "Project Management",
    "DevOps and Cloud",
    "Observability and Monitoring",
    "Tools and Technologies"
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState('technical');
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const getFilteredSkills = () => {
        if (selectedCategory === 'all') return technicalSkills;
        return technicalSkills.filter(skill => skill.category === selectedCategory);
    };

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
            
            {/* Tab Navigation */}
            <div className="flex mb-8 bg-blue-900/40 backdrop-blur-sm border border-blue-400/20 rounded-xl p-1">
                <button
                    onClick={() => setActiveTab('technical')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === 'technical'
                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                            : 'text-blue-300 hover:text-white'
                    }`}
                >
                    Technical Skills
                </button>
                <button
                    onClick={() => setActiveTab('soft')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
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
                <>
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                selectedCategory === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-blue-900/40 text-blue-300 hover:bg-blue-700/40'
                            }`}
                        >
                            All
                        </button>
                        {skillCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-blue-900/40 text-blue-300 hover:bg-blue-700/40'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Technical Skills Grid */}
                    <motion.div 
                        className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full max-w-5xl"
                        layout
                    >
                        {getFilteredSkills().map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="tile flex items-center gap-2 p-3 bg-[#1a1b3d] border border-cyan-500 rounded-lg shadow-md hover:shadow-cyan-400 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                layout
                            >
                                <div className="text-2xl">{skill.icon}</div>
                                <span className="text-sm truncate">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </>
            ) : (
                /* Soft Skills Grid */
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            className="p-4 bg-[#1a1b3d] border border-blue-400/30 rounded-lg shadow-md hover:shadow-blue-400/50 cursor-pointer text-center"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(29, 78, 216, 0.2)" }}
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