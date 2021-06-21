import React from "react";
import ReactDOM from "react-dom";
import VehicleRow from "./vehicleRow";

import { render, cleanup, getByTestId } from "@testing-library/react";

import "@testing-library/jest-dom";
import { IconButton } from "@material-ui/core";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VehicleRow></VehicleRow>, div);
});

it("renders vehicleRow correctly", () => {
  const { getByTestId } = render(<VehicleRow></VehicleRow>);
  const row = getByTestId("vehicleRow");
  expect(row).toBeTruthy();
});

it("renders colapsableRow correctly", () => {
  const { getByTestId } = render(<VehicleRow></VehicleRow>);
  const row = getByTestId("collapsableRow");
  expect(row).toBeTruthy();
});

it("renders iconBtn correctly", () => {
  const { getByTestId } = render(<IconButton />);
  const btn = getByTestId("iconBtn");
  expect(btn).toBeTruthy();
});

describe("click button", () => {
  it("onclick", () => {});
});
