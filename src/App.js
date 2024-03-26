import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import React, {useRef} from 'react';
import OurServices from './components/OurServices/OurServices';
import Highlights from './components/Highlights/Highlights';
import HowDoWeWork from "./components/HowDoWeWork/HowDoWeWork";
import OurTeam from "./components/OurTeam/OurTeam";
import Footer from "./components/Footer/Footer";

function App() {

  const heroRef = useRef(null);
  const ourServicesRef = useRef(null);
  const highlightsRef = useRef(null);
  const howDoWeWorkRef = useRef(null);
  const ourTeamRef = useRef(null);

  const scrollToOurServices = () => {
    ourServicesRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToHighlights = () => {
    highlightsRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToHowDoWeWork = () => {
    howDoWeWorkRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToOurTeam = () => {
    ourTeamRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="App">
      <Header
        onOurServicesClick={scrollToOurServices}
        onHeroClick={scrollToHero}
        onHighlightsClick={scrollToHighlights}
        onHowDoWeWorkClick={scrollToHowDoWeWork}
        onOurTeamClick={scrollToOurTeam}
      />
      <Hero ref={heroRef} />
      <OurServices ref={ourServicesRef} />
      <Highlights ref={highlightsRef} />
      <HowDoWeWork ref={howDoWeWorkRef} />
      <OurTeam ref={ourTeamRef} />
      <Footer />
    </div>
  );
}

export default App;
