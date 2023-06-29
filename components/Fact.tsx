"use client";

import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";

// why many people loves salesberyy
function Fact() {
  const [value, setValue] = useState(0);

  const fact = [
    {
      h3: "Affordable Prices",
      src: <BsFillCircleFill color="#00b051" />,
      p: "Salesberry offers a vast selection of products across various categories, allowing shoppers to find almost everything they need in one place.",
    },
    {
      h3: "Convenience",
      src: <BsFillCircleFill color="#7b50ce" />,
      p: "With numerous store locations and extended operating hours, Salesberry provides convenience and accessibility to customers.",
    },
    // {
    //   h3: "Wide Product Selection ",
    //   src: <BsFillCircleFill color="#00b051" />,
    //   p: "Salesberry offers a vast selection of products across various categories, allowing shoppers to find almost everything they need in one place.",
    // },
  ];

  return (
    <div className=" bg-[#f4f6fa] py-8">
      <div className="container mx-auto xl:w-[1100px] p-6 md:p-0">
        <h6 className="text-[#a7b2c3] text-center md:text-left pb-2">Fact</h6>
        <div className=" flex flex-col md:flex-row gap-10">
          <div className="basis-[30%]">
            <div className="flex flex-col md:flex-row items-center ">
              <h2 className="text-[25px] md:text-[40px]  font-bold leading-10 text-center md:text-left">
                Why Many People ❤️️
                <span className="text-[#00b051]">Salesberry</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center basis-[70%] gap-10">
            {fact.map((s, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center  md:gap-4"
              >
                <div className="text-5xl md:mb-10 ">{s.src}</div>
                <div className="text-center md:text-left">
                  <h3 className="text-[20px] font-bold leading-8">{s.h3}</h3>
                  <p className="text-[14px] text-[#737373] font-medium leading-5">
                    {s.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
