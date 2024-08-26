import { ChevronDown, Menu, ToggleRight } from "lucide-react";
import React from "react";

function Topbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-14">
      <div className=" flex items-center gap-3 mb-2 ">
        <div className=" bg-[#28E3E9] rounded-tl-2xl rounded-br-2xl w-[20px] h-[26px]"></div>
        <h1 className=" font-semibold text-3xl text-[#116A6C]"> Blüten</h1>
      </div>
      <div
        className=" flex flex-col gap-2 items-center justify-center md:flex-row md:gap-5">
        <div className="relative w-full">
  <input
    type="text"
    id="Search"
    placeholder="Suchen"
    className="border-0 w-full md:w-80 border-none placeholder-[#62C3C6] rounded-[30px] text-[#62C3C6] bg-[#EEF7F7] font-normal text-lg py-2 pr-12 pl-4"
  />
  <span className="absolute inset-y-0 right-10 flex items-center pr-4">
    <button type="button" className="text-[#62C3C6]">
      <span className="sr-only">Search</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>

        <div className=" flex cursor-pointer  text-[#365758]">
          <div className="flex font-semibold py-[2px] px-3 whitespace-nowrap items-center overflow-hidden rounded-md border bg-[#62C3C64D]">
            Sortieren nach
            <ChevronDown className="text-[#365758] " />
          </div>
        </div>
        <div className="relative flex cursor-pointer  text-[#365758]">
          <div className="inline-flex font-semibold py-[2px] px-3 items-center  overflow-hidden rounded-md border bg-[#62C3C64D]">
            Verfügbarkeit
            <ToggleRight />
          </div>
        </div>
        <div className="relative flex cursor-pointer  text-[#365758]">
          <div className="inline-flex font-semibold py-[2px] px-3 items-center overflow-hidden rounded-md border bg-[#62C3C64D]">
            <Menu className="text-[#365758] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
