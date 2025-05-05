import { describe, it, vi, expect } from "vitest";
import { act, render, screen } from "@testing-library/react";
import Home from "../components/Home.jsx";
import userEvent from "@testing-library/user-event";
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
vi.mock("../components/Navigation", () => {
  return {
    default: () => <p>Navigation</p>,
  };
});
vi.mock("../components/Cart", () => {
  return {
    default: ({ cartItems, editItemCount, deleteItem }) => (
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <button onClick={() => editItemCount(item, item.count + 1)}>
              Add 1 {item.description}
            </button>
            <button onClick={() => editItemCount(item, item.count - 1)}>
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
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Increments the count of an item if it already exists when adding the item to the cart", async () => {
    const user = userEvent.setup();
    await act(() =>
      render(
        <BrowserRouter>
          <Home initialItems={cartItems} initPage={"cart"} />
        </BrowserRouter>,
      ),
    );
    const addButton = screen.getByRole("button", { name: "Add 1 Jeans" });
    await act(async () => await user.click(addButton));
    expect(await screen.findByText("Jeans:2")).toBeInTheDocument();
  });
  it("Decrements the count of an item if it already exists when adding the item to the cart", async () => {
    const user = userEvent.setup();
    await act(() =>
      render(
        <BrowserRouter>
          <Home initialItems={cartItems} initPage={"cart"} />
        </BrowserRouter>,
      ),
    );
    const reduceButton = screen.getByRole("button", { name: "Remove 1 Coat" });
    await act(async () => user.click(reduceButton));
    expect(screen.getByText("Coat:1")).toBeInTheDocument();
  });
  it("Removes an Item", async () => {
    const user = userEvent.setup();
    await act(() =>
      render(
        <BrowserRouter>
          <Home initialItems={cartItems} initPage={"cart"} />
        </BrowserRouter>,
      ),
    );
    const deleteButton = screen.getByRole("button", { name: "Delete Coat" });
    await act(async () => user.click(deleteButton));
    expect(screen.queryByText(/coat/i)).not.toBeInTheDocument();
  });
});
