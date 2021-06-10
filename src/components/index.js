import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import useLocalStorage from "./useLocalStorage";

//import for table
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

import Paper from "@material-ui/core/Paper";

//component import
import TableHeadBasic from "./tableHeadBasic";
import VehicleRow from "./vehicleRow";

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

  // const checkEquipments = () => {
  //   vehicles?.map((vehicle) =>
  //     vehicle.equipments?.map((eq) => {
  //       return equipmentsFile.map((e) => {
  //         if (e.id === eq) {
  //           console.log("its true");
  //           return true;
  //         } else {
  //           console.log("its false");
  //           return false;
  //         }
  //       });
  //     })
  //   );
  // };

  // class EquipmentObject {
  //   constructor(id, name) {
  //     this.id = id;
  //     this.name = name;
  //   }
  // }

  // const checkEquipmentsId = () => {
  //   if (equipmentsFile.length > 0) {
  //     for (var i = 0; i < equipmentsFile?.length; i++) {
  //       let equipmentObject = new EquipmentObject(
  //         equipmentsFile[i].id,
  //         equipmentsFile[i].name
  //       );
  //       equipments.push(equipmentObject);
  //       console.log("objecte " + equipmentObject);
  //     }
  //   }
  // };

  // const map1 = new Map();

  // map1.set(1, "Crane");
  // map1.set(2, "Tachograph");
  // map1.set(3, "Fire Extinguisher");
  // map1.set(4, "Hook");
  // map1.set(5, "Custom equipment");
  // console.log(map1);
  console.log(equipmentsFile);

  return (
    <Grid container spacing={2} className="tableContainer">
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableHeadBasic />

              {vehiclesFile?.map((vehicle, Index) => {
                return (
                  <VehicleRow
                    key={Index}
                    vehicle={vehicle}
                    id={vehicle.id}
                    name={vehicle.name}
                    fuelType={vehicle.fuelType}
                    equipmentsFile={equipmentsFile}
                    setVehiclesFile={setVehiclesFile}
                  />
                );
              })}

              {/* {vehiclesFile?.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell component="th" scope="row">
                    {vehicle.id}
                  </TableCell>
                  <TableCell align="right">{vehicle.name}</TableCell>

                  <TableCell align="right">{vehicle.fuelType}</TableCell>
                  <TableCell align="left">
                    {equipmentsFile?.map((equipment) => {
                      return (
                        <ul className="listItem">
                          <li>
                            <Checkbox
                              checked={vehicle.equipments?.includes(
                                equipment.id
                              )}
                              onClick={() =>
                                setVehiclesFile((old) =>
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
                          </li>
                        </ul>
                      );
                    })}
                  </TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Index;
