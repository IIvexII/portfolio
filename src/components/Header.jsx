import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropletDropdown } from "../components";

export default function Header({ name, socialInfo }) {
  return (
    <header className="fixed py-3 px-5 pb-4 w-full flex justify-center items-center bg-white bg-opacity-95 firefox:bg-opacity-95 border border-gray-200">
      <div className="w-full flex justify-between items-center max-w-[820px]">
        {/* My Name as Logo */}
        <a href="/" className="cursor-pointer text-center">
          <span className="text-4xl max-sm:text-3xl">{name}</span>
          <span className="text-6xl leading-[0]">.</span>
        </a>
        {/* links */}
        <div className="flex items-center px-8 space-x-8 text-xl max-sm:hidden">
          {socialInfo.map((mediaInfo) => (
            <a href={mediaInfo.link} key={mediaInfo.link} target="_blank">
              <FontAwesomeIcon
                icon={mediaInfo.icon}
                className="p-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
              />
            </a>
          ))}
        </div>
        {/* Mobile Social Links button for mobile */}
        <DropletDropdown className="max-sm:block hidden" />
      </div>
    </header>
  );
}
