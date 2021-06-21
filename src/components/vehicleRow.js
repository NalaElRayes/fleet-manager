import Checkbox from "@material-ui/core/Checkbox";
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const VehicleRow = ({
  index,
  vehicle,
  id,
  name,
  fuelType,
  driver,
  status,
  equipmentsFile,
  // setVehiclesFile,
  setFilteredData,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow data-testid="vehicleRow" className={classes.root} {...rest}>
        <TableCell>
          <IconButton
            data-testid="iconBtn"
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {id ? id : "No id"}
        </TableCell>
        <TableCell align="right">{name ? name : "No name"}</TableCell>
        <TableCell align="right">
          {fuelType ? fuelType : "No fuel type"}
        </TableCell>
        <TableCell align="right">{driver ? driver : "No driver"}</TableCell>
        <TableCell align="right">{status ? status : "No status"}</TableCell>
      </TableRow>
      <TableRow data-testid="collapsableRow">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Equipments
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Add or remove equipments</TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {equipmentsFile?.map((equipment) => {
                      return (
                        <TableCell align="right">
                          <Checkbox
                            checked={vehicle.equipments?.includes(equipment.id)}
                            onClick={() =>
                              setFilteredData((old) =>
                                old.map((v) =>
                                  v.id === vehicle.id
                                    ? {
                                        ...v,
                                        equipments:
                                          vehicle.equipments?.includes(
                                            equipment.id
                                          )
                                            ? vehicle.equipments.filter(
                                                (equip) =>
                                                  equip !== equipment.id
                                              )
                                            : [
                                                ...vehicle.equipments,
                                                equipment.id,
                                              ],
                                      }
                                    : v
                                )
                              )
                            }
                            color="primary"
                          ></Checkbox>
                          {equipment.name}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

VehicleRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
  driver: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

VehicleRow.defaultProps = {
  id: "no id",
  name: "No Name",
  fuelType: "No fuelType",
  driver: "No driver",
  status: "No status",
  equipmentsFile: [],
};

export default VehicleRow;
