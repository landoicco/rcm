import { render, screen } from "@testing-library/react";
import {
  AllResidents,
  ResidentSearchResult,
} from "../../../components/containers/Residents";

describe("AllResidents", () => {
  test("The component AllResidents render correctly", () => {
    const { container } = render(<AllResidents />);
    expect(container).toMatchSnapshot();
  });

  test("Should have only one heading element", async () => {
    render(<AllResidents />);

    // Get all elements with a 'heading' role
    const elements = await screen.findAllByRole("heading");
    expect(elements.length === 1).toBe(true);
  });

  test("The word 'Residents' should be rendered at least once", async () => {
    render(<AllResidents />);

    // Find all elements with the word 'Residents' on it
    const elements = await screen.findAllByText("Residents");
    expect(elements.length > 0).toBe(true);
  });
});

describe("ResidentSearchResult", () => {
  test("The component ResidentSearchResult render correctly", () => {});
});
