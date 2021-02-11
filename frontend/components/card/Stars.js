import Star from "./icons/Star";

export default function Stars({ number }) {
  return (
    <div>
      {[...Array(5)].map((e, i) => (
        <Star
          key={i}
          color={i <= number - 1 ? "#efce4a" : "#000000"}
          width={18}
          height={18}
        />
      ))}
      <style jsx>{`
        div {
          text-align: center;
        }
        div :global(svg) {
          margin: 0 3px;
        }
      `}</style>
    </div>
  );
}
