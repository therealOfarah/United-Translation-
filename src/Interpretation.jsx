import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaLaptopCode, FaBalanceScale } from 'react-icons/fa'; 

const InterpretationTypes = [
    { icon: <FaPhoneAlt />, title: 'Telephonic Interpretation', desc: 'On-demand audio interpretation available 24/7 in over 200 languages.' },
    { icon: <FaLaptopCode />, title: 'Video Remote Interpretation', desc: 'Secure, high-quality video interpretation for remote interactions.' },
    { icon: <FaBalanceScale />, title: 'On-Site Interpretation', desc: 'Scheduled in-person interpreters for courts, hospitals, and conferences.' },
];

export default function Interpretation() {
    return (
        <motion.div 
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="page-header-interpretation">
                <div className="header-content">
                    <h1 className="header-title">Professional Interpretation Services</h1>
                    <p className="header-subtitle">Bridging communication gaps in real-time with certified linguists.</p>
                </div>
            </header>

            <section className="section-padding details-section">
                <h2 className="section-heading">How We Help You Communicate</h2>
                <div className="details-grid">
                    {InterpretationTypes.map((type, i) => (
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