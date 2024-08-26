import React from "react";
import Image from "next/image";
import { Radiation } from "lucide-react";

function ProductCard() {
  return (
    <div className=" cursor-pointer w-[270px] h-full overflow-hidden border-2 border-[#28E3E9] rounded-tl-[30px] rounded-br-[30px] transition-colors duration-300 hover:border-[#1CB2B6]">
      {/* Top Label */}
      <div className="text-[#A10C0C] bg-[#A10C0C0D] p-1 w-fit h-fit m-5 font-light text-xs  mb-2">
        • nicht lieferbar
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <Image alt="img" src="/Med_bottle.png" height={310} width={300} />
      </div>

      {/* Product Info Section */}
      <div className="bg-[#62C3C64D] border-t-2 border-[#28E3E9] p-4 ">
        {/* Brand */}
        <div className="mb-3">
          <span className="bg-[#62C3C64D] text-[#365758] text-sm font-semibold px-2 py-1 rounded">
            Canify
          </span>
        </div>

        {/* THC & CBD Info */}
        <div className="flex gap-2 items-center mb-3">
          <span className="bg-[#FCFCFA] w-1/3 text-center text-[#116A6C] text-xs font-medium px-[10px] py-1 rounded-md">
            THC 18%
          </span>
          <span className="bg-[#62C3C6] w-1/3 text-center text-[#FCFCFA] text-xs font-medium px-[10px] py-1 rounded-md">
            CBD
          </span>
          <Image alt="img" width={20} height={20}  src="/Group.png" />
        </div>

        {/* Product Name */}
        <div className="text-[#116A6C]  font-semibold mb-2 text-lg">
          Cannabis Flos 18/1 PT Mango
        </div>

        {/* Product Details */}
        <div className="text-[#365758] text-sm mb-4">
          <div className="flex justify-between">
            <span>Kultivar</span>
            <span>Mango</span>
          </div>
          <div className="flex justify-between">
            <span>Genetik</span>
            <span>Hybrid</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center">
          <div className=" flex flex-col ">
            <span className="text-[#116A6C] text-lg font-bold">
              <span className=" text-[#62C3C6]"> € </span> 11,66<sup>1</sup>
            </span>
            <span className=" text-[#365758] font-light text-xs">
              pro Gramm
            </span>
          </div>
          <button className=" hover:border-2 hover:border-[045A5C] bg-[#ECFEAA]  rounded-tl-3xl rounded-br-3xl font-normal text-sm text-[#045A5C] px-[18px] py-2 ">
            in den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
