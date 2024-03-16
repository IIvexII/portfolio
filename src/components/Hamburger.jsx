import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Hamburger({ pageInfo }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    // hamburger button
    <nav className="relative text-5xl hidden max-sm:text-2xl max-sm:block">
      <div onClick={() => setShowMenu(!showMenu)} className="cursor-pointer">
        <FontAwesomeIcon icon={faHamburger} />
      </div>

      {/* menu to show when button clicked */}
      <div
        className={`absolute -translate-x-3 mt-2 border-b-0 border-t border-gray-600 bg-white shadow-md rounded-full transition duration-500 ease-in-out bg-opacity-95 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="pt-0 flex flex-col items-center justify-center">
          {pageInfo.map((page, index) => (
            <a
              key={index}
              href={page.link}
              className={`group relative w-full py-3 px-3 text-lg transition-all duration-300 hover:bg-black hover:text-white ${
                index === 0 ? "pt-6 rounded-t-full" : ""
              }`}
            >
              <FontAwesomeIcon icon={page.icon} className="w-5" />

              <p className="group-hover:opacity-100 group-hover:visible opacity-0 invisible absolute translate-x-11 -translate-y-6 text-xs text-black bg-white px-3 py-1 border border-black rounded transition duration-700 ease-in-out">
                {page.name}
              </p>
            </a>
          ))}

          {/* Close Button */}
          <a
            onClick={() => setShowMenu(!setShowMenu)}
            className="relative group w-full flex justify-center py-5 px-3 text-lg text-white bg-black  hover:bg-red-700 rounded-b-full transition-all duration-300"
          >
            <FontAwesomeIcon icon={faXmark} className="w-5" />

            <p className="group-hover:opacity-100 group-hover:visible opacity-0 invisible  absolute translate-x-14 text-xs text-black bg-white px-3 py-1 border border-black rounded transition duration-700 ease-in-out">
              Close
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
}
