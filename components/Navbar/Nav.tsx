import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// navbar for web responsive

function Nav() {
  return (
    // web responsive
    <div className="mx-auto hidden md:block ">
      <div className="flex  gap-10">
        <div className="hidden md:flex items-center gap-4 text-[#505056] ">
          <div className="group">
            {/* navbar  */}
            <div className="hover:text-[#2591b2] flex items-center">
              About-Us
              <MdOutlineKeyboardArrowDown
                className="pr-2 group-hover:pr-2"
                size="25px"
              />
            </div>

            {/* sub navbar */}
            <div className="hidden group-hover:block">
              <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[250px]">
                <div className="px-4 py-10 ">
                  <ul className="flex flex-col gap-2 text-[14px]">
                    <Link href="/about-us" className="border-b-[1px]">
                      Company Profile
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      Message from Chairman
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      Message from Managing Director
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      Message from Business Development Director
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      Message from Executive Director
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      License & Certificate
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* service navbar  */}
          <div className="group">
            <div className="hover:text-[#2591b2] flex items-center">
              Service
              <MdOutlineKeyboardArrowDown
                className="pr-2 group-hover:pr-2"
                size="25px"
              />
            </div>
            <div className="hidden group-hover:block">
              <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[250px]">
                <div className="px-4 py-10 ">
                  <ul className="flex flex-col gap-2 text-[14px]">
                    <Link href="/read" className="border-b-[1px]">
                      Overseas Recruitment
                    </Link>
                    <Link href="/read" className="border-b-[1px]">
                      Training & Orientation
                    </Link>
                    <Link href="/read" className="border-b-[1px]">
                      Travel Management
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link className="hover:text-[#2591b2]" href="/careers">
            Careers
          </Link>
          <Link className="hover:text-[#2591b2]" href="/news">
            News
          </Link>

          <Link className="hover:text-[#2591b2]" href="/contact-us">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
