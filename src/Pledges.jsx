import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users } from "lucide-react"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function Pledges() {
  return (
    <motion.div
      className="pledges-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <header className="pledges-header">
        <motion.h1 variants={itemVariants}>Company Commitments & Pledges</motion.h1>
        <motion.p variants={itemVariants} className="lead-text">
          At <strong>United Translation Services LLC</strong>, we believe language access unites people and promotes equality.
        </motion.p>
      </header>

      <div className="pledges-grid">
        {/* Pledge 1 */}
        <motion.div className="pledge-card" variants={itemVariants}>
          <div className="icon-wrapper"><Users size={32} /></div>
          <h2>Diversity, Equity & Inclusion</h2>
          <p>We embrace all languages and cultures, ensuring an inclusive environment for interpreters and clients worldwide.</p>
          <ul className="pledge-list">
            <li>Equal access to global opportunities</li>
            <li>Unbiased client engagement</li>
            <li>Cultural awareness training</li>
          </ul>
          <div className="pledge-footer">
            <span>Aligned with:</span>
            <div className="links">
              <a href="https://www.lep.gov/guidance-conference-materials" target="_blank" rel="noopener noreferrer">LEP.gov</a>
              <a href="https://www.hhs.gov/civil-rights/for-individuals/section-1557/index.html" target="_blank" rel="noopener noreferrer">Section 1557</a>
            </div>
          </div>
        </motion.div>

        {/* Pledge 2 */}
        <motion.div className="pledge-card" variants={itemVariants}>
          <div className="icon-wrapper"><Globe size={32} /></div>
          <h2>Social Impact Statement</h2>
          <p>Empowering communities through professional interpretation in healthcare, legal, and community settings.</p>
          <ul className="pledge-list">
            <li>Support for underserved communities</li>
            <li>Nonprofit partnerships</li>
            <li>Advocacy for language rights</li>
          </ul>
          <div className="pledge-footer">
            <p className="italic">Connecting the world through equitable communication.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}