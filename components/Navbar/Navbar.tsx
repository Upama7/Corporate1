"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import { BsFilterRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import MNav from "./MNav";

function Navbar() {
  const backgroundImageUrl =
    "https://nelva.true-emotions.studio/wp-content/uploads/2018/06/E3MKMD.jpg";

  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`,

    // Add other CSS properties here if needed
  };

  const [value, setValue] = useState(true);

  const handleClick = () => setValue(!value);

  return (
    <>
      {/* <div style={styles}> */}

      <div className="max-w-[1100px] mx-auto flex justify-between items-center py-4  px-6 md:px-0 border-b-[1px] ">
        <a href="/">
          <h3 className="text-[24px] font-bold leading-8 text-[#252B42]">
            Indicorp
          </h3>
        </a>

        <div className="flex justify-between grow">
          <Nav />

          <div className="px-6 md:px-0">
            <div className="flex gap-4 text-2xl text-[#737373]">
              <CiSearch className="md:hidden" />
              <IoCartOutline className="md:hidden" />
              <BsFilterRight onClick={handleClick} className="" />
            </div>
          </div>
        </div>
      </div>
      <MNav value={value} handleClick={handleClick} />

      {/* </div> */}
    </>
  );
}

export default Navbar;
