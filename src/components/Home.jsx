import { useState } from "react";
import Shop from "./Shop";
import Cart from "./Cart";
import fetcherWithFetch from "../fetcherWithFetch";

export const Home = function ({ initialItems = [] }) {
  const [cartItems, setCartItems] = useState(initialItems);

  const addItemToCart = function (item) {
    setCartItems([...cartItems, item]);
  };

  const editItemCount = function (item, opt) {
    const b = cartItems;
    opt == 1
      ? b.find((n) => n.id == item.id).count++
      : b.find((n) => n.id == item.id).count--;
    setCartItems(b);
  };

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
