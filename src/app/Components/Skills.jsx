"use client";
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt,FaFigma, FaJs, FaReact, FaJava, FaPython, FaGitAlt, FaDocker, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiSpringboot, SiFlutter, SiMysql, SiPostgresql, SiOracle, SiUml, SiJira, SiPostman, SiKubernetes, SiC, SiTailwindcss, SiApachekafka, SiDart } from 'react-icons/si';
import { TbCloudCog, TbHexagonLetterM, TbDatabase } from 'react-icons/tb';

const skills = [
    { name: "C", icon: <SiC className="text-gray-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "Java", icon: <FaJava className="text-red-400" /> },
    { name: "Dart", icon: <SiDart className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-300" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
    { name: "Kafka", icon: <SiApachekafka className="text-purple-400" /> },
    { name: "ETL", icon: <TbDatabase className="text-cyan-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "CI/CD", icon: <TbCloudCog className="text-indigo-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Jira & Scrum", icon: <SiJira className="text-blue-500" /> },
    { name: "UML", icon: <SiUml className="text-gray-400" /> },
    { name: "Figma", icon: <FaFigma className="text-rose-300" /> }
];

export default function Skills() {
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

            <div className="skills-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 w-full max-w-5xl">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="tile flex items-center gap-2 p-2 bg-[#1a1b3d] border border-cyan-500 
                        rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-cyan-400 cursor-pointer"
                    >
                        <div className="text-3xl">{skill.icon}</div>
                        <span className="text-sm">{skill.name}</span>
                    </div>
                ))}
            </div>
            <div className="mt-16 flex justify-center">
          <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>
        </motion.section>
        
    );
}
