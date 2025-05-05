import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";

const cartItems = [
  {
    id: 0,
    title: "TestTitle",
    description: "Jeans",
    price: 10,
    count: 1,
    image: "Testing image",
  },
  {
    id: 1,
    title: "TestTitle2",
    description: "Coat",
    price: 12,
    count: 2,
    image: "Testing image",
  },
];
describe("Cart", () => {
  it("Renders Cart is empty if it is empty", () => {
    render(
      <BrowserRouter>
        <Cart cartItems={[]} />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Your Cart is Empty" }),
    ).toBeInTheDocument();
  });
  it("Renders Cart Items when cartItems passed in", async () => {
    render(
      <BrowserRouter>
        <Cart cartItems={cartItems} />
      </BrowserRouter>,
    );
    expect(await screen.findByText("TestTitle2")).toBeInTheDocument();
  });
  it("Doesnt render a price if the cart is empty", () => {
    render(
      <BrowserRouter>
        <Cart cartItems={[]} />
      </BrowserRouter>,
    );
    expect(screen.queryByRole("priceTotal")).not.toBeInTheDocument();
  });
  it("Renders the price based on the items in the cart and their count", async () => {
    render(
      <BrowserRouter>
        <Cart cartItems={cartItems} />
      </BrowserRouter>,
    );
    expect(await screen.findByText(/34/)).toBeInTheDocument();
  });
});
