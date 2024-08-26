"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className=" flex flex-col md:flex-row items-center md:items-start  md:justify-between md:gap-20">
      <Filter />
      <Products />
    </div>
  );
}

export default Main;
