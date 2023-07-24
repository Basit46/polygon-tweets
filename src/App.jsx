import React, { useState } from "react";
import Navbar from "./components/Navbar";
import bg from "./assets/bg.svg";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  const [isGenerated, setIsGenerated] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="relative min-h-[100.9375rem]">
        <img src={bg} alt="bg" />
        <div className="absolute top-0 left-0 w-full h-fit ">
          <Hero isGenerated={isGenerated} setIsGenerated={setIsGenerated} />
          {!isGenerated && <HowItWorks />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
