import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop";

describe("Shop", () => {
  it("Renders a card with the desired format", async () => {
    const fetcherWithFetch = vi.fn(() => {
      return [
        {
          id: 0,
          title: "TestTitle",
          description: "Testing description",
          price: "Testing description",
          image: "Testing image",
        },
      ];
    });
    render(<Shop fetcherWithFetch={fetcherWithFetch} />);
    expect(screen.getByTestId("testing").innerText).toMatch(/testtitle/i);
  });
});
