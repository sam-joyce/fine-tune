import React from "react";
import { render } from "@testing-library/react";
import GetInTouch from "./GetInTouch";

describe("GetInTouch tests", () => {
  it("should render", () => {
    expect(render(<GetInTouch />)).toBeTruthy();
  });
});
