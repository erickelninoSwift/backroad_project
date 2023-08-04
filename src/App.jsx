import { Navbar } from "./components/navbar";
import { HeroBlock } from "./components/hero";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Footer } from "./components/footer";
import { Tours } from "./components/tours";

function App() {
  return (
    <>
      <Navbar />
      <HeroBlock />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
