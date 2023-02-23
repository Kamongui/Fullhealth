import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';

const EmployeeList = ({ id, EmployeeName }) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="center">
        {EmployeeName}
      </TableCell>
      <TableCell align="center">
        Post
      </TableCell>
      <TableCell align="center">
        Salery
      </TableCell>
      <TableCell align="center">
        XXX
      </TableCell>
    </TableRow>
  )
}

export default EmployeeList