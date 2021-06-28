import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";

const VehicleCell = ({ vehicle, equipment, setFilteredData }) => {
  const editEquipments = () => {
    setFilteredData((old) =>
      old.map((v) =>
        v.id === vehicle.id
          ? {
              ...v,
              equipments: vehicle.equipments?.includes(equipment.id)
                ? vehicle.equipments.filter((equip) => equip !== equipment.id)
                : [...vehicle.equipments, equipment.id],
            }
          : v
      )
    );
  };

  return (
    <>
      <TableCell align="right">
        <Checkbox
          checked={vehicle.equipments?.includes(equipment.id)}
          onClick={editEquipments}
          color="primary"
        ></Checkbox>
        {equipment.name}
      </TableCell>
    </>
  );
};

export default VehicleCell;
