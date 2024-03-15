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
        className={`absolute left-[-19px] mt-2 bg-white border border-slate-300 shadow-md rounded-full transition duration-300 ease-in-out ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="pt-0 flex flex-col items-center justify-center">
          {pageInfo.map((page, index) => (
            <a
              key={index}
              href={page.link}
              className={`w-full flex flex-col justify-center items-center space-y-1 py-3 px-3 text-lg transition-all duration-300 hover:bg-black hover:text-white ${
                index === 0 ? "pt-6 rounded-t-full" : ""
              }`}
            >
              <FontAwesomeIcon icon={page.icon} className="w-5" />
              <p className="text-xs">{page.name}</p>
            </a>
          ))}

          {/* Close Button */}
          <a
            onClick={() => setShowMenu(!setShowMenu)}
            className="w-full flex justify-center py-5 px-3 text-lg text-white bg-black rounded-b-full transition-all duration-300"
          >
            <FontAwesomeIcon icon={faXmark} className="w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
