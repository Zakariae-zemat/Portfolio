"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Insurance Management System",
            description: "Full-stack insurance platform with JWT/2FA authentication, OCR integration, and predictive analytics. Containerized with Docker, monitored via Prometheus/Grafana/Loki, and deployed on AWS with CI/CD automation.",
            thumbnail: "/eassurance/eassurance_thmbnail.jpg",
            screenshots: [
                "/eassurance/Capture d'écran 2025-02-17 222314.png",
                "/eassurance/Capture d'écran 2025-07-08 131330.png",
                "/eassurance/Capture d'écran 2025-07-11 110042.png",
                "/eassurance/Capture d'écran 2025-07-14 110920.png",
                "/eassurance/Capture d'écran 2025-08-30 134916.png",
                "/eassurance/Capture d'écran 2025-08-30 134936.png",
                "/eassurance/Capture d'écran 2025-11-03 175514.png",
                "/eassurance/Capture d'écran 2025-11-03 175538.png",
                "/eassurance/Capture d'écran 2025-11-03 175658.png",
                "/eassurance/Capture d'écran 2025-11-03 175956.png",
                "/eassurance/Capture d'écran 2025-11-03 180106.png",
                "/eassurance/Capture d'écran 2025-11-03 180138.png",
                "/eassurance/Capture d'écran 2025-11-03 180151.png",
                "/eassurance/Capture d'écran 2025-11-03 180215.png",
                "/eassurance/Capture d'écran 2025-11-03 180246.png",
                "/eassurance/Capture d'écran 2025-11-03 180303.png",
                "/eassurance/Capture d'écran 2025-11-03 180334.png",
                "/eassurance/Capture d'écran 2025-11-03 180408.png",
                "/eassurance/Capture d'écran 2025-11-03 180425.png",
                "/eassurance/Capture d'écran 2025-11-03 180517.png"
            ],
            techStack: ["Spring Boot", "Angular", "Docker", "AWS", "Prometheus", "Grafana", "Loki", "CI/CD"],
            type: "professional",
            githubLink: "#"
        },
        {
            id: 4,
            title: "LifeLinkAI: Cross-Platform Blood Donation App",
            description: "LifeLinkAI is a cross-platform application for blood donation, available on both web and mobile. It won 4th place in the OpportunAI Hackathon.",
            thumbnail: "/lifelinkai/lifelinkai_thmbnail.png",
            screenshots: [
                "/lifelinkai/Capture d'écran 2025-04-20 232130.png",
                "/lifelinkai/Capture d'écran 2025-04-20 234548.png",
                "/lifelinkai/Capture d'écran 2025-04-21 003835.png",
                "/lifelinkai/Capture d'écran 2025-04-22 150511.png",
                "/lifelinkai/Capture d'écran 2025-05-02 164357.png",
                "/lifelinkai/Capture d'écran 2025-05-02 164600.png",
                "/lifelinkai/Capture d'écran 2025-05-04 140149.png",
                "/lifelinkai/Capture d'écran 2025-06-03 154258.png",
                "/lifelinkai/Capture d'écran 2025-11-03 172647.png"
            ],
            techStack: ["FastAPI", "Next.js", "Firebase", "Docker", "XGBoost", "Flutter"],
            type: "professional",
            githubLink: "https://blood-donation-rosy-eight.vercel.app",
            liveLink: "https://blood-donation-rosy-eight.vercel.app"
        },   
        {
            id: 5,
            title: "IMPACT Club Landing Page",
            description: "Designed and developed a modern landing page for IMPACT Club with an interactive registration form for new members. Features responsive design and smooth animations.",
            thumbnail: "/impcat/impact_thmbnail.png",
            screenshots: [
                "/impcat/Capture d'écran 2025-11-03 195931.png",
                "/impcat/Capture d'écran 2025-11-03 200225.png",
                "/impcat/Capture d'écran 2025-11-03 200248.png"
            ],
            techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
            type: "professional",
            githubLink: "#"
        },
        {
            id: 2,
            title: "Sovereign AI Gateway",
            description: "Contributing to a Moroccan AI platform inspired by OpenRouter. Built with microservices architecture, LLM integration, Docker containerization, and Azure Cloud deployment with full observability.",
            thumbnail: "/xai_project/thumbnails.png",
            screenshots: [
                "/xai_project/image01.png",
                "/xai_project/image02.png",
                "/xai_project/image32.png",
                "/xai_project/image78.png",
                "/xai_project/image90.png",
                "/xai_project/image098.png"
            ],
            techStack: ["FastAPI", "Spring Boot", "React", "Terraform", "Docker", "Azure", "CI/CD", "PostgreSQL"],
            type: "professional",
            githubLink: "#"
        },
        {
            id: 3,
            title: "Course Registration & Payment Platform",
            description: "Microservices-based platform for course enrollment and payments. Implements event-driven architecture with Kafka, Redis caching, API Gateway, and deployed on Oracle Cloud with monitoring.",
            thumbnail: "/e-learning/image2.png",
            screenshots: [
                "/e-learning/image2.png",
                "/e-learning/image23.png",
                "/e-learning/image34.png",
                "/e-learning/image37.png",
                "/e-learning/image78.png",
                "/e-learning/image89.png",
                "/e-learning/image200.png"
            ],
            techStack: ["Spring Boot", "Next.js", "k8s", "Terraform", "Kafka", "Redis", "PostgreSQL", "Clerk", "Prometheus", "Grafana", "Loki", "OCI"],
            type: "professional",
            githubLink: "#"
        },     
        {
            id: 6,
            title: "Student Magazine Web Platform",
            description: "Led development of a student magazine platform using Spring Boot, Next.js, and PostgreSQL. Project discontinued after initial development phase.",
            thumbnail: "/magazine/1762200910142.png",
            screenshots: [
                "/magazine/1762200910142.png",
                "/magazine/Capture d'écran 2025-02-19 113227.png",
                "/magazine/Capture d'écran 2025-03-20 140027.png",
                "/magazine/Capture d'écran 2025-03-28 151211.png",
                "/magazine/Capture d'écran 2025-03-28 160653.png"
            ],
            techStack: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "Jira"],
            type: "professional",
            githubLink: "https://github.com/zzemat/Magazine-IMPACT",
            discontinued: true
        },
        {
            id: 7,
            title: "Real-Time Job Offers Aggregator",
            description: "Developed a full-stack real-time job offers platform during an internship. Captures data from external APIs, processes it with Kafka and Talend ETL, stores it in MySQL, and displays it via a web platform.",
            thumbnail: "/jobportal/Capture d'écran 2024-08-24 185626.png",
            screenshots: [
                "/jobportal/Capture d'écran 2024-08-24 185626.png",
                "/jobportal/Capture d'écran 2024-07-31 155844.png",
                "/jobportal/Capture d'écran 2024-08-25 213500.png",
                "/jobportal/Capture d'écran 2024-08-25 222739.png"
            ],
            techStack: ["Spring Boot", "Apache Kafka", "Talend OS", "MySQL", "JavaScript", "Tailwind CSS"],
            type: "professional",
            githubLink: "https://github.com/Zakariae-zemat/PFA"
        },
        {
            id: 8,
            title: "Task Management System",
            description: "A web app designed to manage tasks efficiently with deadlines, priority levels, and team collaboration features.",
            thumbnail: "/tasks/Capture d'écran 2025-06-07 002431.png",
            screenshots: [
                "/tasks/Capture d'écran 2025-06-07 002431.png",
                "/tasks/Capture d'écran 2025-06-07 192050.png"
            ],
            techStack: ["React", "Spring Boot", "MySQL"],
            type: "personal",
            githubLink: "https://github.com/Zakariae-zemat/Tasks-Management"
        },
        {
            id: 9,
            title: "Hotel Management Web Application",
            description: "Built a hotel management system using Spring Boot, Spring Security, React, and MySQL. Includes role-based access control, secure authentication, and data management for guests, rooms, and bookings.",
            thumbnail: "/hotel/Hotel_thmbnail.png",
            screenshots: [
                "/hotel/Capture d'écran 2025-11-03 172252.png",
                "/hotel/Capture d'écran 2025-11-03 172311.png",
                "/hotel/Capture d'écran 2025-03-20 140452.png",
                "/hotel/Capture d'écran 2025-03-20 140743.png"
            ],
            techStack: ["Spring Boot", "Spring Security", "React", "MySQL"],
            type: "academic",
            githubLink: "https://github.com/Zakariae-zemat/hotel-management"
        },
        {
            id: 10,
            title: "Project & Collaboration Desktop App",
            description: "Built a project management desktop app with Java Swing, JDBC, and MySQL for task tracking, deadlines, and team collaboration.",
            thumbnail: "/javaswing/javaswing_thambnail.png",
            screenshots: [
                "/javaswing/Capture d'écran 2025-03-20 150939.png",
                "/javaswing/Capture d'écran 2025-11-03 173028.png",
                "/javaswing/Capture d'écran 2025-11-03 173146.png",
                "/javaswing/Capture d'écran 2025-11-03 173200.png",
                "/javaswing/Capture d'écran 2025-11-03 173215.png",
                "/javaswing/Capture d'écran 2025-11-03 173232.png",
                "/javaswing/Capture d'écran 2025-11-03 173255.png",
                "/javaswing/Capture d'écran 2025-11-03 173310.png",
                "/javaswing/Capture d'écran 2025-11-03 173332.png",
                "/javaswing/Capture d'écran 2025-11-03 173343.png",
                "/javaswing/Capture d'écran 2025-11-03 173355.png"
            ],
            techStack: ["Java", "Swing", "JDBC", "MySQL"],
            type: "academic",
            githubLink: "https://github.com/Zakariae-zemat/Gestion-des-projets"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => 
                prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => 
                prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
            );
        }
    };

    return (
        <section id="projects" className="text-white py-20 px-4 md:px-10">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
                    Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
            </div>

            {/* Projects Grid - 2 per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                        whileHover={{ scale: 1.03, y: -5 }}
                        onClick={() => openModal(project)}
                    >
                        {/* Thumbnail */}
                        <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-6 w-full">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 flex-wrap">
                                        {project.type === 'professional' && (
                                            <span className="text-xs px-3 py-1 bg-green-500/30 text-green-300 rounded-full">
                                                Professional
                                            </span>
                                        )}
                                        {project.type === 'personal' && (
                                            <span className="text-xs px-3 py-1 bg-yellow-500/30 text-yellow-300 rounded-full">
                                                Personal
                                            </span>
                                        )}
                                        {project.type === 'academic' && (
                                            <span className="text-xs px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full">
                                                Academic
                                            </span>
                                        )}
                                        {project.discontinued && (
                                            <span className="text-xs px-3 py-1 bg-gray-500/30 text-gray-300 rounded-full">
                                                Discontinued
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gradient-to-br from-[#0E2A47] to-[#123456] rounded-2xl max-w-4xl w-full max-h-[85vh] border-2 border-cyan-500/50 relative overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-20 bg-red-500/20 hover:bg-red-500/40 text-white p-2 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Slider */}
                            <div className="relative w-full bg-black/50" style={{ height: '350px' }}>
                                <Image
                                    src={selectedProject.screenshots[currentImageIndex]}
                                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                    fill
                                    className="object-contain"
                                />
                                
                                {/* Navigation Arrows */}
                                {selectedProject.screenshots.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                                        >
                                            <ChevronRight size={20} />
                                        </button>

                                        {/* Image Counter */}
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1.5 rounded-full text-xs">
                                            {currentImageIndex + 1} / {selectedProject.screenshots.length}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Project Details */}
                            <div className="p-5 md:p-6 overflow-y-auto flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                                            {selectedProject.title}
                                        </h2>
                                        <div className="flex gap-2 flex-wrap">
                                            {selectedProject.type === 'professional' && (
                                                <span className="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                                                    Professional
                                                </span>
                                            )}
                                            {selectedProject.type === 'personal' && (
                                                <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full">
                                                    Personal
                                                </span>
                                            )}
                                            {selectedProject.type === 'academic' && (
                                                <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                                                    Academic
                                                </span>
                                            )}
                                            {selectedProject.discontinued && (
                                                <span className="text-xs px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full">
                                                    Discontinued
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-cyan-500/20 border border-cyan-500/50 px-2.5 py-1 rounded-lg text-cyan-300 text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                                        <a
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500 px-4 py-2 rounded-lg text-cyan-300 transition-colors text-sm"
                                        >
                                            <Github size={18} />
                                            View Code
                                        </a>
                                    )}
                                    {selectedProject.liveLink && (
                                        <a
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500 px-4 py-2 rounded-lg text-blue-300 transition-colors text-sm"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-16 flex justify-center">
                <div className="w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
            </div>
        </section>
    );
}
