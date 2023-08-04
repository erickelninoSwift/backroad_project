import "../index.css";
import { Title } from "./sectionTitle";
import { featuredData } from "./data";
import { FeatureCard } from "./featureCard";

export function Featured() {
  return (
    <>
      <Title part1={"feature"} part2={"Tours"} />
      <div className="section-center featured-center">
        {featuredData.map((featured) => {
          return <FeatureCard key={featured.id} article={featured} />;
        })}
      </div>
    </>
  );
}
