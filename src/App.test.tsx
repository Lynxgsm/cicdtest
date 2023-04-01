import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("App test", async () => {
  render(<App />);
  expect(screen.queryByText("AILI FIDA Aliotti Christino")).toBeVisible();

  await userEvent.click(screen.getByText("count is 1"));
  expect(screen.queryByText("count is 1")).toBeVisible();
});
