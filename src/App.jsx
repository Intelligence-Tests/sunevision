import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import Pricing from "./components/Pricing";
import Progress from "./components/Progress";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import WorkingProcess from "./components/WorkingProcess";
import ExploreOne from "./components/Explore1";
import ExploreTwo from "./components/Explore2";
import ScrollToTop from "./components/ScrollToTop";
import ExploreThree from "./components/Explore3";
import ExploreFour from "./components/Explore4";
import ExploreFive from "./components/Explore5";
import ExploreSix from "./components/Explore6";
import AboutUs from "./components/AboutUs";
import ProjectOne from "./components/Project1";

const MainPage = () => (
  <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <ScrollToTop/>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <ImageSlider />
      <Progress />
      <Pricing />
      <Roadmap />
      <WorkingProcess />
      <Footer />
    </div>
    <ButtonGradient />
  </>
);

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} /> {/* Main page route */}
    <Route path="/about" element={<AboutUs />} />
    <Route path="/exploremoreinterior" element={<ExploreOne />} /> {/* Explore page route */}
    <Route path="/exploremoreexterior" element={<ExploreTwo />} />
    <Route path="/exploremore3ddesign" element={<ExploreThree />} />
    <Route path="/exploremoreresidential" element={<ExploreFour />} />
    <Route path="/exploremorekitchen" element={<ExploreFive />} />
    <Route path="/exploremorecustom" element={<ExploreSix />} />
    <Route path="/project1" element={<ProjectOne />} />

  </Routes>
);

export default App;




// import React, { useEffect, useState } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
// import ImageSlider from "./components/ImageSlider";
// import Pricing from "./components/Pricing";
// import Progress from "./components/Progress";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";
// import WorkingProcess from "./components/WorkingProcess";
// import "./index.css"; // Add your custom CSS file for additional dark/light theme styles

// const App = () => {
//   // Manage theme state (default to light theme)
//   const [isDarkMode, setIsDarkMode] = useState(
//     () => localStorage.getItem("theme") === "dark"
//   );

//   // Update theme on toggle and store preference in localStorage
//   useEffect(() => {
//     document.documentElement.className = isDarkMode ? "dark" : "light";
//     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//   }, [isDarkMode]);

//   return (
//     <div className={`pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ${isDarkMode ? 'dark' : 'light'}`}>
//       {/* Pass the theme and toggle function to Header */}
//       <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//       <Hero />
//       <Benefits />
//       <Collaboration />
//       <Services />
//       <ImageSlider />
//       <Progress />
//       <Pricing />
//       <Roadmap />
//       <WorkingProcess />
//       <Footer />
//     </div>
//   );
// };

// export default App;