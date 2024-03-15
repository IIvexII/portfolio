import { Header } from "./components";
import { socialInfo, pageInfo } from "./constants";

export default function App() {
  return (
    <>
      <Header name="zafeer" socialInfo={socialInfo} pageInfo={pageInfo} />
      <main></main>
    </>
  );
}
