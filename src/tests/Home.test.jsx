import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import userEvent from "@testing-library/user-event";

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

vi.mock(
  "../components/Cart",
  () =>
    ({ cartItems, editItemCount, deleteItem }) => (
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <button onClick={() => editItemCount(item)}>
              Add 1 {item.description}
            </button>
            <button onClick={() => editItemCount(item)}>
              Remove 1 {item.description}
            </button>
            <button onClick={() => deleteItem(item)}>Delete Item</button>
          </div>
        ))}
        {cartItems.map((item) => (
          <div key={item.id}>
            <h4 role={item.description}>{item.count}</h4>;
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
  it("Adds an item to the cartItems list on button click", async () => {
    const user = userEvent.setup();
    render(<Home initialItems={cartItems} />);
    const addButton = screen.getByRole("button", { name: "Add 1 Jeans" });
    await user.click(addButton);
    expect(screen.getByRole("Jeans", { name: 2 })).toBeInTheDocument();
  });
});
