import { render, screen } from "@testing-library/react";
import Pets from "../../../components/containers/Pets";
import useDataSource from "../../../hooks/useDataSource";

describe("Pets", () => {
  test("The component render correctly", () => {
    const { container } = render(<Pets />);
    expect(container).toMatchSnapshot();
  });

  test("Should have only one heading element", async () => {
    render(<Pets />);

    // Get all elements with a 'heading' role
    const elements = await screen.findAllByRole("heading");
    expect(elements.length === 1).toBe(true);
  });

  test("The word 'Pets' should be rendered at least once", async () => {
    render(<Pets />);

    // Find all elements with the word 'Pets' on it
    const elements = await screen.findAllByText("Pets");
    expect(elements.length > 0).toBe(true);
  });

  test("The useDataSource hook should be called one time", () => {});
});
