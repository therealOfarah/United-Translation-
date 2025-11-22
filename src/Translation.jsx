import React from 'react';
import { motion } from 'framer-motion';
import { FaStamp, FaGlobeAmericas, FaBook } from 'react-icons/fa'; 

const TranslationSpecialties = [
    { icon: <FaStamp />, title: 'Certified Documents', desc: 'Official, sworn translations for legal and governmental use (USCIS, visa applications).' },
    { icon: <FaGlobeAmericas />, title: 'Technical Manuals', desc: 'Precise translation of complex manuals, patents, and engineering documents.' },
    { icon: <FaBook />, title: 'Marketing & PR', desc: 'Culturally adapted content to ensure your brand message resonates globally.' },
];

export default function Translation() {
    return (
        <motion.div 
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="page-header-translation">
                <div className="header-content">
                    <h1 className="header-title">Accurate Document Translation</h1>
                    <p className="header-subtitle">Delivering precision and cultural nuance in every language, guaranteed.</p>
                </div>
            </header>

            <section className="section-padding details-section">
                <h2 className="section-heading">Our Translation Expertise</h2>
                <div className="details-grid">
                    {TranslationSpecialties.map((type, i) => (
                        <div key={i} className="detail-card">
                            <div className="detail-icon-wrapper">{type.icon}</div>
                            <h3 className="detail-title">{type.title}</h3>
                            <p className="detail-description">{type.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}