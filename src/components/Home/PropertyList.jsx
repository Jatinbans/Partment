// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import '../styles/PropertyList.css'

// function PropertyList() {
//   const navigate = useNavigate();
  
//   const properties = [
//     {
//       id: 1,
//       title: "Luxury Villa",
//       location: "Dubai Marina",
//       price: "$1,200,000",
//       mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlFW_nnlp0yS5Zuw-ZD9LG88z2ytTJjbg5w&s",
//       allImages: [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlFW_nnlp0yS5Zuw-ZD9LG88z2ytTJjbg5w&s",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUP9bZa8Pb7jRO_xnYnCBtzDkfb5FM1ESquMhTKVVq96Vw3Xaa0d3lLSglilBe05osll0&usqp=CAU",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTpMlug0zrdNgnK9H0amBSz_oIvHe6PRVTz0uVlVdXRRYd5JmFQmjZwKNmTvzNEzUCMQ&usqp=CAU",
//         "https://dynamic.realestateindia.com/proj_images/project28681/proj_img-28681_1-200x200.jpg"
//       ],
//       details: {
//         bedrooms: 4,
//         bathrooms: 3,
//         area: "3,500 sq ft",
//         description: "Luxurious villa with stunning marina views..."
//       }
//     },
//     {
//       id: 2,
//       title: "Modern Apartment",
//       location: "Downtown Dubai",
//       price: "$800,000",
//       mainImage: "/propertyImages/apartment1-main.jpg",
//       allImages: [
//         "/propertyImages/apartment1-1.jpg",
//         "/propertyImages/apartment1-2.jpg",
//         "/propertyImages/apartment1-3.jpg"
//       ],
//       details: {
//         bedrooms: 2,
//         bathrooms: 2,
//         area: "1,200 sq ft",
//         description: "Contemporary apartment in the heart of downtown..."
//       }
//     },
//     // Add more properties as needed
//   ];

//   return (
//     <section className="property-list-section">
//       <div className="property-list-container">
//         <h2 className="property-list-title">Featured Properties</h2>
//         <p className="property-list-subtitle">Discover our exclusive selection of prime properties</p>
        
//         <div className="property-grid">
//           {properties.map((property) => (
//             <motion.div
//               key={property.id}
//               className="property-card"
//               whileHover={{ y: -10 }}
//               onClick={() => navigate(`/property/${property.id}`)}
//             >
//               <div className="property-image-container">
//                 <img 
//                   src={property.mainImage} 
//                   alt={property.title} 
//                   className="property-image"
//                 />
//               </div>
//               <div className="property-info">
//                 <h3 className="property-title">{property.title}</h3>
//                 <p className="property-location">{property.location}</p>
//                 <p className="property-price">{property.price}</p>
//                 <div className="property-details">
//                   <span>{property.details.bedrooms} beds</span>
//                   <span>{property.details.bathrooms} baths</span>
//                   <span>{property.details.area}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PropertyList;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/PropertyList.css';
import villaImage from '../../images/Luxary1.jpg';
import villaImage2 from '../../images/Luxary2.jpg';
import villaImage3 from '../../images/Luxary3.jpg';
import villaImage4 from '../../images/Luxary4.jpg';

function PropertyList() {
  const navigate = useNavigate();
  
  const properties = [
    {
      id: 1,
      title: "Luxury Villa",
      location: "Dubai Marina",
      price: "₹ 2.5CR",
      mainImage: villaImage,
      allImages: [
        villaImage,
        villaImage2,
        villaImage3,
        villaImage4
      ],
      details: {
        bedrooms: 4,
        bathrooms: 3,
        area: "3,500 sq ft",
        description: "Luxurious villa with stunning marina views..."
      }
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Downtown Dubai",
      price: "₹ 6CR",
      mainImage: "https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8=",
      allImages: [
        "/propertyImages/apartment1-1.jpg",
        "/propertyImages/apartment1-2.jpg",
        "/propertyImages/apartment1-3.jpg"
      ],
      details: {
        bedrooms: 2,
        bathrooms: 2,
        area: "1,200 sq ft",
        description: "Contemporary apartment in the heart of downtown..."
      }
    },
    {
      id: 3,
      title: "Beachfront Condo",
      location: "Palm Jumeirah",
      price: "₹ 4.8CR",
      mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403769050.jpg?k=8272ac20d5aa93c4932d0d31fe1e37dd3b90bcde08d90d3a5951d95a5edd569d&o=&hp=1",
      allImages: [
        "/propertyImages/condo1-1.jpg",
        "/propertyImages/condo1-2.jpg",
        "/propertyImages/condo1-3.jpg"
      ],
      details: {
        bedrooms: 3,
        bathrooms: 2,
        area: "2,000 sq ft",
        description: "Stunning beachfront condo with panoramic ocean views..."
      }
    },
    {
      id: 4,
      title: "Penthouse Suite",
      location: "Business Bay",
      price: "₹ 15CR",
      mainImage: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/30/full/20230930182958.jpg",
      allImages: [
        "/propertyImages/penthouse1-1.jpg",
        "/propertyImages/penthouse1-2.jpg",
        "/propertyImages/penthouse1-3.jpg"
      ],
      details: {
        bedrooms: 5,
        bathrooms: 4,
        area: "4,000 sq ft",
        description: "Luxurious penthouse with city skyline views..."
      }
    }
  ];

  return (
    <section className="property-list-section">
      <div className="property-list-container">
        <h2 className="property-list-title">Featured Properties</h2>
        <p className="property-list-subtitle">Discover our exclusive selection of prime properties</p>
        
        <div className="property-grid">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              className="property-card"
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/property/${property.id}`)}
            >
              <div className="property-image-container">
                <img 
                  src={property.mainImage} 
                  alt={property.title} 
                  className="property-image"
                />
              </div>
              <div className="property-info">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">{property.location}</p>
                <p className="property-price">{property.price}</p>
                <div className="property-details">
                  <span>{property.details.bedrooms} beds</span>
                  <span>{property.details.bathrooms} baths</span>
                  <span>{property.details.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyList;
