import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import useLocalStorage from "../hooks/useLocalStorage";

//import for table
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from "@material-ui/core/Paper";

//component import
import TableHeadBasic from "./tableHeadBasic";
import VehicleRow from "./vehicleRow";
import VechicleDrawer from "./vehicleDrawer";

function Index() {
  const [vehiclesFile, setVehiclesFile] = useLocalStorage("vehicles", null);
  const [equipmentsFile, setEquipmentsFile] = useLocalStorage(
    "equipmentsFile",
    null
  );

  //måste ha någon sorts array till equipments

  useEffect(() => {
    console.log("fetching", vehiclesFile);
    const fetchData = async () => {
      const response = await fetch("/vehicles.json");
      const json = await response.json();
      setVehiclesFile(json);
      //localStorage.setItem("vehicles", JSON.stringify(json));
    };
    if (!vehiclesFile) {
      fetchData();
    }
  }, [vehiclesFile]);

  useEffect(() => {
    console.log("fetching", equipmentsFile);

    const fetchData = async () => {
      const response = await fetch("/equipments.json");
      const json = await response.json();
      setEquipmentsFile(json);
      //localStorage.setItem("equipments", JSON.stringify(json));
    };
    if (!equipmentsFile) {
      fetchData();
    }
  }, [equipmentsFile]);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <VechicleDrawer />

      <Grid container spacing={2} className="tableContainer">
        <Grid item xs={12}>
          <TableContainer
            component={Paper}
            className={classes.customTableContainer}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableHeadBasic />

                {vehiclesFile?.map((vehicle, Index) => {
                  return (
                    <VehicleRow
                      key={Index}
                      vehicle={vehicle}
                      status={vehicle.status}
                      id={vehicle.id}
                      name={vehicle.name}
                      fuelType={vehicle.fuelType}
                      driver={vehicle.driver}
                      equipmentsFile={equipmentsFile}
                      vehiclesFile={vehiclesFile}
                      setVehiclesFile={setVehiclesFile}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
