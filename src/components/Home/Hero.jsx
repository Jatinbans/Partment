// import { motion } from 'framer-motion';
// import React from 'react';
// import '../styles/Hero.css';

// const Hero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section className="hero-section">
//       <div className="hero-background">
//         <div className="hero-blur-1" />
//         <div className="hero-blur-2" />
//       </div>

//       <div className="hero-container">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="hero-content"
//         >
//           <motion.h1 variants={itemVariants} className="hero-title">
//             Property Management
//             <span style={{display: 'block', color: '#BFDBFE'}}>Made Simple</span>
//           </motion.h1>

//           <motion.p variants={itemVariants} className="hero-subtitle">
//             Streamline your property management with our all-in-one solution
//           </motion.p>

//           <motion.div variants={itemVariants} className="button-group">
//             <button className="primary-button">Get Started Free</button>
//             <button className="secondary-button">Watch Demo</button>
//           </motion.div>

      
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { motion } from 'framer-motion';
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.div className="hero-text-container" variants={itemVariants}>
            <h1 className="hero-title">
              Find Your Dream
              <span className="gradient-text">Property</span>
            </h1>
            <p className="hero-subtitle">
              Discover luxury homes, premium apartments, and exclusive real estate opportunities across prime locations
            </p>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Enter location, property type, or keywords..."
                className="search-input"
              />
              <button className="search-button">
                Search
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Properties</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Cities</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

