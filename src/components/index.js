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
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

//component import
import TableHeadBasic from "./tableHeadBasic";
import VehicleRow from "./vehicleRow";
import VechicleDrawer from "./vehicleDrawer";

function Index() {
  const [vehiclesFile, setVehiclesFile] = useLocalStorage("vehicle", null);
  const [equipmentsFile, setEquipmentsFile] = useLocalStorage(
    "equipmentsFile",
    null
  );

  const [filteredData, setFilteredData] = useLocalStorage("filtered", null);
  const [search, setSearch] = useState("");

  //måste ha någon sorts array till equipments

  useEffect(() => {
    console.log("fetching", vehiclesFile);
    const fetchData = async () => {
      const response = await fetch("/vehicles.json");
      const json = await response.json();
      setVehiclesFile(json);
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
    };
    if (!equipmentsFile) {
      fetchData();
    }
  }, [equipmentsFile]);

  useEffect(() => {
    console.log("hej");
    filterSearch(search);
  }, [search]);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  const filterSearch = (search) => {
    let searchResult = vehiclesFile?.filter((vehicle) => {
      if (search === "") {
        return true;
      } else if (vehicle.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      } else return;
    });
    setFilteredData(searchResult);
    console.log("filtereddata innehåller" + JSON.stringify(filteredData));

    // setFilteredData(searchResult);
  };

  return (
    <>
      <CssBaseline />
      <VechicleDrawer />

      <Grid container spacing={2} className="tableContainer">
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={search}
            style={{ margin: "20px" }}
            data-testid="searchField"
            onChange={(e) => setSearch(e.target.value)}
          />

          <TableContainer
            component={Paper}
            className={classes.customTableContainer}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableHeadBasic />

                {filteredData?.map((vehicle, index) => {
                  return (
                    <VehicleRow
                      key={`${index}-vehicle`}
                      vehicle={vehicle}
                      status={vehicle.status}
                      id={vehicle.id}
                      name={vehicle.name}
                      fuelType={vehicle.fuelType}
                      driver={vehicle.driver}
                      equipmentsFile={equipmentsFile}
                      setFilteredData={setFilteredData}
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
