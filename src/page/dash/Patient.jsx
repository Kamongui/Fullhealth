import { useChequecontext } from '../../Context/ChequeContext'
import PatientList from '../../Component/PatientList'
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {Paper} from '@mui/material';

const Patient = () => {
  const { patientData } = useChequecontext()
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">XXX</TableCell>
              <TableCell align="center">XXX</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientData.map(data => 
              <PatientList key={data.id} {...data} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Patient
