import { useState } from "react";
import Shop from "./Shop";
import Cart from "./Cart";
import fetcherWithFetch from "../fetcherWithFetch";
import Navigation from "./Navigation";
import GlobalStyle from "./styles/GlobalStyle";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const HomeStyle = styled.div`
  padding: 1%;
`;

const Home = function ({ initialItems = [], initPage }) {
  const [cartItems, setCartItems] = useState(initialItems);

  const addItemToCart = function (item) {
    cartItems.find((a) => a.id == item.id)
      ? editItemCount(item, 1)
      : setCartItems([...cartItems, item]);
  };

  const editItemCount = function (item, val) {
    const b = cartItems;
    b.find((i) => i.id == item.id).count = val;
    setCartItems([...b]);
  };

  const [searchQuery, setSearchQuery] = useState(null);

  const deleteItem = function (item) {
    setCartItems(
      cartItems.toSpliced(
        cartItems.findIndex((n) => n.id == item.id),
        1,
      ),
    );
  };

  const { name } = useParams();

  return (
    <div>
      <GlobalStyle />
      <Navigation cartItems={cartItems} setSearchQuery={setSearchQuery} />
      {initPage ? (
        <Cart
          cartItems={cartItems}
          editItemCount={editItemCount}
          deleteItem={deleteItem}
        />
      ) : name == "cart" ? (
        <Cart
          cartItems={cartItems}
          editItemCount={editItemCount}
          deleteItem={deleteItem}
        />
      ) : (
        <Shop
          addItemToCart={addItemToCart}
          fetcherWithFetch={fetcherWithFetch}
          searchQuery={searchQuery}
        />
      )}
    </div>
  );
};

export default Home;
