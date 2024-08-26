import React from "react";

function DropDownMenu() {
  const menuItems = [
    "Rezept einlösen", // Redeem prescription
    "Live Bestand", // Live stock
    "Videosprechstunde", // Video consultation
    "FAQs", // Frequently Asked Questions
    "Kontakt", // Contact
  ];
  return (
    <div className="relative">
      <div
        className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
        role="menu"
      >
        <div className="p-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropDownMenu;
