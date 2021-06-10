import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const TableHeadBasic = () => {
  return (
    <TableRow>
      <TableCell>Id</TableCell>
      <TableCell align="right">Name</TableCell>
      <TableCell align="right">Fuel Type</TableCell>
      <TableCell align="left">Existing Equipments</TableCell>
    </TableRow>
  );
};

export default TableHeadBasic;
