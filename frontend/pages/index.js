import Card from "../components/card";

export default function Home({ products }) {
  const API_URL = "http://localhost:1337";
  return (
    <div>
      {products.map(({ id, slug, name, image, price, discount, stars }) => (
        <Card
          key={id}
          slug={slug}
          title={name}
          img={`${API_URL}${image.formats.medium.url}`}
          alt={image.alternativeText}
          stars={stars}
          price={price}
          discount={discount}
        />
      ))}
      <style jsx>{`
        div {
          display: flex;
          column-gap: 10px;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = "http://localhost:1337";
  const data = await fetch(`${API_URL}/products/`);
  const products = await data.json();
  return {
    props: {
      products,
    },
  };
}
