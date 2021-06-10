import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";

const VehicleRow = ({
  Index,
  vehicle,
  id,
  name,
  fuelType,
  equipmentsFile,
  setVehiclesFile,
  ...rest
}) => {
  return (
    <TableRow key={Index} {...rest}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">{name}</TableCell>

      <TableCell align="right">{fuelType}</TableCell>
      <TableCell align="left">
        {equipmentsFile?.map((equipment, Index) => {
          return (
            <ul className="listItem">
              <li key={Index}>
                <Checkbox
                  checked={vehicle.equipments?.includes(equipment.id)}
                  onClick={() =>
                    setVehiclesFile((old) =>
                      old.map((v) =>
                        v.id === vehicle.id
                          ? {
                              ...v,
                              equipments: vehicle.equipments?.includes(
                                equipment.id
                              )
                                ? vehicle.equipments.filter(
                                    (equip) => equip !== equipment.id
                                  )
                                : [...vehicle.equipments, equipment.id],
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
  );
};

export default VehicleRow;
