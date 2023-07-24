import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[460px] bg-slate-900 font-spaceGrotesk text-white">
      <div className="h-[80%] flex border-b-[2px] border-white">
        <div className="links relative pt-[4.44rem] flex-1">
          <ul>
            <h1>Polygon Tweet</h1>
            <li>About</li>
            <li>Contract</li>
            <li>Term of Use</li>
          </ul>
          <div className="absolute bottom-0 left-0 w-full h-[6rem] border-t-[2px] border-white"></div>
        </div>
        <div className="links pt-[4.88rem] w-[30%] border-x-[2px] border-white">
          <ul>
            <h1>Regulation</h1>
            <li>Privacy Policy</li>
            <li>FAQS</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="social-links pt-[3.5rem] w-[30%]">
          <a href="#" target="blank">
            TWITTER
          </a>
          <a className="border-t-[2px] border-white" href="#" target="blank">
            INSTAGRAM
          </a>
          <a className="border-y-[2px] border-white" href="#" target="blank">
            LINKEDIN
          </a>
          <a href="#" target="blank">
            YOUTUBE
          </a>
        </div>
      </div>
      <div className="h-[20%] flex justify-center items-center text-center text-xs font-medium">
        Copyright@Polygon Tweet 2023
      </div>
    </footer>
  );
};

export default Footer;
