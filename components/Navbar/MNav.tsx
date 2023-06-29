import React from "react";
import Link from "next/link";

// mobile navbar
const nav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Product",
    path: "",
  },
  {
    name: "Pricing",
    path: "",
  },
  {
    name: "Contact",
    path: "",
  },
];

function MNav({ value }: any) {
  return (
    <div>
      <div className={`${value ? "hidden" : ""} md:hidden`}>
        <div className="text-[14px] font-semibold leading-6 text-[#737373] flex flex-col justify-center items-center gap-4 py-16">
          {nav.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              className="text-[30px] text-[#737373] font-normal leading-[45px]"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MNav;
