import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Common/Display/Display";
import Keypad from "../Common/Keypad/Keypad";

describe("Calculator", () => {
  let component;
  beforeEach(() => (component = shallow(<Calculator />)));

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render a <div />", () => {
    expect(component.find("div").length).toEqual(1);
  });

  it("should render the Display component", () => {
    expect(
      component.containsAllMatchingElements([
        <Display displayValue={component.instance().state.displayValue} />,
        <Keypad
          callOperator={component.instance().callOperator}
          numbers={component.instance().state.numbers}
          operators={component.instance().state.operators}
          setOperator={component.instance().setOperator}
          updateDisplay={component.instance().updateDisplay}
        />
      ])
    ).toEqual(true);
  });
});
