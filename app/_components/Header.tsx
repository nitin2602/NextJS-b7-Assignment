import React from "react";

function Header() {
  return (
    <div className="mt-5 md:mt-[60px] flex flex-col md:flex-row justify-between items-center">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-[#62C3C6]">
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700">
              {" "}
              Livebestand{" "}
            </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a
              href="#"
              className="block transition text-[#045A5C] font-bold hover:text-gray-700"
            >
              Cannabis Blüten
            </a>
          </li>
        </ol>
      </nav>
      <div className=" flex-col justify-center items-center ">
        <p className=" text-[#365758] font-normal text-sm">
          GKV mit Kostenübernahme?
        </p>
        <button className=" w-full px-2 pt-1 mt-2 md:px-5 md:pt-[7px] md:pb-2 border-[2px] border-[#62C3C6] rounded-tl-3xl rounded-br-3xl hover:bg-[#28E3E9] animate-pulse">
          Preisoptionen
        </button>
      </div>
    </div>
  );
}

export default Header;
