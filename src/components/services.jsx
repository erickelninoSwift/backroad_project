import "../index.css";
import { Title } from "./sectionTitle";
import { Article } from "./articles";
import { ArticlesTitle } from "./data";

export function Services() {
  return (
    <section className="section services" id="services">
      <Title part1={"Our"} part2={"Services"} />
      <div className="section-center services-center">
        {ArticlesTitle.map((article) => {
          return <Article key={article.id} articleData={article} />;
        })}
      </div>
    </section>
  );
}
