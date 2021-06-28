import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const TableHeadBasic = () => {
  return (
    <TableRow data-testid="headRow">
      <TableCell></TableCell>
      <TableCell data-testid="headCellId">Id</TableCell>
      <TableCell align="right" data-testid="headCellName">
        Name
      </TableCell>
      <TableCell align="right" data-testid="headCellFuelType">
        Fuel Type
      </TableCell>
      <TableCell align="right" data-testid="headCellDriver">
        Driver
      </TableCell>
      <TableCell align="right" data-testid="headCellStatus">
        Status
      </TableCell>
    </TableRow>
  );
};

export default TableHeadBasic;
