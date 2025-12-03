import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

const faqData = [
    { 
        q: 'How quickly can I get an interpreter?', 
        a: 'For Telephonic Interpretation (OPI), we can connect you with an interpreter in most major languages within 30 seconds, 24/7/365.',
    },
    { 
        q: 'Are your translators certified?', 
        a: 'Yes, all certified document translations are performed by ATA-certified linguists and guaranteed for legal acceptance (e.g., USCIS).',
    },
    { 
        q: 'What is the difference between Translation and Localization?', 
        a: 'Translation converts text from one language to another. Localization adapts the content, currency, formats, and cultural context to resonate in a specific target region.',
    },
];

// src/GetSupport.jsx

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item">
            <button 
                className="faq-question" 
                onClick={() => setIsOpen(!isOpen)}
                type="button" // Good practice for buttons inside divs
            >
                {/* Display the question */}
                <span style={{ flexGrow: 1, textAlign: 'left' }}>{question}</span>
                
                {/* Toggle Icon - uses CSS class 'rotate' when 'open' */}
                <FaChevronDown className={`faq-arrow ${isOpen ? 'open rotate' : ''}`} />
            </button>
            
            {/* The class name below is what controls the style */}
            {/* Using the 'open' class to reveal the answer content */}
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}> 
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default function GetSupport() {
    return (
        <motion.div 
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="page-header-support">
                <div className="header-content">
                    <h1 className="header-title">24/7 Support Center</h1>
                    <p className="header-subtitle">Find fast answers or contact our dedicated support team instantly.</p>
                </div>
            </header>

            <section className="section-padding support-contact-section">
                <h2 className="section-heading">Need Immediate Help?</h2>
                <div className="support-contact-grid">
                    <div className="support-card phone">
                        <FaPhoneAlt className="support-icon" />
                        <h3 className="support-title">Call Us Now</h3>
                        <p className="support-info"><a href="tel:+12073767011" className="phone-link">
        (207)-376-7011
    </a></p>
                        <p className="support-desc">For urgent interpretation needs, available 24 hours a day.</p>
                    </div>
                    <a href="/contact" className="support-card email">
                        <FaEnvelope className="support-icon" />
                        <h3 className="support-title">Email a Specialist</h3>
                        <p className="support-info">support@unitedtranslations.com</p>
                        <p className="support-desc">For quotes, billing, and general inquiries.</p>
                    </a>
                </div>
            </section>

            <section className="section-padding faq-section">
                <h2 className="section-heading">Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqData.map((item, i) => (
                        <FAQItem key={i} question={item.q} answer={item.a} />
                    ))}
                </div>
            </section>
        </motion.div>
    );
}