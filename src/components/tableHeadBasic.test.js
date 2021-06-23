import TableHeadBasic from "./tableHeadBasic";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { TableBody, Table } from "@material-ui/core";

test("render tablehead in correct way", () => {
  const { getByTestId } = render(
    <table>
      <tbody>
        <TableHeadBasic />
      </tbody>
    </table>
  );
  const headerElementId = getByTestId("headCellId");
  const headerElementName = getByTestId("headCellName");
  const headerElementFuelType = getByTestId("headCellFuelType");
  const headerElementDriver = getByTestId("headCellDriver");
  const headerElementStatus = getByTestId("headCellStatus");

  expect(headerElementId.textContent).toBe("Id");
  expect(headerElementName.textContent).toBe("Name");
  expect(headerElementFuelType.textContent).toBe("Fuel Type");
  expect(headerElementDriver.textContent).toBe("Driver");
  expect(headerElementStatus.textContent).toBe("Status");
});
