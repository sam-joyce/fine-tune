import React from "react";
import { render } from "@testing-library/react";
import ContactInfo from "./ContactInfo";

describe("ContactInfo tests", () => {
  it("should render", () => {
    expect(render(<ContactInfo />)).toBeTruthy();
  });
});
