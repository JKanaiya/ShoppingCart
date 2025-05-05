import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop";
import { act } from "@testing-library/react";

const fetcherWithFetch = vi.fn(() => {
  return [
    {
      id: 0,
      title: "TestTitleJeans",
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
});
describe("Shop", () => {
  it("Renders a card with the desired format", async () => {
    await act(async () => render(<Shop fetcherWithFetch={fetcherWithFetch} />));
    expect(
      screen.getByRole("heading", { name: "TestTitleJeans" }),
    ).toBeInTheDocument();
  });
  it("Only shows items with descriptions that contain the searchQuery", async () => {
    await act(async () =>
      render(
        <Shop searchQuery={"Jeans"} fetcherWithFetch={fetcherWithFetch} />,
      ),
    );
    expect(screen.queryByText(/coat/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/Jeans/i)).toBeInTheDocument();
  });
});
