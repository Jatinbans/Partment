// // src/App.jsx
// import React from 'react';
// import Navbar from './components/Layout/Navbar.jsx';
// import Hero from './components/Home/Hero.jsx';
// import Features from './components/Home/Features.jsx';
// import Pricing from './components/Home/Pricing.jsx';
// import FAQ from './components/Home/FAQ.jsx';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <Features />
//       <Pricing />
//       <FAQ />
//     </div>
//   );
// }

// export default App;



// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar.jsx';
import Hero from './components/Home/Hero.jsx';
import Features from './components/Home/Features.jsx';
import PropertyList from './components/Home/PropertyList.jsx';
import PropertyDetail from './components/Home/PropertyDetail.jsx'; // Check this import path
import Pricing from './components/Home/Pricing.jsx';
import FAQ from './components/Home/FAQ.jsx';
import ContactUs from './components/Home/ContactUs.jsx';
import Footer from './components/Layout/Footer.jsx';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <PropertyList />
      <ContactUs />
      <Footer />
      {/* <Pricing /> */}
      {/* <FAQ /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
