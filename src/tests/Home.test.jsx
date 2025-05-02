import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

vi.mock(
  "../components/Cart.jsx",
  () =>
    ({ cartItems, editItemCount, deleteItem }) => (
      <div key={cartItems}>
        {cartItems.map((item) => (
          <div>
            <button onClick={() => editItemCount(item)}>Add an Item</button>
            <button onClick={() => editItemCount(item)}>
              Reduce Item Count
            </button>
            <button onClick={() => deleteItem(item)}>Delete Item</button>
          </div>
        ))}
      </div>
    ),
);

describe("Home Component", () => {
  it("Renders the Home Page", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
