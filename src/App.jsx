import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Icons needed across the application
import { FaHeadset, FaFileAlt, FaGlobe, FaCertificate, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; 
// Removed unused icons for cleaner output
import LanguageServices from './LanguageServices';
import Interpretation from './Interpretation';     
import Translation from './Translation';           
import Localization from './Localization';         
import About from './About';      // <-- Must be imported now
import Contact from './Contact';    // <-- Must be imported now
import BecomeLinguist from './BecomeLinguist';
import Industries from './Industries';
import Resources from './Resources';
import GetSupport from './GetSupport';
import Pledges from './Pledges';
// --- Framer Motion Variants (Defined locally) ---
// --- Framer Motion Variants (Defined locally) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};


/* -------------------- NavLinkWithDropdown (MODIFIED) -------------------- */
// Now accepts 'onLinkClick' and injects it into children
const NavLinkWithDropdown = ({ title, children, link, onLinkClick }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        // Only handle accordion behavior on smaller screens
        if (window.innerWidth < 768) {
             e.preventDefault();
             setIsDropdownOpen(prev => !prev);
        }
    };

    const handleParentLinkClick = (e) => {
        toggleDropdown(e); 
        
        // Call the global handler only if it's a desktop click (link navigation)
        if (window.innerWidth >= 768) {
            if (link && link !== '#' && onLinkClick) {
                onLinkClick();
            }
        }
    }

    // Function to clone and add the handler to dropdown items (children)
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                // Combine existing onClick with the global handler
                onClick: (e) => {
                    if (child.props.onClick) {
                        child.props.onClick(e);
                    }
                    // Call the global handler to close menu and scroll to top
                    if (onLinkClick) {
                        onLinkClick();
                    }
                }
            });
        }
        return child;
    });

    return (
        <div className="dropdown-container">
            <Link 
                to={link || '#'} 
                className="dropdown-btn"
                onClick={handleParentLinkClick} // Use custom handler
                aria-expanded={isDropdownOpen}
            >
                {title} <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} />
            </Link>
            {/* Conditional class based on state (for mobile accordion) */}
            <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                {/* Render children with injected onClick handler */}
                {childrenWithProps}
            </div>
        </div>
    );
};


/* -------------------- Navbar (MODIFIED) -------------------- */
// All links now use the handleNavClick handler via the onClick prop.

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
  // Universal Handler for Nav Links: Closes menu AND scrolls to top
  const handleNavClick = () => {
    if (isMenuOpen) {
          setIsMenuOpen(false);
      }
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };
      
  const navClass = `nav-links-container ${isMenuOpen ? 'open' : ''}`;

  return (
    <nav className="main-nav-wrapper">
      {/* Top Utility Bar - Handlers added */}
      <div className="utility-bar">
        <div className="utility-content">
          <Link to="/support" className="utility-link" onClick={handleNavClick}>Get Support</Link>
          <Link to="/become-linguist" className="utility-link" onClick={handleNavClick}>Become a Contract Linguist</Link>
        </div>
      </div>
      
      {/* Main Navigation Bar */}
      <div className="main-nav-content">
        
        {/* Logo Area - Handler added */}
        <Link to="/" className="logo-link" onClick={handleNavClick}>
            {/* <div className="logo-square">
                <span className="logo-text-white"> UTS</span>
            </div> */}
            <span className="logo-title">
                UNITED TRANSLATIONS SERVICES <span className='logo-subtitle'></span>
            </span>
        </Link>
        
        {/* 1. Mobile Menu Toggle Button */}
        <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
        >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 2. Navigation Links Container (Toggled by state) */}
        <div className={navClass} id="mobile-menu">
            
            {/* onLinkClick passed to dropdowns */}
            <NavLinkWithDropdown 
                title="Language Services" 
                link="/services" 
                onLinkClick={handleNavClick}
            >
                {/* Child links will now receive the handler via cloneElement */}
                <Link to="/interpretation" className="dropdown-item">Interpretation</Link>
                <Link to="/translation" className="dropdown-item">Translation</Link>
                <Link to="/localization" className="dropdown-item">Localization</Link>
            </NavLinkWithDropdown>
            
            <NavLinkWithDropdown 
                title="Industries" 
                link="/industries" 
                onLinkClick={handleNavClick}
            >
                <Link to="/industries" className="dropdown-item">Healthcare</Link>
                <Link to="/industries" className="dropdown-item">Legal</Link>
                <Link to="/industries" className="dropdown-item" >Corporate</Link>
            </NavLinkWithDropdown>

            {/* Handlers added to standard nav links */}
            <Link to="/about" className="nav-link" onClick={handleNavClick}>Why Choose UTS</Link>
            {/* <Link to="/resources" className="nav-link" onClick={handleNavClick}>Resources</Link> */}
            <Link to="/support" className="utility-link" onClick={handleNavClick}>Get Support</Link>
            <Link to="/become-linguist" className="utility-link" onClick={handleNavClick}>Become a Contract Linguist</Link>
            
            {/* Request a Quote CTA - Handler added */}
            <Link 
              to="/contact" 
              className="cta-button"
              onClick={handleNavClick}
            >
              Request a Quote
            </Link>
        </div>
      </div>
    </nav>
  )
}

/* -------------------- Footer -------------------- */

function Footer() {
  // Define a simple scroll-to-top handler for the footer links
  const handleFooterClick = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="footer-title">United Translations Services Services LLC</p>
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved. | Your partner in global communication excellence.</p>
        <div className="footer-links-container">
          {/* Handlers added to footer links for scroll-to-top consistency */}
          <Link to="/" className="footer-link" onClick={handleFooterClick}>Home</Link>
          <Link to="/services" className="footer-link" onClick={handleFooterClick}>Services</Link>
          <Link to="/about" className="footer-link" onClick={handleFooterClick}>About</Link>
          <Link to="/pledges" className="footer-link">Our Commitments</Link>
          <Link to="/contact" className="footer-link" onClick={handleFooterClick}>Contact</Link>
        </div>
      </div>
    </footer>
  )
}

/* -------------------- Home Page -------------------- */

function Home() {
  // Define a simple scroll-to-top handler for the CTA buttons
  const handleCTAClick = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  const services = [
    {
      icon: <FaHeadset className="service-icon" />,
      title: 'Interpretation',
      desc: 'Certified interpreters for real-time communication.',
    },
    {
      icon: <FaFileAlt className="service-icon" />,
      title: 'Translation',
      desc: 'Accurate, certified document translation.',
    },
    {
      icon: <FaGlobe className="service-icon" />,
      title: 'Localization',
      desc: 'Adapting content to resonate globally.',
    },
    {
      icon: <FaCertificate className="service-icon" />,
      title: 'Certification',
      desc: 'Official document translation for USCIS.',
    },
  ];

  return (
    <motion.div
      className="page-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        variants={itemVariants}
        style={{
          backgroundImage: 'url(https://dummyimage.com/1600x900/4a4a4a/ffffff&text=Professional+Linguist+Working)',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subheading">Interpretation</p>
          <h1 className="hero-heading">
            Quality Professional Interpretation Services for Every Need
          </h1>
          <div className="hero-cta-group">
            {/* Handler added to Home CTA links */}
            <Link to="/contact" className="cta-button-primary" onClick={handleCTAClick}>
              Request a Quote
            </Link>
            <Link to="/contact" className="cta-button-secondary" onClick={handleCTAClick}>
              Contact Us
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="section-padding services-section">
        <h2 className="section-heading">Comprehensive Language Services</h2>
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, i) => (
            <motion.div key={i} className="service-card" variants={itemVariants}>
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
         <div style={{ textAlign: 'center', marginTop: '40px' }}>
            {/* Handler added to Home CTA link */}
            <Link to="/services" className="cta-button" onClick={handleCTAClick}>View All Services</Link>
         </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2 className="cta-banner-heading">Trusted by Leading Organizations Globally</h2>
          <p className="cta-banner-text">
            Partner with United Translations Services for reliable, high-quality language solutions tailored to your industry.
          </p>
          <Link
            to="/contact"
            className="cta-banner-button"
            onClick={handleCTAClick} // Handler added to CTA Banner link
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Testimonials (Hidden/Empty in original, keeping structure) */}
      <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
      </motion.div>
      
    </motion.div>
  )
}

/* -------------------- App Container (Routes) -------------------- */

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Language Service Routes */}
        <Route path="/services" element={<LanguageServices />} /> 
        <Route path="/interpretation" element={<Interpretation />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/localization" element={<Localization />} />
        <Route path="/pledges" element={<Pledges />} />

        {/* Core Nav Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Utility/Placeholder Routes */}
        <Route path="/industries" element={<Industries />} /> 
        <Route path="/resources" element={<Resources />} /> 
        <Route path="/support" element={<GetSupport />} />
        <Route path="/become-linguist" element={<BecomeLinguist />} />
        {/* <Link to="/pledges" className="footer-link">Our Commitments</Link> */}
      </Routes>
      <Footer />
    </Router>
  )
}