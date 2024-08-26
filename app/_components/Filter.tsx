"use client";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import FilterDropDown from "./FilterDropDown";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const manufacturers = [
    { name: "ADREXpharma", checked: false },
    { name: "Aurora", checked: false },
    { name: "Avaay", checked: false },
    { name: "Bedrocan", checked: true },
    { name: "Cannamedical", checked: true },
  ];
  const [price, setPrice] = useState([5, 10]);
  const [thc, setTHC] = useState([11, 18]);
  const [cbd, setCBD] = useState([1, 5]);
  return (
    <>
      <div className="mt-10 w-64 bg-white hidden md:gap-7 md:flex flex-col ">
        {/* Filter Header */}
        <div className=" bg-[#62C3C61A]  rounded-md">
          <h3 className="flex justify-center items-center text-center text-xl py-1 px-3 text-[#045A5C] font-semibold mb-4">
            Filter
          </h3>
        </div>

        {/* Price Slider */}
        <div className="mb-6 pb-2 border-b-2 border-[#62C3C64D]">
          <label className="block text-center text-[#365758] mb-2 font-semibold">
            Preis
          </label>
          <div className="flex flex-col space-y-2">
            <input
              type="range"
              min="5"
              max="10"
              value={price[0]}
              onChange={(e) => setPrice([+e.target.value, price[1]])}
              className=" accent-[#62C3C6] w-full h-2 bg-[#62C3C6] rounded-lg appearance-none"
            />
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>{price[0]} €</span>
            <span>{price[1]} €</span>
          </div>
        </div>

        {/* Hersteller (Manufacturers) */}
        <div className="mb-6 pb-2 border-b-2 border-[#62C3C64D]">
          <label className="block text-center text-[#365758] mb-2 font-semibold">
            Hersteller
          </label>
          <div className="space-y-1">
            {manufacturers.map((manufacturer, index) => (
              <label
                key={index}
                className="flex text-[#365758]  font-normal items-center"
              >
                <input
                  type="checkbox"
                  className="mr-2 accent-[#62C3C6]"
                  defaultChecked={manufacturer.checked}
                />
                {manufacturer.name}
              </label>
            ))}
          </div>
          <button className="w-full mt-2 border-[2px] border-[#ECFEAA] pt-[7px] pb-2 px-4  rounded-tl-3xl rounded-br-3xl font-normal text-sm text-[#045A5C]  ">
            mehr anzeigen
          </button>
        </div>

        {/* THC Gehalt (THC Content) Slider */}
        <div className="mb-6 pb-2 border-b-2 border-[#62C3C64D]">
          <label className="block text-center text-[#365758] mb-2 font-semibold">
            THC Gehalt
          </label>
          <div className="flex flex-col space-y-2">
            <input
              type="range"
              min="5"
              max="10"
              value={thc[0]}
              onChange={(e) => setTHC([+e.target.value, price[1]])}
              className=" accent-[#62C3C6] w-full h-2 bg-[#62C3C6] rounded-lg appearance-none"
            />
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>{thc[0]} %</span>
            <span>{thc[1]} %</span>
          </div>
        </div>

        {/* CBD Gehalt (CBD Content) Slider */}
        <div className="mb-6 pb-2 border-b-2 border-[#62C3C64D]">
          <label className="block text-center text-[#365758] mb-2 font-semibold">
            CBD Gehalt
          </label>
          <div className="flex flex-col space-y-2">
            <input
              type="range"
              min="5"
              max="10"
              value={cbd[0]}
              onChange={(e) => setCBD([+e.target.value, price[1]])}
              className="accent-[#62C3C6] w-full h-2 bg-[#62C3C6] rounded-lg appearance-none"
            />
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className=" bg -[#8191911A] rounded-sm">{cbd[0]} %</span>
            <span>{cbd[1]} %</span>
          </div>
        </div>

        {/* Genetik (Genetics) */}
        <div className="mb-6 pb-2 border-b-2 border-[#62C3C64D]">
          <label className="block text-center text-[#365758] mb-2 font-semibold">
            Genetik
          </label>
          <div className="flex space-x-2 text-[#045A5C]">
            <button className="px-4 py-1 bg-[#62C3C6] ">Indica</button>
            <button className="px-4 py-1 bg-[#62C3C64D] ">Sativa</button>
            <button className="px-4 py-1 bg-[#62C3C64D] ">Hybrid</button>
          </div>
        </div>

        {/* Bestrahlung (Irradiation) */}
        <div className="mb-6 pb-2 border-b-2 border-[#62C3C64D]">
          <label className="block text-center text-[#365758] mb-2 font-semibold">
            Bestrahltung
          </label>
          <div className="flex space-x-2 text-sm text-[#045A5C]">
            <button className="px-4 py-1 rounded  bg-[#62C3C6] ">
              bestrahlt
            </button>
            <button className="px-4 py-1 rounded bg-[#62C3C64D] ">
              nicht bestrahlt
            </button>
          </div>
        </div>

        {/* Terpene (Terpenes) */}
        <div className="mb-6 pb-2 border-b-2 border-[#62C3C64D]">
          <div className=" flex  justify-center  gap-1">
            <label className="block text-center text-[#365758] mb-2 font-semibold">
              Terpene
            </label>
            <ChevronDown className=" text-[#62C3C6]" />
          </div>
        </div>

        {/* Reset All Filters */}
        <div className="text-center">
          <button className="text-[#0D0D0D] text-sm">
            × alle Filter zurücksetzen
          </button>
        </div>
      </div>

      <div className=" flex mt-3 flex-col md:hidden ">
        <div className="  md:hidden bg-[#62C3C61A]  rounded-md">
          <h3
            onClick={toggleDropdown}
            className=" flex gap-1 items-center justify-center  text-center text-xl py-1 px-3 text-[#045A5C] font-semibold mb-4"
          >
            Filter
            <SlidersHorizontal />
          </h3>
        </div>
        {isOpen && (
          <div className="w-full flex flex-col items-center gap-2">
            <FilterDropDown />
          </div>
        )}
      </div>
    </>
  );
}

export default Filter;
