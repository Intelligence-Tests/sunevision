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

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <ImageSlider/>
        <Progress/>
        <Pricing />
        <Roadmap />
        <WorkingProcess/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;