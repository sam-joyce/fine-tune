import React from "react";
import { render } from "@testing-library/react";
import Testimonial from "./Testimonial";

describe("Testimonial tests", () => {
  it("should render", () => {
    expect(render(<Testimonial />)).toBeTruthy();
  });
});
