"use client";
import { useState } from "react";

import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";

function Products() {
  const itemsPerPage = 9; // Number of items to display per page
  const totalItems = 30; // Total number of items (can be dynamic)
  
  // State to keep track of the current page (0-based index for react-paginate)
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  // Example data generation: Creates an array of products with a unique ID for each item
  const products = Array.from({ length: totalItems }, (_, index) => ({
    id: index,
  }));
  
  // Pagination logic
  const startIndex = currentPage * itemsPerPage; // Calculate the starting index for the current page
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage); // Slice the products array to get items for the current page
  
  // Handle page changes when the user clicks on a pagination button
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected); // Update the current page state based on the selected page
  };
  

  return (
    <div className=" flex flex-col">
      <div className="mt-20 grid grid-cols-1 gap-3 lg:grid-cols-3  md:grid-cols-2 md:gap-4">
      {currentProducts.map(product => (
          <ProductCard key={product.id} />
        ))}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        previousLabel={<ArrowLeft size={20} />}
        nextLabel={<ArrowRight size={20} />}
        containerClassName='flex justify-end items-center mt-[30px]'
        pageClassName='mx-1'
        pageLinkClassName='px-4 py-2  rounded-md text-[#045A5C] hover:bg-[#62C3C64D]'
        previousClassName='mx-1'
        previousLinkClassName='rounded-md text-[#045A5C] hover:bg-[#62C3C64D]'
        nextClassName='mx-1'
        nextLinkClassName=' rounded-md text-[#045A5C] hover:bg-[#62C3C64D]'
        breakClassName='mx-1'lue-
        breakLinkClassName='px-4 py-2  rounded-md text-[#045A5C]'
        activeClassName= ' font-semibold text-[#045A5C]   '
      />
    </div>
  );
}

export default Products;
