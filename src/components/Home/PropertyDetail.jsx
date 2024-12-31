// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// function PropertyDetail() {
//   const { id } = useParams();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // This would typically come from an API or props
//   const property = {
//     id: 1,
//     title: "Luxury Villa",
//     location: "Dubai Marina",
//     price: "$1,200,000",
//     allImages: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlFW_nnlp0yS5Zuw-ZD9LG88z2ytTJjbg5w&s",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUP9bZa8Pb7jRO_xnYnCBtzDkfb5FM1ESquMhTKVVq96Vw3Xaa0d3lLSglilBe05osll0&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTpMlug0zrdNgnK9H0amBSz_oIvHe6PRVTz0uVlVdXRRYd5JmFQmjZwKNmTvzNEzUCMQ&usqp=CAU",
//       "https://dynamic.realestateindia.com/proj_images/project28681/proj_img-28681_1-200x200.jpg"
//     ],
//     details: {
//       bedrooms: 4,
//       bathrooms: 3,
//       area: "3,500 sq ft",
//       description: "Luxurious villa with stunning marina views...",
//       features: [
//         "Private Pool",
//         "Garden",
//         "Smart Home System",
//         "24/7 Security"
//       ]
//     }
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === property.allImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? property.allImages.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="property-detail-section">
//       <div className="property-detail-container">
//         {/* Carousel */}
//         <div className="carousel-container">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={currentImageIndex}
//               src={property.allImages[currentImageIndex]}
//               alt={`Property view ${currentImageIndex + 1}`}
//               className="carousel-image"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.3 }}
//             />
//           </AnimatePresence>
//           <button className="carousel-button prev" onClick={prevImage}>←</button>
//           <button className="carousel-button next" onClick={nextImage}>→</button>
//         </div>

//         {/* Property Details */}
//         <div className="property-detail-info">
//           <h1 className="property-detail-title">{property.title}</h1>
//           <p className="property-detail-location">{property.location}</p>
//           <p className="property-detail-price">{property.price}</p>
          
//           <div className="property-detail-specs">
//             <div className="spec-item">
//               <span className="spec-label">Bedrooms</span>
//               <span className="spec-value">{property.details.bedrooms}</span>
//             </div>
//             <div className="spec-item">
//               <span className="spec-label">Bathrooms</span>
//               <span className="spec-value">{property.details.bathrooms}</span>
//             </div>
//             <div className="spec-item">
//               <span className="spec-label">Area</span>
//               <span className="spec-value">{property.details.area}</span>
//             </div>
//           </div>

//           <p className="property-detail-description">
//             {property.details.description}
//           </p>

//           <div className="property-features">
//             <h2>Features</h2>
//             <ul className="features-list">
//               {property.details.features.map((feature, index) => (
//                 <li key={index} className="feature-item">{feature}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PropertyDetail;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/PropertyDetail.css'
import villaImage from '../../images/Luxary1.jpg';
import villaImage2 from '../../images/Luxary2.jpg';
import villaImage3 from '../../images/Luxary3.jpg';
import villaImage4 from '../../images/Luxary4.jpg';

function PropertyDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define all properties data
  const propertiesData = {
    1: {
      id: 1,
      title: "Luxury Villa",
      location: "Dubai Marina",
      price: "$1,200,000",
      allImages: [villaImage, villaImage2, villaImage3, villaImage4],
      details: {
        bedrooms: 4,
        bathrooms: 3,
        area: "3,500 sq ft",
        description: "Luxurious villa with stunning marina views and modern amenities...",
        features: [
          "Private Pool",
          "Garden",
          "Smart Home System",
          "24/7 Security"
        ]
      }
    },
    2: {
      id: 2,
      title: "Modern Apartment",
      location: "Downtown Dubai",
      price: "$800,000",
      allImages: [
        "https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8=",
        // Add more images for this property
      ],
      details: {
        bedrooms: 2,
        bathrooms: 2,
        area: "1,200 sq ft",
        description: "Contemporary apartment in the heart of downtown...",
        features: [
          "Modern Kitchen",
          "City Views",
          "Gym Access",
          "Parking Space"
        ]
      }
    },
    3: {
      id: 3,
      title: "Beachfront Condo",
      location: "Palm Jumeirah",
      price: "$1,500,000",
      allImages: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403769050.jpg?k=8272ac20d5aa93c4932d0d31fe1e37dd3b90bcde08d90d3a5951d95a5edd569d&o=&hp=1",
        // Add more images for this property
      ],
      details: {
        bedrooms: 3,
        bathrooms: 2,
        area: "2,000 sq ft",
        description: "Stunning beachfront condo with panoramic ocean views...",
        features: [
          "Beach Access",
          "Private Balcony",
          "Pool",
          "Concierge Service"
        ]
      }
    },
    4: {
      id: 4,
      title: "Penthouse Suite",
      location: "Business Bay",
      price: "$2,000,000",
      allImages: [
        "https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/30/full/20230930182958.jpg",
        // Add more images for this property
      ],
      details: {
        bedrooms: 5,
        bathrooms: 4,
        area: "4,000 sq ft",
        description: "Luxurious penthouse with city skyline views...",
        features: [
          "Private Elevator",
          "Rooftop Terrace",
          "Wine Cellar",
          "Smart Home System"
        ]
      }
    }
  };

  // Get the specific property based on ID
  const property = propertiesData[id];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.allImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.allImages.length - 1 : prev - 1
    );
  };

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <section className="property-detail-section">
      <div className="property-detail-container">
        <div className="property-image-section">
          {/* Main Carousel */}
          <div className="main-carousel">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={property.allImages[currentImageIndex]}
                alt={`Property view ${currentImageIndex + 1}`}
                className="main-carousel-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <button className="carousel-button prev" onClick={prevImage}>←</button>
            <button className="carousel-button next" onClick={nextImage}>→</button>
          </div>
          
          {/* Thumbnail Images */}
          <div className="thumbnail-container">
            {property.allImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="property-info-section">
          <div className="property-header">
            <h1 className="property-title">{property.title}</h1>
            <p className="property-location">{property.location}</p>
            <p className="property-price">{property.price}</p>
          </div>

          <div className="property-specs">
            <div className="spec-item">
              <span className="spec-icon">🛏️</span>
              <span className="spec-value">{property.details.bedrooms} Bedrooms</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">🚿</span>
              <span className="spec-value">{property.details.bathrooms} Bathrooms</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">📏</span>
              <span className="spec-value">{property.details.area}</span>
            </div>
          </div>

          <div className="property-description">
            <h2>Description</h2>
            <p>{property.details.description}</p>
          </div>

          <div className="property-amenities">
            <h2>Amenities</h2>
            <div className="amenities-grid">
              {property.details.features.map((feature, index) => (
                <div key={index} className="amenity-item">
                  <span className="amenity-icon">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetail;
