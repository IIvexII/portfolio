import { useState, useEffect } from "react";
import { profileImage, wavyImage } from "./assets";
import { Header, Seperator } from "./components";
import { socialInfo, pageInfo, quotes } from "./constants";
import { AboutSection, HeroSection } from "./sections";

export default function App() {
  const [isSmallHight, setIsSmallHight] = useState(window.innerHeight < 630);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallHight(window.innerHeight < 630);
    };

    // add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallHight]);

  return (
    <>
      <Header name="zafeer" socialInfo={socialInfo} pageInfo={pageInfo} />
      <main
        className={`${
          !isSmallHight && "snap-y snap-mandatory"
        }  h-screen overflow-x-hidden scroll-smooth`}
      >
        {/* Hero Section */}
        <HeroSection profileImage={profileImage} quote={quotes[0]} />

        <Seperator />

        {/* About me section */}
        <AboutSection />
      </main>
    </>
  );
}
