import { render, screen } from "@testing-library/react";
import SinglePet from "../../../components/model/SinglePet";

const mockPet = {
  id: "-1",
  name: "Testy",
  address: "here",
  type: "Dog",
};

describe("SinglePet", () => {
  test("The component render correctly", () => {
    const { container } = render(<SinglePet item={mockPet} />);
    expect(container).toMatchSnapshot();
  });

  test("The component shows the pet name", async () => {
    render(<SinglePet item={mockPet} />);
    const element = await screen.findByText(mockPet.name);
    expect(element).toBeDefined();
  });

  test("The component shows the pet address", async () => {
    render(<SinglePet item={mockPet} />);
    const element = await screen.findByText(mockPet.address);
    expect(element).toBeDefined();
  });

  // TODO: Implement...
  test("The component shows the pet type", () => {});
});
