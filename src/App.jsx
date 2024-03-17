import { profileImage } from "./assets";
import { Header } from "./components";
import { socialInfo, pageInfo, quotes } from "./constants";
import { AboutSection, HeroSection } from "./sections";

export default function App() {
  return (
    <>
      <Header name="zafeer" socialInfo={socialInfo} pageInfo={pageInfo} />
      <main className="snap-y snap-mandatory max-md:snap-proximity h-screen overflow-auto scroll-smooth">
        {/* Hero Section */}
        <HeroSection profileImage={profileImage} quote={quotes[0]} />

        {/* About me section */}
        <AboutSection />
      </main>
    </>
  );
}
