import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="px-[6.19rem] font-inter bg-stone-300 h-24 w-full flex justify-between items-center">
      <h1 className="text-black text-2xl font-bold">Polygon tweet</h1>
      <ul className="flex items-center gap-[1.5rem]">
        <Link to="hero" smooth={true} duration={500}>
          <li className="text-zinc-600 text-[22px] hover:text-violet-600 font-medium cursor-pointer">
            Home
          </li>
        </Link>

        <Link to="about" smooth={true} duration={500}>
          <li className="text-zinc-600 text-[22px] hover:text-violet-600 font-medium cursor-pointer">
            About us
          </li>
        </Link>
      </ul>
      <button className="py-[1.29rem] px-[3.01rem] bg-violet-600 rounded-[28.80px] text-white text-sm font-bold">
        Get started
      </button>
    </nav>
  );
};

export default Navbar;
