import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Icons needed across the application
import { FaHeadset, FaFileAlt, FaGlobe, FaCertificate, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; 
// Removed unused icons for cleaner output

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

// --- PLACEHOLDER COMPONENTS ---
// This ensures that all components required by the Routes exist.
const PlaceholderPage = ({ title }) => (
    <motion.div 
      className="page-container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
        <h1 style={{ fontSize: '2em', color: '#1e3a8a' }}>{title}</h1>
    </motion.div>
);

const LanguageServices = () => <PlaceholderPage title="Language Services Hub" />;
const Interpretation = () => <PlaceholderPage title="Interpretation Services" />;
const Translation = () => <PlaceholderPage title="Translation Services" />;
const Localization = () => <PlaceholderPage title="Localization Services" />;
const About = () => <PlaceholderPage title="Why Choose UT" />;
const Contact = () => <PlaceholderPage title="Contact Us / Request a Quote" />;
const BecomeLinguist = () => <PlaceholderPage title="Become a Contract Linguist" />;
const Industries = () => <PlaceholderPage title="Industries Served" />;
const Resources = () => <PlaceholderPage title="Resources Center" />;
const GetSupport = () => <PlaceholderPage title="Get Technical Support" />;


/* -------------------- Navbar Components -------------------- */

const NavLinkWithDropdown = ({ title, children, link }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        // Only handle accordion behavior on smaller screens
        if (window.innerWidth < 768) {
             e.preventDefault();
             setIsDropdownOpen(prev => !prev);
        }
    };

    return (
        <div className="dropdown-container">
            <Link 
                to={link || '#'} 
                className="dropdown-btn"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
            >
                {title} <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} />
            </Link>
            {/* Conditional class based on state (for mobile accordion) */}
            <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const navClass = `nav-links-container ${isMenuOpen ? 'open' : ''}`;

  return (
    <nav className="main-nav-wrapper">
      {/* Top Utility Bar */}
      <div className="utility-bar">
        <div className="utility-content">
          <Link to="/support" className="utility-link">Get Support</Link>
          <Link to="/become-linguist" className="utility-link">Become a Contract Linguist</Link>
        </div>
      </div>
      
      {/* Main Navigation Bar */}
      <div className="main-nav-content">
        
        {/* Logo Area */}
        <Link to="/" className="logo-link">
            <div className="logo-square">
                <span className="logo-text">L</span>
            </div>
            <span className="logo-title">
                UNITED <span className='logo-subtitle'>TRANSLATIONS SERVICES</span>
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
            
            <NavLinkWithDropdown title="Language Services" link="/services">
                <Link to="/interpretation" className="dropdown-item">Interpretation</Link>
                <Link to="/translation" className="dropdown-item">Translation</Link>
                <Link to="/localization" className="dropdown-item">Localization</Link>
            </NavLinkWithDropdown>
            
            <NavLinkWithDropdown title="Industries" link="/industries">
                <Link to="/industries" className="dropdown-item">Healthcare</Link>
                <Link to="/industries" className="dropdown-item">Legal</Link>
                <Link to="/industries" className="dropdown-item">Corporate</Link>
            </NavLinkWithDropdown>

            <Link to="/about" className="nav-link">Why Choose UT</Link>
            <Link to="/resources" className="nav-link">Resources</Link>

            {/* Request a Quote CTA */}
            <Link 
              to="/contact" 
              className="cta-button"
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
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="footer-title">United Translations Services Services LLC</p>
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved. | Your partner in global communication excellence.</p>
        <div className="footer-links-container">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

/* -------------------- Home Page -------------------- */

function Home() {
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
            <Link to="/contact" className="cta-button-primary">
              Request a Quote
            </Link>
            <Link to="/contact" className="cta-button-secondary">
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
            <Link to="/services" className="cta-button">View All Services</Link>
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
        
        {/* Core Nav Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Utility/Placeholder Routes */}
        <Route path="/industries" element={<Industries />} /> 
        <Route path="/resources" element={<Resources />} /> 
        <Route path="/support" element={<GetSupport />} />
        <Route path="/become-linguist" element={<BecomeLinguist />} />

      </Routes>
      <Footer />
    </Router>
  )
}