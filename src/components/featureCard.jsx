export function FeatureCard({ article }) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={article.image} className="tour-img" alt="" />
        <p className="tour-date">{article.date}</p>
      </div>
      <div className="tour-info">
        <h4>{article.title}</h4>
        <p>{article.description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {article.country}
          </p>
          <p>{article.noDays} Days</p>
          <p>from ${article.cost}</p>
        </div>
      </div>
    </article>
  );
}
