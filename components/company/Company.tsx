import React from "react";
import Image from "./Image";
import Subscribe from "./Subscribe";

// company subscribe banner
function Company() {
  return (
    <div className=" flex flex-col gap-20 relative">
      <div className=" container mx-auto xl:max-w-[984px]">
        <Image />
        <Subscribe />
      </div>
      <div className="h-[77px] bg-[#252B42] hidden md:block"></div>
    </div>
  );
}

export default Company;
