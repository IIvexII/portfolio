import { profileImage } from "./assets";
import { Header } from "./components";
import { socialInfo, pageInfo } from "./constants";

export default function App() {
  return (
    <>
      <Header name="zafeer" socialInfo={socialInfo} pageInfo={pageInfo} />
      <main>
        {/* Hero Section */}
        <section className="flex justify-center bg-black text-white h-screen">
          <div className="px-8 h-full w-full flex justify-center items-center max-w-[1024px] max-sm:flex-col-reverse">
            {/* Quote */}
            <blockquote className="w-full text-5xl max-sm:h-full max-sm:text-3xl max-sm:text-center max-md:text-4xl">
              <span className="font-serif italic mr-3">"</span>
              <h1 className="inline font-extralight italic">
                <span className="bg-white text-black px-2 mr-3 not-italic font-mono">
                  Focus
                </span>
                is all we need to strive in this distracted world!
              </h1>
              <span className="font-serif italic ml-2">"</span>
            </blockquote>

            {/* My Image */}
            <article className="h-full w-full flex justify-end items-center max-sm:mt-24">
              <img src={profileImage} alt="My Image" className="w-[500px] " />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
