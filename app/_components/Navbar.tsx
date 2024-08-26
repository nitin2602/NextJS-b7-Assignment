"use client";
import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

function Navbar() {
  const menuItems = [
    "Rezept einlösen", // Redeem prescription
    "Live Bestand", // Live stock
    "Videosprechstunde", // Video consultation
    "FAQs", // Frequently Asked Questions
    "Kontakt", // Contact
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (index: any) => {
    setSelectedIndex(index);
  };
  return (
    <div className=" flex justify-between items-center gap-7">
      <div className="relative ">
        <input
          type="text"
          id="Search"
          placeholder="Suchen"
          className=" border-0 w-full md:w-80 border-none placeholder-[#62C3C6] rounded-[30px] text-[#62C3C6] bg-[#EEF7F7] font-normal text-lg pt-[6] pr-4 pb-2 pl-4 "
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-[#62C3C6]">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-5"
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
      <div className=" flex gap-[50px]">
        <div className="  hidden md:flex  justify-between items-center gap-1">
          <ul className=" flex gap-[30px]">
            {menuItems.map((item, index) => (
              <div className=" flex gap-[3px] items-center ">
                <div
                  key={index}
                  className={`${
                    selectedIndex === index ? "bg-[#28E3E9]" : "bg-[#62C3C64D]"
                  } rounded-tl-2xl rounded-br-2xl w-[10px] h-4`}
                ></div>

                <li
                  className={`text-[16px] text-[#045A5C] cursor-pointer hover:underline hover:underline-offset-8 ${
                    selectedIndex === index ? "font-bold" : "font-normal"
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className=" flex gap-5">
          <button className="md:hidden" onClick={toggleDropdown}>
            <Menu />
          </button>
          {isOpen ? <DropDownMenu /> : ""}
          <div className="relative flex cursor-pointer ">
            <ShoppingCart className="text-[#28E3E9]" />
            <div className="absolute top-2 left-[110%] transform -translate-x-1/2 text-center bg-[#62C3C64D] font-medium text-[#28E3E9] rounded-full h-5 w-5 flex items-center justify-center">
              1
            </div>
          </div>
          <button className=" bg-[#ECFEAA]  rounded-tl-3xl rounded-br-3xl font-normal text-sm text-[#045A5C] px-[18px] ">
            Anmelden
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
