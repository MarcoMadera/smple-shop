import Stars from "./Stars";
import Price from "./Price";
import Discount from "./Discount";
import Link from "next/link";

export default function Card({
  slug,
  title,
  img,
  alt,
  stars,
  price,
  discount,
}) {
  return (
    <article>
      <div>
        <img src={img} alt={alt} />
        <Link href="/details/[slug]" as={`/details/${slug}`}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
        <Stars number={stars} />
        {discount && <Discount discount={discount} />}
        <Price price={price} discount={discount} />
      </div>
      <style jsx>{`
        div {
          position: relative;
        }
        img {
          width: 100%;
        }
        article {
          width: 300px;
          display: inline-grid;
          border-radius: 5px;
          background: #fff;
          padding: 10px;
        }
        h3 {
          text-align: center;
          font-size: 20px;
        }
      `}</style>
    </article>
  );
}
