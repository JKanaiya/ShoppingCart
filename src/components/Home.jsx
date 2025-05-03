import { useState } from "react";
import Shop from "./Shop";
import Cart from "./Cart";
import fetcherWithFetch from "../fetcherWithFetch";

const Home = function ({ initialItems = [] }) {
  const [cartItems, setCartItems] = useState(initialItems);

  const addItemToCart = function (item) {
    setCartItems([...cartItems, item]);
  };

  const editItemCount = function (item) {
    const b = cartItems;
    b.find((n) => n.id == item.id).count = item.count;
    setCartItems(b);
  };

  const deleteItem = function (item) {
    setCartItems(
      cartItems.toSpliced(cartItems.findIndex((n) => n.id == item.id)),
      1,
    );
  };

  return (
    <div>
      <h2>aaa</h2>
      <Shop addItemToCart={addItemToCart} fetcherWithFetch={fetcherWithFetch} />
      <Cart
        cartItems={cartItems}
        editItemCount={editItemCount}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default Home;
