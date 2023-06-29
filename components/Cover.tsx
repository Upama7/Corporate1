import React from "react";
import TopDiv from "./TopDiv";

function Cover() {
  return (
    <div className="flex  flex-col gap-10 ">
      <img
        className="w-full h-[793px] hidden md:block"
        src="../Assets/cover (5).png"
        alt="background-image"
      />
      <img
        className=" md:hidden"
        src="../Assets/cover (6).png"
        alt="background-image"
      />
      <TopDiv />
    </div>
  );
}

export default Cover;
