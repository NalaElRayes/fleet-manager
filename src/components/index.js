import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

//import for table
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHeadBasic from "./tableHeadBasic";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Index() {
  const [vehicles, setVehicles] = useState(null);
  const [equipmentsFile, setEquipmentsFile] = useState(null);
  var equipments = [];

  useEffect(() => {
    console.log("fetching", vehicles);
    const fetchData = async () => {
      const response = await fetch("/vehicles.json");
      const json = await response.json();
      setVehicles(json);
    };
    if (!vehicles) {
      fetchData();
    }
  }, [vehicles]);

  useEffect(() => {
    console.log("fetching", equipmentsFile);
    const fetchData = async () => {
      const response = await fetch("/equipments.json");
      const json = await response.json();
      setEquipmentsFile(json);
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

  const checkEquipmentsId = () => {
    if (equipmentsFile.length > 0) {
      for (var i = 0; i < equipmentsFile?.length; i++) {
        equipments;
      }
    }
  };

  return (
    <Grid container spacing={2} className="tableContainer">
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableHeadBasic />
              {vehicles?.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell component="th" scope="row">
                    {vehicle.id}
                  </TableCell>
                  <TableCell align="right">{vehicle.name}</TableCell>
                  <TableCell align="right">
                    {/* {equipmentsFile?.map((e) => {
                      //   return e.name
                      console.log("what is this " + vehicle.equipments);
                      if (e.id === ) {
                        return e.name;
                      } else {
                        return "";
                      }
                    })} */}
                  </TableCell>
                  <TableCell align="right">{vehicle.fuelType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Index;
