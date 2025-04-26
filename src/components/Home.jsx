import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>aaa</h2>
      <Outlet />
      <Link to="cart">Go to Cart</Link>
      <Link to="shop">Go to Shop</Link>
    </div>
  );
}

export default Home;
