import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Icons needed across the application
import { FaHeadset, FaFileAlt, FaGlobe, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCertificate, FaHandshake, FaLightbulb, FaUsers, FaSearch, FaChevronDown } from 'react-icons/fa'; 

// 1. IMPORT ALL SEPARATE PAGE COMPONENTS
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
// Framer Motion Variants (Defined locally for simplicity)
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

/* -------------------- Placeholder Components (Defined here to avoid Import/Declaration errors) -------------------- */
// These are used for /industries, /resources, /support, and /become-linguist routes
const PlaceholderPage = ({ title }) => (
    <motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 style={{ textAlign: 'center', padding: '100px 0', fontSize: '3em', color: '#1e3a8a' }}>{title}</h1>
    </motion.div>
);

// const Industries = () => <PlaceholderPage title="Industries We Serve (Coming Soon)" />;
// const Resources = () => <PlaceholderPage title="Resources & Guides (Coming Soon)" />;
// const GetSupport = () => <PlaceholderPage title="Support Center" />;
// const BecomeLinguist = () => <PlaceholderPage title="Join Our Linguist Network" />;


/* -------------------- Navbar -------------------- */

const NavLinkWithDropdown = ({ title, children, link }) => (
    <div className="dropdown-container">
        <Link to={link || '#'} className="dropdown-btn">
            {title} <FaChevronDown className="dropdown-icon" />
        </Link>
        <div className="dropdown-menu">
            {children}
        </div>
    </div>
);

function Navbar() {
  return (
    <nav className="main-nav-wrapper">
      {/* Top Utility Bar */}
      <div className="utility-bar">
        <div className="utility-content">
          <FaSearch className="search-icon" />
          <span>207-376-7011</span>
          <Link to="/support" className="utility-link">Get Support</Link>
          <Link to="/become-linguist" className="utility-link">Become a Contract Linguist</Link>
          <a href="#" className="utility-link">Login</a>
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
        
        {/* Navigation Links */}
        <div className="nav-links-container">
            
            {/* Language Services Dropdown */}
            <NavLinkWithDropdown title="Language Services" link="/services">
                <Link to="/interpretation" className="dropdown-item">Interpretation</Link>
                <Link to="/translation" className="dropdown-item">Translation</Link>
                <Link to="/localization" className="dropdown-item">Localization</Link>
            </NavLinkWithDropdown>
            
            {/* Industries Dropdown */}
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

      {/* Services Section - Brief overview linking to the main Language Services hub */}
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

      {/* CTA Banner remains */}
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

      {/* Testimonials remain */}
      {/* <section className="section-padding testimonials-section"> */}
        {/* <h2 className="section-heading">What Our Clients Say</h2> */}
        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
            {/* Testimonial map... */}
        </motion.div>
      {/* </section> */}
      
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

        {/* Placeholder Routes (Now defined above) */}
        <Route path="/industries" element={<Industries />} /> 
        <Route path="/resources" element={<Resources />} /> 
        <Route path="/support" element={<GetSupport />} />
        <Route path="/become-linguist" element={<BecomeLinguist />} />

      </Routes>
      <Footer />
    </Router>
  )
}