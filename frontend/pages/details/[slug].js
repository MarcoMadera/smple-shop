const API_URL = "http://localhost:1337";

export default function Details({ product }) {
  return (
    <>
      <h1>{product.name}</h1>
      <img src={`${API_URL}${product.image.formats.medium.url}`} alt="" />
      <p>{product.content}</p>
      <style jsx>{`
        p {
          white-space: pre-wrap;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const data = await fetch(`${API_URL}/products/?slug=${slug}`);
  const [product] = await data.json();
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch(`${API_URL}/products/`);
  const products = await data.json();
  return {
    paths: products.map((product) => ({
      params: {
        slug: product.slug,
      },
    })),
    fallback: false,
  };
}
