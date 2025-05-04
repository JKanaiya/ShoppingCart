import { describe, it, vi, expect } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { Home } from "../components/Home.jsx";
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
vi.mock("../components/Shop", () => {
  return {
    default: () => <div>Shop</div>,
  };
});

vi.mock("../components/Cart", () => {
  return {
    default: ({ cartItems, editItemCount, deleteItem }) => (
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <button onClick={() => editItemCount(item, 1)}>
              Add 1 {item.description}
            </button>
            <button onClick={() => editItemCount(item, 0)}>
              Remove 1 {item.description}
            </button>
            <button onClick={() => deleteItem(item)}>
              Delete {item.description}
            </button>
          </div>
        ))}
        {cartItems.map((item) => (
          <div key={item.id}>
            <h4>
              {item.description}:{item.count}
            </h4>
          </div>
        ))}
      </div>
    ),
  };
});

describe("Home Component", () => {
  it("Renders the Home Page", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
  it("Increments the count of an item if it already exists when adding the item to the cart", async () => {
    const user = userEvent.setup();
    await act(() => render(<Home initialItems={cartItems} />));
    const addButton = screen.getByRole("button", { name: "Add 1 Jeans" });
    await act(async () => await user.click(addButton));
    const { rerender } = render(<Home initialItems={cartItems} />);
    act(() => rerender(<Home />));
    expect(await screen.findByText("Jeans:2")).toBeInTheDocument();
  });
  it("Decrements the count of an item if it already exists when adding the item to the cart", async () => {
    const user = userEvent.setup();
    await act(() => render(<Home initialItems={cartItems} />));
    const reduceButton = screen.getByRole("button", { name: "Remove 1 Coat" });
    await act(async () => user.click(reduceButton));
    const { rerender } = render(<Home initialItems={cartItems} />);
    act(() => rerender(<Home />));
    expect(screen.getByText("Coat:1")).toBeInTheDocument();
  });
  it("Removes an Item", async () => {
    const user = userEvent.setup();
    await act(() => render(<Home initialItems={cartItems} />));
    const deleteButton = screen.getByRole("button", { name: "Delete Coat" });
    await act(async () => user.click(deleteButton));
    const { rerender } = render(<Home />);
    act(() => rerender(<Home />));
    expect(screen.queryByText(/coat/i)).not.toBeInTheDocument();
  });
});
