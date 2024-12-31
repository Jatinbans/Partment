// // import { motion } from 'framer-motion';
// // import React from 'react';

// // function Features() {
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.2 }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.5 }
// //     }
// //   };

// //   const features = [
// //     {
// //       title: "Property Management",
// //       description: "Efficiently manage all your properties in one place.",
// //       icon: "🏠"
// //     },
// //     {
// //       title: "Tenant Portal",
// //       description: "Give tenants access to a dedicated portal for payments.",
// //       icon: "👥"
// //     },
// //     {
// //       title: "Financial Tracking",
// //       description: "Keep track of rent payments and expenses.",
// //       icon: "💰"
// //     },
// //     {
// //       title: "Maintenance Management",
// //       description: "Handle maintenance requests and track repairs.",
// //       icon: "🔧"
// //     }
// //   ];

// //   return (
// //     <section className="py-20 bg-gray-50">
// //       <motion.div
// //         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
// //         variants={containerVariants}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true }}
// //       >
// //         <motion.div variants={itemVariants} className="text-center">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             Everything you need to manage your properties
// //           </h2>
// //           <p className="text-xl text-gray-600 mb-16">
// //             Streamline your property management with our comprehensive tools
// //           </p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {features.map((feature, index) => (
// //             <motion.div
// //               key={index}
// //               variants={itemVariants}
// //               className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
// //             >
// //               <div className="text-4xl mb-4">{feature.icon}</div>
// //               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
// //               <p className="text-gray-600">{feature.description}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // }

// // export default Features;

// import { motion } from 'framer-motion';
// import React from 'react';

// function Features() {
//   const features = [
//     {
//       title: "Investment Calculator",
//       description: "Calculate your expected returns and analyze investment opportunities with our advanced calculator tool.",
//       icon: "📊"
//     },
//     {
//       title: "Property Details",
//       description: "Access comprehensive property information, including floor plans, amenities, and neighborhood insights.",
//       icon: "🏠"
//     },
//     {
//       title: "Digital Contracts",
//       description: "Sign and manage contracts digitally with our secure, paperless documentation system.",
//       icon: "📝"
//     },
//     {
//       title: "Investment Portfolio",
//       description: "Track and manage your real estate investments in one centralized dashboard.",
//       icon: "💼"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0
//     }
//   };

//   return (
//     <section className="bg-white py-24">
//       <motion.div 
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Invest in Real Estate, Simplified
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Join thousands of investors who trust our platform for their real estate investments
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
//             >
//               <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
//                 <span className="text-2xl">{feature.icon}</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default Features;


// import { motion } from 'framer-motion';
// import React from 'react';


// import propertyImage from '../../images/PropertyImage.jpg';
// import calculatorImage from '../../images/investmentCalculator.jpg';
// import contractImage from '../../images/DigitalContract.png';
// import portfolioImage from '../../images/investmentPortfolio.jpg';



// function Features() {
//   const features = [
//     {
//       title: "Investment Calculator",
//       description: "Calculate your expected returns and analyze investment opportunities with our advanced calculator tool.",
//       icon: "📊",
//       image: calculatorImage
//     },
//     {
//       title: "Property Details",
//       description: "Access comprehensive property information, including floor plans, amenities, and neighborhood insights.",
//       icon: "🏠",
//       image: propertyImage
//     },
//     {
//       title: "Digital Contracts",
//       description: "Sign and manage contracts digitally with our secure, paperless documentation system.",
//       icon: "📝",
//       image: contractImage
//     },
//     {
//       title: "Investment Portfolio",
//       description: "Track and manage your real estate investments in one centralized dashboard.",
//       icon: "💼",
//       image: portfolioImage
//     }
//   ];

//   return (
//     <section className="features-section">
//       <div className="features-container">
//         <h2 className="features-title">
//           Invest in Real Estate, Simplified
//         </h2>
//         <p className="features-subtitle">
//           Join thousands of investors who trust our platform for their real estate investments
//         </p>

//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <div key={index} className="feature-card">
//               <div className="feature-card-front">
//                 {/* Use the image */}
//                 <img 
//                   src={feature.image} 
//                   alt={feature.title}
//                   className="feature-image"
//                 />
//                 <h3 className="feature-card-title">{feature.title}</h3>
//               </div>
//               <div className="feature-card-back">
//                 <p className="feature-card-description">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;




// import { motion } from 'framer-motion';
// import React from 'react';

// import propertyImage from '../../images/PropertyImage.jpg';
// import calculatorImage from '../../images/investmentCalculator.jpg';
// import contractImage from '../../images/DigitalContract.png';
// import portfolioImage from '../../images/investmentPortfolio.jpg';

// function Features() {
//   const features = [
//     {
//       title: "Investment Calculator",
//       description: "Calculate your expected returns and analyze investment opportunities with our advanced calculator tool.",
//       icon: "📊",
//       image: calculatorImage
//     },
//     {
//       title: "Property Details",
//       description: "Access comprehensive property information, including floor plans, amenities, and neighborhood insights.",
//       icon: "🏠",
//       image: propertyImage
//     },
//     {
//       title: "Digital Contracts",
//       description: "Sign and manage contracts digitally with our secure, paperless documentation system.",
//       icon: "📝",
//       image: contractImage
//     },
//     {
//       title: "Investment Portfolio",
//       description: "Track and manage your real estate investments in one centralized dashboard.",
//       icon: "💼",
//       image: portfolioImage
//     }
//   ];

//   return (
//     <section className="features-section">
//       <div className="features-container">
//         <h2 className="features-title">
//           Invest in Real Estate, Simplified
//         </h2>
//         <p className="features-subtitle">
//           Join thousands of investors who trust our platform for their real estate investments
//         </p>

//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <div key={index} className="feature-card">
//               <div className="feature-card-front">
//                 <img 
//                   src={feature.image} 
//                   alt={feature.title}
//                   className="feature-image"
//                 />
//                 <div className="feature-icon">{feature.icon}</div>
//                 <h3 className="feature-card-title">{feature.title}</h3>
//               </div>
//               <div className="feature-card-back">
//                 <p className="feature-card-description">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;



import { motion } from 'framer-motion';
import React from 'react';
import '../styles/Feature.css'

import propertyImage from '../../images/PropertyImage.jpg';
import calculatorImage from '../../images/investmentCalculator.jpg';
import contractImage from '../../images/DigitalContract.png';
import portfolioImage from '../../images/investmentPortfolio.jpg';

function Features() {
  const features = [
    {
      title: "Property Management",
      description: "Track all property details, manage documents, and monitor key dates from a centralized dashboard. Streamline your property operations efficiently.",
      icon: "🏠",
      image: propertyImage
    },
    {
      title: "Tenant Portal",
      description: "Provide a seamless experience for tenants with an easy-to-use portal for rent payments, maintenance requests, and direct communication.",
      icon: "👥",
      image: calculatorImage
    },
    {
      title: "Financial Tracking",
      description: "Monitor rent collections, manage expenses, and generate comprehensive financial reports to optimize your property's performance.",
      icon: "💰",
      image: contractImage
    },
    {
      title: "Maintenance Management",
      description: "Efficiently handle maintenance requests, coordinate repairs, and maintain detailed service records for all your properties.",
      icon: "🔧",
      image: portfolioImage
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h1 className="features-title">Our Key Features</h1>
        <p className="features-subtitle">
          Discover the tools that make property management effortless
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-front">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="feature-image"
                />
                <h3 className="feature-card-title">{feature.title}</h3>
              </div>
              <div className="feature-card-back">
                <p className="feature-card-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
