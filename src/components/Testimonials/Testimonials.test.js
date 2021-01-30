import React from "react";
import { render } from "@testing-library/react";
import Testimonials from "./Testimonials";

describe("Testimonials tests", () => {
  it("should render", () => {
    expect(render(<Testimonials />)).toBeTruthy();
  });
});
