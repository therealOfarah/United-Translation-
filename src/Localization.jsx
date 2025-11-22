import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaMoneyBillWave, FaRegCommentDots } from 'react-icons/fa'; 

const LocalizationAspects = [
    { icon: <FaLaptop />, title: 'Software & App L10n', desc: 'Adapting user interfaces, strings, and help content for international release.' },
    { icon: <FaMoneyBillWave />, title: 'Currency & Format', desc: 'Converting dates, currencies, measurements, and addresses to local standards.' },
    { icon: <FaRegCommentDots />, title: 'Cultural Review', desc: 'Ensuring color schemes, imagery, and humor are appropriate and effective in the target culture.' },
];

export default function Localization() {
    return (
        <motion.div 
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="page-header-localization">
                <div className="header-content">
                    <h1 className="header-title">Global Content Localization</h1>
                    <p className="header-subtitle">Making your brand feel native in any corner of the world.</p>
                </div>
            </header>

            <section className="section-padding details-section">
                <h2 className="section-heading">Beyond Translation: Cultural Adaptation</h2>
                <div className="details-grid">
                    {LocalizationAspects.map((type, i) => (
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