import React from "react";
import { shallow } from "enzyme";
import Display from "./Display";

describe("Display", () => {
  let component;
  beforeEach(() => (component = shallow(<Display displayValue={""} />)));

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render a <div />", () => {
    expect(component.find("div").length).toEqual(1);
  });

  it("should render the value of displayValue", () => {
    component.setProps({ displayValue: "test" });
    expect(component.text()).toEqual("test");
  });
});
