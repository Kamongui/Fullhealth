import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';

const PatientList = ({ id, PatientName }) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="center">
        {PatientName}
      </TableCell>
      <TableCell align="center">
        XXX
      </TableCell>
      <TableCell align="center">
        XXX
      </TableCell>
    </TableRow>
  )
}

export default PatientList