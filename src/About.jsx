// src/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';

// Define variants locally or import them if you moved them out of App.jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function About() {
    const values = [
        { icon: <FaCertificate className='value-icon' />, title: 'Accuracy', desc: 'Precision is non-negotiable. Every word matters.' },
        { icon: <FaHandshake className='value-icon' />, title: 'Confidentiality', desc: 'Trust and discretion are our highest standards.' },
        { icon: <FaLightbulb className='value-icon' />, title: 'Empathy', desc: 'Understanding every message’s intent and emotion.' },
        { icon: <FaUsers className='value-icon' />, title: 'Diversity', desc: 'Embracing all languages and cultures as power.' },
    ];

    const team = [
        { name: 'Omar Farah', role: 'Founder & CEO', bio: 'Entrepreneur and interpreter dedicated to global communication.' },
        { name: 'Ahmed Farah', role: 'Operations Director', bio: 'Manages interpreter training and quality assurance.' },
        // { name: 'James Liu', role: 'Technical Lead', bio: 'Oversees digital systems and multilingual technology platforms.' },
    ];

    return (
        <motion.div
            className="page-container-about"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="content-wrapper">
                <div className="about-header">
                    <h2 className="about-heading">Our Commitment</h2>
                    <p className="about-subheading">
                        United Translations Services LLC was founded to provide reliable, culturally aware language solutions.
                        We believe language should connect, not divide.
                    </p>
                </div>
                <section className="about-section">
                    <h3 className="section-heading">Core Values That Drive Us</h3>
                    <motion.div
                        className="values-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {values.map((v, i) => (
                            <motion.div key={i} className="value-card" variants={itemVariants}>
                                <div className='value-icon-wrapper'>{v.icon}</div>
                                <h4 className="value-title">{v.title}</h4>
                                <p className="value-description">{v.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
                <section className='mission-statement'>
                    <h3 className="mission-heading">Our Mission</h3>
                    <p className="mission-text">
                        To empower communities and organizations through precise and culturally sensitive communication. We aim to
                        eliminate language barriers with professionalism, empathy, and innovation, making global business seamless.
                    </p>
                </section>
                <section className="about-section team-section">
                    <h3 className="section-heading">Meet the Leadership Team</h3>
                    <motion.div
                        className="team-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                         viewport={{ once: true, amount: 0.3 }}
                    >
                        {team.map((person, i) => (
                            <motion.div
                                key={i}
                                className="team-card"
                                variants={itemVariants}
                            >
                                <div className="team-photo-placeholder">
                                    {person.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h4 className="team-name">{person.name}</h4>
                                <p className="team-role">{person.role}</p>
                                <p className="team-bio">{person.bio}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </motion.div>
    );
}