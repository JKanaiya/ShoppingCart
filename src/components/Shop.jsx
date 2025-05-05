import useSWR from "swr";
import { Card } from "./styles/Card.styled.js";
import { Img } from "./styles/Img.styled.js";
import { Button } from "./styles/Button.styled.js";
import useSWRImmutable from "swr/immutable";
import CardContainer from "./styles/CardContainer.styled.js";
import styled from "styled-components";

const ShopStyle = styled.div`
  padding: 1%;
`;

const Shop = function ({ searchQuery, fetcherWithFetch, addItemToCart }) {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWRImmutable("https://fakestoreapi.com/products", fetcherWithFetch);
  const query = new RegExp(searchQuery, "i");
  return (
    <ShopStyle>
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
                    <h4>{product.title}</h4>
                    <Img src={product.image} alt={product.description} />
                    <input
                      type="number"
                      placeholder={product.count}
                      id={product.id}
                      min={1}
                    ></input>
                    <p>Price: {product.price}</p>
                    <Button
                      onClick={() => {
                        console.log(document.getElementById(product.id));
                        addItemToCart({
                          ...product,
                          count: Number(
                            document.getElementById(product.id).value == 0
                              ? product.count
                              : document.getElementById(product.id).value,
                          ),
                        });
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Card>
                )
              );
            } else {
              return (
                <Card key={product.id}>
                  <h4>{product.title}</h4>
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
                        count: Number(
                          document.getElementById(product.id).value == 0
                            ? product.count
                            : document.getElementById(product.id).value,
                        ),
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
    </ShopStyle>
  );
};

export default Shop;
