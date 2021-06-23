import React from "react";
import ReactDOM from "react-dom";
import VehicleRow from "./vehicleRow";

import { render, cleanup, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { IconButton, TableCell } from "@material-ui/core";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

const TestWrapper = ({ children }) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);

it("renders vehicle data correctly if supplied", () => {
  const vehicle = {
    id: "1",
    name: "test1",
    fuelType: "fuel1",
    driver: "driver1",
    status: "status1",
  };
  const { getByTestId } = render(
    <TestWrapper>
      <VehicleRow {...vehicle} vehicle={vehicle} />
    </TestWrapper>
  );
  expect(screen.getByTestId("vehicleId").textContent).toBe(vehicle.id);
  expect(screen.getByTestId("vehicleName").textContent).toBe(vehicle.name);
  expect(screen.getByTestId("vehicleFuelType").textContent).toBe(
    vehicle.fuelType
  );
  expect(screen.getByTestId("vehicleDriver").textContent).toBe(vehicle.driver);
  expect(screen.getByTestId("vehicleStatus").textContent).toBe(vehicle.status);
});

it("renders vehicle data correctly if not supplied", () => {
  const vehicle = {
    id: "1",
    name: null,
    fuelType: null,
    driver: null,
    status: null,
  };
  const { getByTestId } = render(
    <TestWrapper>
      <VehicleRow {...vehicle} vehicle={vehicle} />
    </TestWrapper>
  );
  expect(screen.getByTestId("vehicleName").textContent).toBe("No name");
  expect(screen.getByTestId("vehicleFuelType").textContent).toBe(
    "No fuel type"
  );
  expect(screen.getByTestId("vehicleDriver").textContent).toBe("No driver");
  expect(screen.getByTestId("vehicleStatus").textContent).toBe("No status");
});
