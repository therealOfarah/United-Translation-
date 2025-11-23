// src/BecomeLinguist.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaGlobe, FaHeadset } from 'react-icons/fa';

export default function BecomeLinguist() {
    // ONLY use your Formspree ID here, not the full URL
    const [state, handleSubmit] = useForm("mrbdyloq"); 

    if (state.succeeded) {
        return (
            <motion.div
                className="page-container-linguist"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', padding: '100px 24px' }}
            >
                <FaCheckCircle style={{ color: '#1e3a8a', fontSize: '60px', marginBottom: '20px' }} />
                <h2 className="contact-heading" style={{ color: '#1e3a8a' }}>
                    Application Submitted Successfully!
                </h2>
                <p className="contact-subheading">
                    Thank you for your interest in joining the United Translations Services network. We will review your application and contact you shortly.
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

            <div className="application-form-wrapper section-padding" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <form className="linguist-form" onSubmit={handleSubmit}>
                    <h3 className="form-heading">Your Professional Application</h3>

                    {/* Full Name */}
                    <div className="form-group">
                        <label htmlFor="full-name" className="form-label">Full Name</label>
                        <input
                            id="full-name"
                            type="text"
                            name="Full Name"
                            placeholder="First and Last Name"
                            className="form-input"
                            required
                        />
                        <ValidationError prefix="Full Name" field="Full Name" errors={state.errors} />
                    </div>

                    {/* Email Address */}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="Email"
                            placeholder="Your Professional Email"
                            className="form-input"
                            required
                        />
                        <ValidationError prefix="Email" field="Email" errors={state.errors} />
                    </div>

                    {/* Language and Service Row */}
                    <div className="form-row">
                        <div className="form-group" style={{ flex: 1 }}>
                            <label htmlFor="language" className="form-label">Primary Language (Non-English)</label>
                            <input
                                id="language"
                                name="Language"
                                type="text"
                                placeholder="e.g., Spanish, Arabic, Mandarin"
                                className="form-input"
                                required
                            />
                            <ValidationError prefix="Language" field="Language" errors={state.errors} />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label htmlFor="service" className="form-label">Primary Service</label>
                            <select id="service" name="Service" className="form-input" required>
                                <option value="">Select Service Type</option>
                                <option value="interpretation">Interpretation</option>
                                <option value="translation">Translation</option>
                                <option value="both">Both</option>
                            </select>
                            <ValidationError prefix="Service" field="Service" errors={state.errors} />
                        </div>
                    </div>

                    <button type="submit" className="form-submit-button" disabled={state.submitting}>
                        Submit Application
                    </button>
                </form>

                {/* Linguist Info Block */}
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
