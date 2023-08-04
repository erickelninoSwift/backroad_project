export function Title({ part1, part2 }) {
  return (
    <div className="section-title">
      <h2>
        {part1} <span>{part2}</span>
      </h2>
    </div>
  );
}
