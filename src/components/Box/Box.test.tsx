import { render, screen } from "@testing-library/react";
import Box from ".";

describe("Box", () => {
  test("Testando a renderização do componente main", () => {
    render(<Box tag="main" />);
    const elementTag = screen.getByRole("main");
    expect(elementTag).toBeInTheDocument();
  });
});
