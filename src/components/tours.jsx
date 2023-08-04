import "../index.css";
import { Featured } from "./featured";

export function Tours() {
  return (
    <section className="section" id="tours">
      <Title />
      <Featured />
    </section>
  );
}

function Title({ part1, part2 }) {
  return (
    <div className="section-title">
      <h2>
        {part1} <span>{part2}</span>
      </h2>
    </div>
  );
}
