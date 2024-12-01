import { render, screen } from "@testing-library/react";
import SingleResident from "../../../components/model/SingleResident";

const mockResident = {
  id: "-1",
  firstName: "Test",
  lastName: "Tester",
  address: "here",
  residence: "here 000",
  email: "test@mail.com",
  phoneNumber: "345345",
};

describe("SingleResident", () => {
  test("The component render correctly", () => {
    const { container } = render(<SingleResident item={mockResident} />);
    expect(container).toMatchSnapshot();
  });
});
