import "../index.css";
import { Banner } from "./banner";
import { bannerData } from "./data";

export function HeroBlock() {
  return (
    <section className="hero" id="home">
      <Banner
        bannerTitle={bannerData.bannerTitle}
        bannerDecr={bannerData.bannerDecr}
        buttonTitle={bannerData.buttonTitle}
      />
    </section>
  );
}
