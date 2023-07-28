import React from "react";
import Loader from "./Loader";

const CoverLoader = ({ coverLoader }) => {
  return (
    <div
      className={`${
        !coverLoader && "hidden"
      } fixed top-0 left-0 bg-black/70 h-screen w-screen grid place-items-center`}
    >
      <Loader />
    </div>
  );
};

export default CoverLoader;
