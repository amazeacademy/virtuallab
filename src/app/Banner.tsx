import React from "react";
import "./globals.css";

interface BannerProps {
  // props definition
}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-96 md:w-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1), rgba(128, 128, 128, 0.2)), url("PlaneTable_3PointProblem.jpg")`,
          backdropFilter: "blur(25px)", // Apply blur effect
        }}
      >
        {/* Logo Image */}
        <img src="amazelogo2.png" alt="Logo" className=" h-52 md:h-96" />

        {/* AMAZE ACADEMY Text
        <div className="text-center text-4xl md:text-6xl text-white mt-4 md:mt-6">
          AMAZE ACADEMY
        </div> */}
      </div>
    </>
  );
};

export default Banner;
