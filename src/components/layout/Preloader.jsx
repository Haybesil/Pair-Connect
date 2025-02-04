import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PairsLogo from "/images/pairsLogo.svg";
import Pairs from "/images/pairs.svg";

const Preloader = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Smooth fade duration
      easing: "ease-in-out",
    });

    // Show second image after 4 seconds
    const timer = setTimeout(() => {
      setShowSecondImage(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-black z-[9999] overflow-hidden">
      {/* First spinning image */}
      <img
        src={PairsLogo}
        alt="Logo"
        className={`w-20 lg:w-32 animate-spin transition-transform duration-1000 ${
          showSecondImage ? "translate-x-20 opacity-50" : ""
        }`}
      />

      {/* Second image appears after 4 seconds and pushes the first image */}
      {showSecondImage && (
        <img
          src={Pairs}
          alt="Logo"
          className="w-32 lg:w-40 h-36 lg:h-44 transition-transform duration-1000"
          data-aos="fade-left"
        />
      )}
    </div>
  );
};

export default Preloader;
