"use client";
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: "LifeLinkAI: Cross-Platform Blood Donation App",
            description: "LifeLinkAI is a cross-platform application for blood donation, available on both web and mobile. It won 4th place in the OpportunAI Hackathon.",
            imageSrc: "/bdpic.png",
            techStack: ["FastAPI", "Next.js", "Firebase", "Docker", "XGBoost", "Flutter"],
            type: "professional",
            githubLink: "https://blood-donation-rosy-eight.vercel.app"
        },        
        {
            title: "Student Magazine Web Platform",
            description: "Leading the ongoing development of a student magazine platform. The project uses Spring Boot, Next.js, and PostgreSQL, following Scrum methodology with Jira.",
            imageSrc: "/magazine.png",
            techStack: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "Jira"],
            type: "professional",
            githubLink: "https://github.com/zzemat/Magazine-IMPACT",
            comingSoon: true  // Add this flag to indicate it's coming soon
        },
        {
            title: "Real-Time Job Offers Aggregator",
            description: "Developed a full-stack real-time job offers platform during an internship. Captures data from external APIs, processes it with Kafka and Talend ETL, stores it in MySQL, and displays it via a web platform.",
            imageSrc: "/pfa.png",
            techStack: ["Spring Boot", "Apache Kafka", "Talend OS", "MySQL", "JavaScript", "HTML", "Tailwind CSS"],
            type: "professional",
            githubLink: "https://github.com/Zakariae-zemat/PFA"
        },
        {
            title: "Task Management System",
            description: "A web app designed to manage tasks efficiently with deadlines.",
            imageSrc: "/tasks.png",
            techStack: ["React", "Spring boot", "MySQL"],
            type: "personal",
            githubLink: "https://github.com/Zakariae-zemat/Tasks-Management"
        },
        {
            title: "Hotel Management Web Application",
            description: "Built a hotel management system using Spring Boot, Spring Security, React, and MySQL. Includes role-based access control, secure authentication, and data management for guests, rooms, and bookings.",
            imageSrc: "/hotell.png",
            techStack: ["Spring Boot", "Spring Security", "React", "MySQL"],
            type: "academic",
            githubLink: "https://github.com/Zakariae-zemat/hotel-management"
        },
        {
            title: "Project & Collaboration Desktop App",
            description: "Built a project management desktop app with Java Swing, JDBC, and MySQL for task tracking, deadlines, and team collaboration.",
            imageSrc: "/swingp.png",
            techStack: ["Java ","Swing", "JDBC", "MySQL"],
            type: "academic",
            githubLink: "https://github.com/Zakariae-zemat/Gestion-des-projets"
        }
    ];
    
    return (
        <section id="projects" className="text-white py-20 flex flex-col items-center text-center">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
                    Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
            </div>
            <div className="space-y-8 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}