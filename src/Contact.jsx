// src/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    // ONLY use your Formspree ID here (not the full URL)
    const [state, handleSubmit] = useForm("mrbdyloq"); 

    if (state.succeeded) {
        return (
            <motion.div
                className="page-container-contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', padding: '80px 24px' }}
            >
                <h2 className="contact-heading">Thank You!</h2>
                <p className="contact-subheading">
                    Your request has been submitted. We will get back to you shortly.
                </p>
            </motion.div>
        );
    }

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
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3 className="form-heading">Request a Consultation</h3>

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="form-input"
                            required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="form-input"
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Project Details</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="I need interpretation for..."
                            className="form-textarea"
                            required
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <button type="submit" className="form-submit-button" disabled={state.submitting}>
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
    <a href="tel:+12073767011" className="phone-link">
        (207)-376-7011
    </a>
</p>
                    </div>

                    <div className="info-detail">
                        <FaEnvelope className="info-icon" />
                        <p className="info-text">
                            <span className="info-label">Email</span>
                            contact@unitedtranslationsservices.com
                        </p>
                    </div>

                    <div className="info-hours">
                        <p className="info-label">Business Hours:</p>
                        <p>Monday – Friday, 9:00 AM – 6:00 PM EST</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
