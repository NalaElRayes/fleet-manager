import React from "react";
import ReactDOM from "react-dom";
import VehicleRow from "./vehicleRow";

import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VehicleRow></VehicleRow>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<VehicleRow></VehicleRow>);
  getByTestId("vehicleRow");
});
