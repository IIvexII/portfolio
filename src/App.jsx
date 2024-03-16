import { profileImage } from "./assets";
import { Header } from "./components";
import { socialInfo, pageInfo, quotes } from "./constants";
import { HeroSection } from "./sections";

export default function App() {
  return (
    <>
      <Header name="zafeer" socialInfo={socialInfo} pageInfo={pageInfo} />
      <main>
        {/* Hero Section */}
        <HeroSection profileImage={profileImage} quote={quotes[0]} />
      </main>
    </>
  );
}
