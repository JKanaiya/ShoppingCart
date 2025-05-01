import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

// const assertItems = (expectedItems) => {
//   const itemsSpan = screen.getByTestId("items");
//   const itemsText = itemsSpan.innerHTML;
//   const actualItems = JSON.parse(itemsText);
//   expect(expectedItems).toEqual(actualItems);
// };

describe("Home Component", () => {
  it("Renders the Home Page", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  // it("Adds an item to the cart on ADD ITEM button click", () => {
  //   const { container } = render(<Home />);
  //
  //   act(() => {});
  // });
});
