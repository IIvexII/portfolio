import { profileImage } from "./assets";
import { Header } from "./components";
import { socialInfo, pageInfo, quotes } from "./constants";
import { HeroSection } from "./sections";

export default function App() {
  return (
    <>
      <Header name="zafeer" socialInfo={socialInfo} pageInfo={pageInfo} />
      <main className="snap-y snap-mandatory h-screen overflow-auto scroll-smooth">
        {/* Hero Section */}
        <HeroSection profileImage={profileImage} quote={quotes[0]} />

        {/* About me section */}
        <section className="snap-start flex justify-center bg-black text-white h-screen min-h-[630px] md:max-h-[660px]">
          <div className="px-8 h-full w-full flex justify-center items-center max-w-[1024px] max-sm:flex-col-reverse max-sm:space-y-20 max-sm:pb-16">
            <article>
              <h1 className="text-4xl">About Me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae sapien id dolor fermentum tincidunt. Nullam auctor, nunc
                nec fermentum tincidunt, nunc mi tincidunt orci, eget luctus
                odio libero vel turpis
              </p>
            </article>
            <img
              src={profileImage}
              alt="My Image"
              className="w-[500px] max-sm:w-[300px] select-none pointer-events-none"
            />
          </div>
        </section>
      </main>
    </>
  );
}
