import { render, screen } from "@testing-library/react";
import Residences from "../../../components/containers/Residences";

describe("Residences", () => {
  test("The component render correctly", () => {
    const { container } = render(<Residences />);
    expect(container).toMatchSnapshot();
  });

  test("Should have only one heading element", async () => {
    render(<Residences />);

    // Get all elements with a 'heading' role
    const elements = await screen.findAllByRole("heading");
    expect(elements.length === 1).toBe(true);
  });

  test("The word 'Residences' should be rendered at least once", async () => {
    render(<Residences />);

    // Find all elements with the word 'Pets' on it
    const elements = await screen.findAllByText("Residences");
    expect(elements.length > 0).toBe(true);
  });
});
