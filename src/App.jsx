import React, { useState } from "react";
import Navbar from "./components/Navbar";
import bg from "./assets/bg.svg";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import CoverLoader from "./components/CoverLoader";

function App() {
  const [isGenerated, setIsGenerated] = useState(false);
  const [coverLoader, setCoverLoader] = useState(false);
  return (
    <div className="">
      <div>
        <Navbar />
        <div className="relative min-h-[100.9375rem]">
          <img src={bg} alt="bg" />
          <div className="absolute top-0 left-0 w-full h-fit ">
            <Hero
              setIsGenerated={setIsGenerated}
              setCoverLoader={setCoverLoader}
            />
            {!isGenerated && <HowItWorks />}
          </div>
          <Footer />
        </div>
      </div>
      <CoverLoader coverLoader={coverLoader} />
    </div>
  );
}

export default App;
