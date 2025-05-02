import useSWR from "swr";

const Shop = function ({ searchQuery, fetcherWithFetch, addItemToCart }) {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWR("https://fakestoreapi.com/products", fetcherWithFetch);
  const query = new RegExp(searchQuery, "i");
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error = {error}</div>}
      {data &&
        data.map((product) => {
          if (searchQuery) {
            product.description.search(query) != -1 && (
              <div key={product.id}>
                <h3>{product.title}</h3>
                <p role="description">{product.description}</p>
                <p>Price: {product.price}</p>
                <img src={product.image} alt={product.description} />
                <button onClick={() => addItemToCart(product)}>
                  Add to Cart
                </button>
              </div>
            );
          } else {
            return (
              <div key={product.id}>
                <h3>{product.title}</h3>
                <p role="description">{product.description}</p>
                <p>Price: {product.price}</p>
                <img src={product.image} alt={product.description} />
                <button onClick={() => addItemToCart(product)}>
                  Add to Cart
                </button>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Shop;
