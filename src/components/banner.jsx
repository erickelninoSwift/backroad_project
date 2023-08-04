export function Banner({ bannerTitle, bannerDecr, buttonTitle }) {
  return (
    <div className="hero-banner">
      <h1>{bannerTitle}</h1>
      <p>{bannerDecr}</p>
      <a href="#tours" className="btn hero-btn">
        {buttonTitle}
      </a>
    </div>
  );
}
