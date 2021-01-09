import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Hello from "../src";

configure({ adapter: new Adapter() });

test("test -1", () => {
  const wrapper = mount(<Hello />);
  expect(wrapper.find(".hello").text()).toEqual("hello");
});
