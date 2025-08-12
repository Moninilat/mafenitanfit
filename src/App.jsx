import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/Contact/VideoPlayer/VideoPlayer";
import Plans from "./Components/Plans/Plans";
import TermsModal from "./Components/TermsModal/TermsModal";

const App = () => {
  const [playState, setPlayState] = React.useState(false);
const[showTerms, setShowTerms] = React.useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Choose The Best Program For You" title="My Programs" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Plans for everyone" title="Plans" />
        <Plans />
        <Title subTitle="Real stories, real results" title="Testimonials" />
        <Testimonials />
        <Title subTitle="Get in Touch" title="Contact me!" />

        <Contact />
        <Footer onOpenTerms={() => setShowTerms(true)} />
        <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
