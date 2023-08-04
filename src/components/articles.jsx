export function Article({ articleData }) {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={articleData.serviceIcon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{articleData.title}</h4>
        <p className="service-text">{articleData.text}</p>
      </div>
    </article>
  );
}
