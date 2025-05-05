import { useState } from "react";
import Shop from "./Shop";
import Cart from "./Cart";
import fetcherWithFetch from "../fetcherWithFetch";
import Navigation from "./Navigation";
import GlobalStyle from "./styles/GlobalStyle";

const Home = function ({ initialItems = [] }) {
  const [cartItems, setCartItems] = useState(initialItems);

  const addItemToCart = function (item) {
    cartItems.find((a) => a.id == item.id)
      ? editItemCount(item, 1)
      : setCartItems([...cartItems, item]);
  };

  const editItemCount = function (item, opt) {
    const b = cartItems;
    opt == 1
      ? b.find((n) => n.id == item.id).count++
      : b.find((n) => n.id == item.id).count--;
    setCartItems(b);
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

  return (
    <div>
      <GlobalStyle />
      <Navigation cartItems={cartItems} setSearchQuery={setSearchQuery} />
      <Shop
        addItemToCart={addItemToCart}
        fetcherWithFetch={fetcherWithFetch}
        searchQuery={searchQuery}
      />
      <Cart
        cartItems={cartItems}
        editItemCount={editItemCount}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default Home;
