// src/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <motion.div
            className="page-container-contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="contact-heading">Let's Connect</h2>
            <p className="contact-subheading">
                Reach out for quotes, partnership inquiries, or to join our interpreter network. We promise a quick response.
            </p>

            <div className="contact-grid">
                <form className="contact-form">
                    <h3 className="form-heading">Request a Consultation</h3>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input id="name" type="text" placeholder="Your Name" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input id="email" type="email" placeholder="Your Email" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Project Details</label>
                        <textarea id="message" placeholder="I need interpretation for..." className="form-textarea" />
                    </div>
                    <button type="submit" className="form-submit-button">
                        Submit Request
                    </button>
                </form>

                <div className="contact-info-block">
                    <h3 className="info-heading">Our Information</h3>

                    <div className="info-detail">
                        <FaMapMarkerAlt className="info-icon" />
                        <p className="info-text">
                            <span className="info-label">Office Location</span>
                            393 Center St, Auburn, ME 04210
                        </p>
                    </div>

                    <div className="info-detail">
                        <FaPhone className="info-icon" />
                        <p className="info-text">
                            <span className="info-label">Phone Support</span>
                            (207) 555-1234
                        </p>
                    </div>

                    <div className="info-detail">
                        <FaEnvelope className="info-icon" />
                        <p className="info-text">
                            <span className="info-label">Email</span>
                            contact@unitedtranslations.com
                        </p>
                    </div>

                    <div className='info-hours'>
                        <p className="info-label">Business Hours:</p>
                        <p>Monday – Friday, 9:00 AM – 6:00 PM EST</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}