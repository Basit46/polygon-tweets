import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const HowItWorks = () => {
  return (
    <div id="about" className="how-it-works h-fit mt-[7.10rem]">
      <h1 className="text-neutral-600 text-[32px] font-montserrat font-bold text-center">
        How it works
      </h1>
      <p className="text-neutral-800 text-opacity-80 font-montserrat text-center text-base font-normal">
        Here is how Polygon 2.0 Tweet Generator works
      </p>

      <div className="mt-[3.13rem] flex flex-wrap justify-center gap-x-[1.38rem] gap-y-[1.77rem]">
        <div className="box">
          <img src={img1} alt="img" />
          <h1>Enter your thought</h1>
          <p>
            Type in your thought or ideas about Polygon 2.0 in the textbox. This
            could be opinion, feature or prediction.
          </p>
        </div>

        <div className="box">
          <img src={img2} alt="img" />
          <h1>Generate tweet</h1>
          <p>
            After imputing your thought, click the Generate button. Our tool
            will create six mock tweets based on your input
          </p>
        </div>

        <div className="box">
          <img src={img3} alt="img" />
          <h1>Review & choose</h1>
          <p>
            Scroll down to see your generated tweets. Each one is displayed in a
            format similar to twitter.
          </p>
        </div>

        <div className="box">
          <img src={img4} alt="img" />
          <h1>Post or Schedule</h1>
          <p>
            Under each tweet, you will find options to Post Now or Schedule
            Tweet.
          </p>
        </div>

        <div className="box">
          <img src={img5} alt="img" />
          <h1>Repeat</h1>
          <p>
            Want to generate more tweets? Simply enter new idea into the text
            box and click Generate again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
