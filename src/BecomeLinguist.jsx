import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaCheckCircle, FaGlobe, FaHeadset } from 'react-icons/fa';

// The "isSubmitted" logic below relies on Netlify redirecting the user 
// to the homepage with a query parameter like "?submitted=true" after successful submission.

export default function BecomeLinguist() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    // Check for a submission success flag in the URL (e.g., /?submitted=true)
    // This is a common way to handle success messages after a Netlify redirect.
    const isSubmitted = window.location.search.includes('submitted=true') || false;


    if (isSubmitted) {
        return (
            <motion.div
                className="page-container-linguist"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', padding: '100px 24px' }}
            >
                <FaCheckCircle style={{ color: '#1e3a8a', fontSize: '60px', marginBottom: '20px' }} />
                <h2 className="contact-heading" style={{ color: '#1e3a8a' }}>Application Submitted Successfully!</h2>
                <p className="contact-subheading">
                    Thank you for your interest in joining the United Translations network. We will review your application and contact you shortly.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="page-container-linguist"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <header className="linguist-header-banner">
                <div className="header-content">
                    <h1 className="about-heading" style={{ color: 'white' }}>Join Our Network of Certified Linguists</h1>
                    <p className="about-subheading" style={{ color: '#bfdbfe' }}>
                        Partner with a trusted leader in global communication. We are always looking for talented interpreters and translators.
                    </p>
                </div>
            </header>

            <div className="application-form-wrapper section-padding" style={{paddingTop: '40px', paddingBottom: '40px'}}>
                
                <form 
                name="LinguistApplication" 
                method="POST" 
                data-netlify="true" 
                enctype="multipart/form-data"
                className="linguist-form"
>
            <input type="hidden" name="form-name" value="LinguistApplication" />
                    
                    <h3 className="form-heading">Your Professional Application</h3>
                    
                    {/* Full Name */}
                    <div className="form-group">
                        <label htmlFor="full-name" className="form-label">Full Name</label>
                        <input id="full-name" name="Full Name" type="text" placeholder="First and Last Name" className="form-input" required />
                    </div>
                    
                    {/* Email Address */}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input id="email" name="Email" type="email" placeholder="Your Professional Email" className="form-input" required />
                    </div>

                    {/* Language and Service Row */}
                    <div className="form-row">
                        <div className="form-group" style={{ flex: 1 }}>
                            <label htmlFor="language" className="form-label">Primary Language (Non-English)</label>
                            <input id="language" name="Language" type="text" placeholder="e.g., Spanish, Arabic, Mandarin" className="form-input" required />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label htmlFor="service" className="form-label">Primary Service</label>
                            <select id="service" name="Service" className="form-input" required>
                                <option value="">Select Service Type</option>
                                <option value="interpretation">Interpretation</option>
                                <option value="translation">Translation</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* File Upload */}
                    <div className="form-group file-upload-group">
                        <label htmlFor="resume-upload" className="form-label">Upload Resume / CV (PDF preferred)</label>
                        <div className="file-input-container">
                            <input
                                id="resume-upload"
                                name="Resume" // This is the field Netlify uses for the file
                                type="file"
                                accept=".pdf, .doc, .docx"
                                style={{ display: 'none' }} 
                                onChange={handleFileChange}
                            />
                            <label htmlFor="resume-upload" className="file-input-label" style={{ padding: '16px 20px', display: 'block', cursor: 'pointer', borderRadius: '8px' }}>
                                <FaUpload className="file-upload-icon" style={{ marginRight: '10px' }} />
                                {file ? file.name : 'Choose File (Max 5MB)'}
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="form-submit-button">
                        Submit Application
                    </button>
                </form>

                {/* Linguist Info Block (Right-hand column on desktop) */}
                <div className="linguist-info-block">
                    <div className="info-detail">
                        <FaHeadset className="info-icon" />
                        <h4 className="info-title">Why Partner With Us?</h4>
                        <p className="info-text">
                            We offer competitive rates, flexible scheduling, and dedicated professional development for certified linguists.
                        </p>
                    </div>
                    <div className="info-detail">
                        <FaGlobe className="info-icon" />
                        <h4 className="info-title">Our Requirements</h4>
                        <p className="info-text">
                            Must have professional certification (e.g., CMI, ATA) and verifiable experience in healthcare, legal, or corporate settings.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}