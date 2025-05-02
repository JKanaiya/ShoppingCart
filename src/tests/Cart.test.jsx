import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Cart from "../components/Cart";

describe("Cart", () => {
  it("Renders Cart is empty if it is empty", () => {
    render(<Cart cartItems={[]} />);
    expect(
      screen.getByRole("heading", { name: "Your Cart is Empty" }),
    ).toBeInTheDocument();
  });
  it("Renders Cart Items when cartItems passed in", () => {
    const cartItems = [
      {
        id: 0,
        title: "TestTitle",
        description: "Jeans",
        price: "Testing price",
        image: "Testing image",
      },
      {
        id: 1,
        title: "TestTitle2",
        description: "Coat",
        price: "Testing price",
        image: "Testing image",
      },
    ];
    render(<Cart cartItems={cartItems} />);
    expect(screen.getByText(/testtitle2/i)).toBeInTheDocument();
  });
});
