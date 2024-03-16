import { highlightQuote } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection({ profileImage, quote }) {
  return (
    <section className="snap-start flex justify-center bg-black text-white h-screen min-h-[630px] md:max-h-[660px]">
      <div className="px-8 h-full w-full flex justify-center items-center max-w-[1024px] max-sm:flex-col-reverse max-sm:space-y-20 max-sm:pb-16">
        {/* Quote and call to action button*/}
        <div className="flex flex-col space-y-0 max-sm:items-center max-sm:h-full">
          {/* Quote */}
          <blockquote className="text-5xl text-justify hyphens-auto max-sm:text-3xl max-sm:text-center max-md:text-4xl select-none hover:scale-105 transition duration-300 ease-in-out">
            <span className="font-serif italic mr-1">"</span>
            <h1 className="inline font-extralight italic">
              {highlightQuote(
                quote,
                "bg-white text-black not-italic font-mono"
              )}
            </h1>
            <span className="font-serif italic">"</span>
            <p className="text-left text-sm font-extralight mt-5 max-sm:text-center">
              ―{quote.reference}
            </p>
          </blockquote>

          {/* call to action button */}
          <div className="group/about-me h-full w-40 relative top-12 cursor-pointer select-none">
            <div className="bg-white text-black px-8 py-3 rounded-full flex justify-between items-center hover:bg-gray-50 hover:scale-105 transition duration-200 ease-in-out">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="group-hover/about-me:translate-y-1 transition-transform duration-500 ease-in-out"
              />
              <p>About Me</p>
            </div>
          </div>
        </div>

        {/* My Image */}
        <article className="h-full w-full flex justify-center items-center">
          <img
            src={profileImage}
            alt="My Image"
            className="w-[500px] max-sm:w-[300px] select-none pointer-events-none"
          />
        </article>
      </div>
    </section>
  );
}
