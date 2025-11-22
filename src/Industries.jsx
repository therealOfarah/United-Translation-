import React from 'react';
import { motion } from 'framer-motion';
import { FaHospitalSymbol, FaGavel, FaBriefcase, FaGraduationCap, FaPlane } from 'react-icons/fa';

const industryData = [
    {
        icon: <FaHospitalSymbol />,
        title: 'Healthcare & Medical',
        desc: 'Certified medical interpreters (CMI) for patient care, emergency rooms, telehealth, and insurance communications.',
        color: '#ef4444', // Red-500
    },
    {
        icon: <FaGavel />,
        title: 'Legal & Judiciary',
        desc: 'Sworn and certified court interpreters for depositions, trials, attorney-client interviews, and document review.',
        color: '#f97316', // Orange-500
    },
    {
        icon: <FaBriefcase />,
        title: 'Corporate & Finance',
        desc: 'Translation of financial reports, corporate compliance documents, internal communications, and global marketing.',
        color: '#10b981', // Emerald-500
    },
    {
        icon: <FaGraduationCap />,
        title: 'Education & Research',
        desc: 'Support for K-12 parent-teacher meetings, university entrance documents, and academic research translation.',
        color: '#6366f1', // Indigo-500
    },
    {
        icon: <FaPlane />,
        title: 'Travel & Hospitality',
        desc: 'Multilingual support for customer service, booking systems, marketing brochures, and travel documentation.',
        color: '#06b6d4', // Cyan-500
    },
];

export default function Industries() {
    return (
        <motion.div 
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="page-header-industries">
                <div className="header-content">
                    <h1 className="header-title">Specialized Language for Every Sector</h1>
                    <p className="header-subtitle">Tailored interpretation and translation solutions powered by subject matter experts.</p>
                </div>
            </header>

            <section className="section-padding industries-section">
                <h2 className="section-heading">Our Key Areas of Expertise</h2>
                <div className="industries-grid">
                    {industryData.map((industry, i) => (
                        <motion.div
                            key={i}
                            className="industry-card"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="industry-icon-wrapper" style={{ backgroundColor: industry.color }}>
                                {industry.icon}
                            </div>
                            <h3 className="industry-title">{industry.title}</h3>
                            <p className="industry-description">{industry.desc}</p>
                            <a href="/contact" className="industry-cta">Request Industry Quote →</a>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}