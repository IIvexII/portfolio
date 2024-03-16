import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { profileImage } from "./assets";
import { Header } from "./components";
import { socialInfo, pageInfo, quotes } from "./constants";
import {
  faArrowDown,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

function highlightQuote(quote, highlightClassName) {
  return quote.text.split("{").map((part, index) => {
    if (index === 0) {
      return part;
    }
    const [highlightedPart, remainingPart] = part.split("}");
    return (
      <span key={index}>
        <span className={highlightClassName}>{highlightedPart}</span>
        {remainingPart}
      </span>
    );
  });
}

export default function App() {
  return (
    <>
      <Header name="zafeer" socialInfo={socialInfo} pageInfo={pageInfo} />
      <main>
        {/* Hero Section */}
        <section className="flex justify-center bg-black text-white h-screen min-h-[630px] md:max-h-[660px]">
          <div className="px-8 h-full w-full flex justify-center items-center max-w-[1024px] max-sm:flex-col-reverse max-sm:space-y-20 max-sm:pb-16">
            {/* Quote and call to action button*/}
            <div className="flex flex-col space-y-0 max-sm:items-center max-sm:h-full">
              {/* Quote */}
              <blockquote className="text-5xl text-justify hyphens-auto max-sm:text-3xl max-sm:text-center max-md:text-4xl select-none">
                <span className="font-serif italic mr-1">"</span>
                <h1 className="inline font-extralight italic">
                  {highlightQuote(
                    quotes[0],
                    "bg-white text-black not-italic font-mono"
                  )}
                </h1>
                <span className="font-serif italic">"</span>
                <p className="text-left text-sm font-extralight mt-5 max-sm:text-center">
                  ―{quotes[0].reference}
                </p>
              </blockquote>

              {/* call to action button */}
              <div className="h-full w-40 relative top-12 cursor-pointer select-none">
                <div className="bg-white text-black px-8 py-3 rounded-full flex justify-between items-center">
                  <FontAwesomeIcon icon={faArrowDown} /> About Me
                </div>
              </div>
            </div>

            {/* My Image */}
            <article className="h-full w-full flex justify-center items-center">
              <img
                src={profileImage}
                alt="My Image"
                className="w-[500px] max-sm:w-[300px]"
              />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
