import styled from "styled-components";
import { Card } from "./styles/Card.styled";
import CardContainer from "./styles/CardContainer.styled";
import { Img } from "./styles/Img.styled";
import { Button } from "./styles/Button.styled";
import StyLink from "./styles/StyLink.styled";
import Input from "./styles/Input.styled";

const StyledCart = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1%;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const PriceView = styled.div`
  margin: 20px 0;
  display: flex;
  place-items: center;
  flex-direction: column;
  row-gap: 10px;
`;

const Cart = function ({ cartItems, editItemCount }) {
  return (
    <StyledCart>
      <CardContainer>
        {cartItems.length == 0 ? (
          <h2>Your Cart is Empty</h2>
        ) : (
          cartItems.map((item) => (
            <Card key={item.id}>
              <h4 role="title">{item.title}</h4>
              <Img src={item.image} />
              <input
                type="number"
                id={item.id}
                min={1}
                style={{
                  display: "flex",
                  placeContent: "center",
                  textAlign: "center",
                }}
                value={item.count}
                onChange={() => {
                  editItemCount(
                    item,
                    Number(document.getElementById(item.id).value),
                  );
                }}
              ></input>
              <p>Price: {item.price}</p>
            </Card>
          ))
        )}
      </CardContainer>
      <PriceView>
        <h2>Price Calculation</h2>
        <hr style={{ width: "90%", margin: "10px 0 " }} />
        <ul>
          {cartItems.map((prod) => (
            <li key={prod.id}>
              <h4>
                {prod.title} x {prod.count}
              </h4>
            </li>
          ))}
        </ul>
        <hr style={{ width: "90%", margin: "10px 0 " }} />
        {cartItems.length != 0 && (
          <h3 role="priceTotal">
            {" "}
            Total: $
            {cartItems
              .reduce(
                (previous, current) => ({
                  count: 1,
                  price:
                    previous.count * previous.price +
                    current.count * current.price,
                }),
                {
                  count: 1,
                  price: 0,
                },
              )
              .price.toFixed(2)}
          </h3>
        )}
        <StyLink to="/home">Go Back to Shop</StyLink>
        <Button>Confirm Purchase</Button>
      </PriceView>
    </StyledCart>
  );
};

export default Cart;
