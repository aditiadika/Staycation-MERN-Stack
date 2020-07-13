import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

test("should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.isDisabled")).toBeInTheDocument;
});
