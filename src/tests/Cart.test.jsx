import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../components/Cart";

describe("Cart", () => {
  it("Renders Cart is empty if it is empty", () => {
    const { container } = render(<Cart />);
    expect(container).toMatchSnapshot();
  });
});
