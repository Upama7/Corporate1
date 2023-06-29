import React from "react";
import Link from "next/link";

// navbar for web responsive
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

function Nav() {
  return (
    // web responsive
    <div className="hidden md:block">
      <div className="text-[14px] font-semibold leading-6 text-[#737373] flex flex-col md:flex-row  gap-4 ">
        {nav.map(({ name, path }, index) => (
          <Link
            key={index}
            href={path}
            className="text-[14px] text-[#737373] font-semibold	leading-6	"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
