import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Pricing from "./components/Pricing";
import Progress from "./components/Progress";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import WorkingProcess from "./components/WorkingProcess";
import "./index.css"; // Add your custom CSS file for additional dark/light theme styles

const App = () => {
  // Manage theme state (default to light theme)
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Update theme on toggle and store preference in localStorage
  useEffect(() => {
    document.documentElement.className = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={`pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Pass the theme and toggle function to Header */}
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
  );
};

export default App;

// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import ImageSlider from "./components/ImageSlider";
// import Pricing from "./components/Pricing";
// import Progress from "./components/Progress";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";
// import WorkingProcess from "./components/WorkingProcess";

// const App = () => {
//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Header />
//         <Hero />
//         <Benefits />
//         <Collaboration />
//         <Services />
//         <ImageSlider/>
//         <Progress/>
//         <Pricing />
//         <Roadmap />
//         <WorkingProcess/>
//         <Footer />
//       </div>

//       <ButtonGradient />
//     </>
//   );
// };

// export default App;