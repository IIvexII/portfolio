import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropletDropdown, Hamburger } from "../components";

export default function Header({ name, socialInfo, pageInfo }) {
  return (
    <header className="fixed py-3 px-8 pb-4 w-full flex justify-center items-center bg-white bg-opacity-95 firefox:bg-opacity-95 border border-gray-200">
      <div className="w-full flex justify-between items-center max-w-[1024px]">
        {/* Navigation Hamburger for mobiles */}
        <Hamburger pageInfo={pageInfo} />

        {/* My Name as Logo */}
        <a href="/" className="cursor-pointer text-center">
          <span className="text-4xl max-sm:text-3xl">{name}</span>
          <span className="text-6xl leading-[0]">.</span>
        </a>

        {/* Navigation icons */}
        <nav className="flex items-center px-8 space-x-8 text-xl max-sm:hidden">
          {pageInfo.map((page) => (
            <a
              href={page.link}
              key={page.link}
              className="flex flex-col justify-center items-center py-3 px-3 hover:bg-black hover:text-white rounded-full transition-all duration-300"
            >
              <FontAwesomeIcon icon={page.icon} className="w-5" />
            </a>
          ))}
        </nav>

        {/* Mobile Social Links button for mobile */}
        <DropletDropdown socialInfo={socialInfo} />
      </div>
    </header>
  );
}
