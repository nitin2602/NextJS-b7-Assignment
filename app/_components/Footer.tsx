import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1A8D91] h-auto rounded-tl-3xl rounded-tr-3xl w-full mt-20 p-10 md:p-10 text-white py-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:mx-[310px] gap-4 text-sm ">
        <div className="flex flex-col items-center gap-3 md:items-start text-[#FFFFFF80]">
          <a href="#">AGB</a>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
          <div className="flex flex-col space-y-2 text-[16px]">
            <div className="flex flex-wrap justify-center md:justify-start gap-5 items-center mb-4">
              <a href="#" className="flex items-center space-x-2">
                <div className="bg-[#28E3E9] rounded-tl-2xl rounded-br-2xl w-[10px] h-4"></div>{" "}
                <span>Rezept einlösen</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <div className="bg-[#28E3E9] rounded-tl-2xl rounded-br-2xl w-[10px] h-4"></div>{" "}
                <span>Live Bestand</span>
              </a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 items-center">
              <a href="#" className="flex items-center space-x-2 font-normal">
                <div className="bg-[#28E3E9] rounded-tl-2xl rounded-br-2xl w-[10px] h-4"></div>
                <span>Videosprechstunde</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <div className="bg-[#28E3E9] rounded-tl-2xl rounded-br-2xl w-[10px] h-4"></div>
                <span>FAQs</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <div className="bg-[#28E3E9] rounded-tl-2xl rounded-br-2xl w-[10px] h-4"></div>
                <span>Kontakt</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-2 items-center md:items-start">
            <span className="text-[#FFFFFF80] text-xs font-light">Standort</span>
            <p className="font-extrabold text-sm text-center md:text-left">Bergstraße 49 - 57</p>
            <p className="font-extrabold text-sm text-center md:text-left">69469 Weinheim</p>
            <p className="font-extrabold text-sm text-center md:text-left">(3 Glocken Quartier)</p>
          </div>

          <div className="flex flex-col space-y-2 items-center md:items-start">
            <span className="text-[#FFFFFF80] text-xs font-light">Telefon</span>
            <p className="font-extrabold text-sm">0223 545 5250</p>
          </div>

          <div className="flex flex-col space-y-2 items-center md:items-start">
            <span className="text-[#FFFFFF80] text-xs font-light">Öffnungszeiten</span>
            <p className="text-[#FFFFFF80] text-xs font-light">Mo-Fr</p>
            <p className="font-extrabold text-sm">09:00 - 18:00 Uhr</p>
            <p className="text-[#FFFFFF80] text-xs font-light">Sa</p>
            <p className="font-extrabold text-sm">09:00 - 14:00 Uhr</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
