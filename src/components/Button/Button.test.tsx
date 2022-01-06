import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("should ...", () => {
    render(<Button label="Button" />);
    const element = screen.getByText(/Button/g);
    expect(element).toBeInTheDocument();
  });
});
