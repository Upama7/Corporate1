"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import { BsFilterRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import MNav from "./MNav";

function Navbar() {
  const [value, setValue] = useState(true);

  const handleClick = () => setValue(!value);

  return (
    <>
      <div>
        <div className="flex justify-between items-center mt-8 ">
          <div className="flex justify-between  items-center md:gap-48">
            <h3 className="text-[24px] font-bold leading-8 text-[#252B42]">
              Indicorp
            </h3>
            <Nav />
          </div>
          <div className="flex gap-4 text-2xl text-[#737373]">
            <CiSearch className="md:hidden" />
            <IoCartOutline className="md:hidden" />
            <BsFilterRight onClick={handleClick} className="" />
          </div>
        </div>
        <MNav value={value} />
      </div>
    </>
  );
}

export default Navbar;
