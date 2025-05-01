import useSWR from "swr";

const Shop = function ({ fetcherWithFetch, addItemToCart }) {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWR("https://fakestoreapi.com/products", fetcherWithFetch);

  console.log(data);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error = {error}</div>}
      {data &&
        data.map((product) => {
          return (
            <div key={product.id}>
              <h3 data-testid="testing">{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <img src={product.image} alt={product.description} />
              <button onClick={() => addItemToCart(product)}>
                Add to Cart
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Shop;
