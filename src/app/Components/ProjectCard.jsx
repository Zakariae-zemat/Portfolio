"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLink, FaCode } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProjectCard({ title, description, imageSrc, techStack, type, githubLink, comingSoon }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false });
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="project-card relative flex flex-col md:flex-row items-center bg-gradient-to-br from-[#0E2A47] to-[#123456] 
            rounded-xl shadow-md p-4 md:p-6 gap-4 md:gap-6 border border-cyan-500 hover:shadow-cyan-400 
            transition-transform duration-500 hover:scale-105"
        >
            {/* Project Image - Full width on mobile, 1/3 on larger screens */}
            <div className="relative w-full md:w-1/3 flex-shrink-0 overflow-hidden rounded-lg border border-cyan-400">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-48 md:h-auto"
                />
            </div>

            {/* Project Details - Full width on mobile, 2/3 on larger screens */}
            <div className="flex flex-col w-full md:w-2/3 text-left mt-4 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
                    {type === 'personal' && (
                        <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-md w-fit mt-1 md:mt-0">
                            <FaCode className="inline-block mr-1" /> Personal Project
                        </span>
                    )}
                    {type === 'professional' && (
                        <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-md w-fit mt-1 md:mt-0">
                            <FaCode className="inline-block mr-1" /> Professional Project
                        </span>
                    )}
                    {type === 'academic' && (
                        <span className="text-xs px-3 py-1 bg-red-400/20 text-red-300 rounded-md w-fit mt-1 md:mt-0">
                            <FaCode className="inline-block mr-1" /> Academic Project
                        </span>
                    )}
                </div>

                <p className="text-gray-300 text-sm mt-2">{description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-xs mt-4">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-cyan-400/20 px-2 py-1 rounded-md text-cyan-400"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* GitHub Link Section */}
                <div className="flex items-center gap-2 mt-4 md:mt-6">
                    {githubLink && comingSoon ? (
                        <div className="relative">
                            <span 
                                className="flex items-center gap-2 text-gray-400 cursor-not-allowed"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                            >
                                <FaLink size={15} /> <span>Source</span>
                            </span>
                            {showTooltip && (
                                <div className="absolute -bottom-8 left-0 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                                    Coming soon
                                </div>
                            )}
                        </div>
                    ) : githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                        >
                            <FaLink size={15} /> <span>Source</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}