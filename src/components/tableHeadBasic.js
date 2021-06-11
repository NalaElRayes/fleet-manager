import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const TableHeadBasic = () => {
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell>Id</TableCell>
      <TableCell align="right">Name</TableCell>
      <TableCell align="right">Fuel Type</TableCell>
      <TableCell align="right">Driver</TableCell>
      <TableCell align="right">Status</TableCell>
    </TableRow>
  );
};

export default TableHeadBasic;
