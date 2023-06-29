import React from "react";

// subscribe banner
function Subscribe() {
  return (
    <div className="container mx-auto xl:max-w-[984px]  bg-[#16697A] flex flex-col md:flex-row items-center py-8 px-8 rounded-sm md:absolute bottom-5 gap-4">
      <h3 className="flex-1 text-white text-[24px] font-bold leading-8 text-center md:text-left">
        Subscribe For Latest <br /> Newsletter
      </h3>
      <div className="flex-1 bg-white rounded-md">
        <div className="flex items-center ">
          <input
            className=" text-[14px] font-normal leading-7 text-[#737373] rounded-l-md p-5 w-[80%]"
            id="subscribe"
            type="text"
            defaultValue="Your Email"
          />
          <label
            className="bg-[#FFA62B] text-white rounded-r-md text-[14px] font-normal leading-7 p-5 border-[1px] border-white text-center w-[117px]"
            htmlFor="subscribe"
          >
            Subscribe
          </label>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
