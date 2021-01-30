import React from "react";
import { render } from "@testing-library/react";
import PageIntro from "./PageIntro";

describe("PageIntro tests", () => {
  it("should render", () => {
    expect(render(<PageIntro />)).toBeTruthy();
  });
});
