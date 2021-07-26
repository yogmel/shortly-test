import { Button, ButtonType } from "./Button";
import { render, screen } from "@testing-library/react";

test("should render correctly", async () => {
  render(<Button type={ButtonType.Primary}>Teste</Button>);

  expect(screen.getByText("Teste")).toBeTruthy();
});
