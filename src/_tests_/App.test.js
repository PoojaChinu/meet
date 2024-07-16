// src/__tests__/App.test.js

import { render } from "@testing-library/react";
import App from "../App";
// import { act } from "react";

describe("<App /> component", () => {
  test("renders list of events", () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });
});
