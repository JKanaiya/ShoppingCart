import useSWR from "swr";
import { fetcherWithFetch } from "../fetcherWithFetch";

function Shop() {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWR("https://fakestoreapi.com/products", fetcherWithFetch);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error = {error}</div>}
      {data &&
        data.map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <img src={product.image} alt={product.description} />
              <button>Add to Cart</button>
            </div>
          );
        })}
    </div>
  );
}

export default Shop;
