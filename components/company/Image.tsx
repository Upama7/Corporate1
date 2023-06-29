import React from "react";
import {
  FaHooli,
  FaLyft,
  FaPiedPiperHat,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";

// image for company sectionn
function Image() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-[5rem] text-[#737373] py-10 gap-4 md:gap-0">
      <FaHooli />
      <FaLyft />
      <FaPiedPiperHat />
      <FaStripe />
      <FaAws />
      <FaRedditAlien />
    </div>
  );
}

export default Image;
