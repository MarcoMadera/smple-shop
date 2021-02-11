export default function Price({ price, discount }) {
  return (
    <div>
      {discount && <del>${price}</del>}
      <span>
        ${discount ? Math.round(price - (price / 100) * discount) : price}
      </span>
      <style jsx>{`
        div {
          display: flex;
          column-gap: 5px;
          justify-content: center;
        }
        del {
          color: #ccc;
        }
        span {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
