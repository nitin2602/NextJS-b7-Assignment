import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 border rounded"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`px-4 py-2 mx-1 border rounded ${
            currentPage === index + 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 border rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
