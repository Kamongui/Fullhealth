import { useChequecontext } from '../../Context/ChequeContext'
import DragList from '../../Component/DragList';
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {Paper} from '@mui/material';

export default function Drag() {
  const { dragData } = useChequecontext();

  return (
    <div>
      Drag List
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">XXX</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dragData.map(data => 
              <DragList key={data.id} {...data} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}