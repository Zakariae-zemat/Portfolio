"use client";
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function EventCard({ title, institution, date, description, isEducation }) {
    return (
        <div className={`relative max-w-[450px] p-4 rounded-lg shadow-md 
        ${isEducation ? 'bg-[#0E2A47] border-l-4 border-cyan-400' : 'bg-[#123456] border-r-4 border-indigo-400'}`}>

            {/* Date */}
            <span className="absolute top-4 text-xs text-yellow-400 font-bold">
                {date}
            </span>

            {/* Icon */}
            <div className="absolute -left-10 top-5 flex items-center justify-center w-8 h-8 rounded-full
            bg-cyan-400 text-white shadow-md">
                {isEducation ? <FaGraduationCap size={18} /> : <FaBriefcase size={18} />}
            </div>

            {/* Details */}
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-cyan-300 font-semibold">{institution}</p>
            {description && <p className="text-gray-300 text-sm mt-2">{description}</p>}
        </div>
    );
}
