import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Calculator from "./Calculator/Calculator";

describe("App", () => {
  let component;
  beforeEach(() => (component = shallow(<App />)));
  //   generic tests (snapshot, shallow render)
  it("should render correctly", () => expect(component).toMatchSnapshot());

  it("should render a <div />", () => {
    expect(component.find("div").length).toEqual(1);
  });

  it("should render the Calculator Component", () => {
    expect(component.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
