import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaBookOpen, FaVideo } from 'react-icons/fa';

const resourceData = [
    { 
        typeIcon: <FaFilePdf />, 
        title: 'E-Guide: Choosing the Right Interpreter', 
        desc: 'A comprehensive guide on evaluating qualifications and services for critical communication.',
        category: 'Guide',
    },
    { 
        typeIcon: <FaBookOpen />, 
        title: 'Case Study: HIPAA Compliance in Telehealth', 
        desc: 'How our VRI services maintained strict compliance for a major hospital network.',
        category: 'Case Study',
    },
    { 
        typeIcon: <FaVideo />, 
        title: 'Webinar: The Future of AI in Translation', 
        desc: 'Watch our expert discussion on leveraging neural machine translation while maintaining accuracy.',
        category: 'Webinar',
    },
];

export default function Resources() {
    return (
        <motion.div 
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="page-header-resources">
                <div className="header-content">
                    <h1 className="header-title">Knowledge Hub</h1>
                    <p className="header-subtitle">Access valuable guides, white papers, and expert insights from our team.</p>
                </div>
            </header>

            <section className="section-padding resources-section">
                <h2 className="section-heading">Featured Resources</h2>
                <div className="resources-grid">
                    {resourceData.map((resource, i) => (
                        <motion.div
                            key={i}
                            className="resource-card"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <span className="resource-category" style={{ backgroundColor: i % 2 === 0 ? '#1e3a8a' : '#3b82f6' }}>{resource.category}</span>
                            <div className="resource-icon-wrapper">
                                {resource.typeIcon}
                            </div>
                            <h3 className="resource-title">{resource.title}</h3>
                            <p className="resource-description">{resource.desc}</p>
                            <a href="#" className="resource-download-link">Download / View →</a>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}