import { render, screen } from "@testing-library/react";
import SingleResidence from "../../../components/model/SingleResidence";

const mockResidence = {
  id: "-1",
  street: "here",
  extNumber: "000",
  address: "here 000",
};

describe("SingleResidence", () => {
  test("The component render correctly", () => {
    const { container } = render(<SingleResidence item={mockResidence} />);
    expect(container).toMatchSnapshot();
  });
});
