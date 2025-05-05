import useSWR from "swr";
import styled from "styled-components";
import { Card } from "./styles/Card.styled.js";
import { Img } from "./styles/Img.styled.js";
import { Button } from "./styles/Button.styled.js";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  background-color: gray;
  grid-gap: 5px;
`;

const Shop = function ({ searchQuery, fetcherWithFetch, addItemToCart }) {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWR("https://fakestoreapi.com/products", fetcherWithFetch);
  const query = new RegExp(searchQuery, "i");
  return (
    <CardContainer>
      {loading && <div>Loading...</div>}
      {error && <div>Error = {error}</div>}
      {data &&
        data.map((product) => {
          if (searchQuery) {
            return (
              (product.description.search(query) !== -1 ||
                product.title.search(query) !== -1) && (
                <Card key={product.id}>
                  <h3>{product.title}</h3>
                  <Img src={product.image} alt={product.description} />
                  <input
                    type="number"
                    placeholder={product.count}
                    id={product.id}
                    min={0}
                  ></input>
                  <p>Price: {product.price}</p>
                  <Button
                    onClick={() =>
                      addItemToCart({
                        ...product,
                        count: Number(
                          document.getElementById(product.id).value,
                        ),
                      })
                    }
                  >
                    Add to Cart
                  </Button>
                </Card>
              )
            );
          } else {
            return (
              <Card key={product.id}>
                <h3>{product.title}</h3>
                <Img src={product.image} alt={product.description} />
                <input
                  type="number"
                  placeholder={product.count}
                  id={product.id}
                  min={0}
                ></input>
                <Button
                  onClick={() =>
                    addItemToCart({
                      ...product,
                      count: Number(document.getElementById(product.id).value),
                    })
                  }
                >
                  Add to Cart
                </Button>
                <p>Price: {product.price}</p>
              </Card>
            );
          }
        })}
    </CardContainer>
  );
};

export default Shop;
