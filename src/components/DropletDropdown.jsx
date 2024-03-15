import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { socialInfo } from "../constants";
import { useState } from "react";

export default function DropletDropdown({ className }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Button to show drop down */}
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="bg-black text-base py-1 px-5 text-white rounded-full cursor-pointer hover:bg-slate-800 transition duration-300 ease-in-out"
      >
        {showDropdown ? (
          <FontAwesomeIcon icon={faXmark} className="w-5" />
        ) : (
          <FontAwesomeIcon icon={faLink} className="w-5" />
        )}
      </div>

      {/* Dropdown that will be show after button is clicked */}
      <div
        className={`absolute top-0 left-[10px] mt-10 transition duration-500 opacity-0 ${
          showDropdown && "opacity-100"
        }`}
      >
        <div className="flex flex-col space-y-2">
          {socialInfo.map((social, index) => (
            // show abbrevation via tag
            <abbr
              key={index}
              title={social.name}
              className="py-3 px-3 rounded-full bg-white text-black border border-black shadow-lg hover:bg-slate-900 hover:text-white transition duration-500 ease-in-out bg-opacity-80"
            >
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="flex items-center justify-center"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </abbr>
          ))}
        </div>
      </div>
    </div>
  );
}
