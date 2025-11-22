import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeadset, FaFileAlt, FaGlobe } from 'react-icons/fa'; 

// Framer Motion Variants (assuming they are exported and imported here, or defined locally)
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.15 },
  },
};

const services = [
    {
        icon: <FaHeadset className="service-icon" />,
        title: 'Interpretation Services',
        desc: 'Real-time communication solutions for legal, medical, and corporate meetings. Certified and experienced linguists.',
        link: '/interpretation',
    },
    {
        icon: <FaFileAlt className="service-icon" />,
        title: 'Document Translation',
        desc: 'Accurate and certified translation of official documents, marketing materials, and technical manuals.',
        link: '/translation',
    },
    {
        icon: <FaGlobe className="service-icon" />,
        title: 'Website Localization',
        desc: 'Adapting your digital content and software to fit the linguistic and cultural norms of target markets.',
        link: '/localization',
    },
];

export default function LanguageServices() {
    return (
        <motion.div
            className="page-container-services"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <header className="page-header-banner">
                <div className="header-content">
                    <h1 className="header-title">Comprehensive Language Solutions</h1>
                    <p className="header-subtitle">Your single source for professional interpretation, translation, and localization.</p>
                </div>
            </header>

            <section className="section-padding services-overview-section">
                <h2 className="section-heading-small">Explore Our Core Services</h2>
                <motion.div 
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="service-card-large"
                            variants={itemVariants}
                        >
                            <div className="service-icon-wrapper-large">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.desc}</p>
                            <Link to={service.link} className="service-read-more-btn">
                                Learn More
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </motion.div>
    );
}