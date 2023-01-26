import React from 'react';
import Printpage from '../Printpage';
import List from '../../Component/List'
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {Paper} from '@mui/material';
import { useChequecontext } from '../../Context/ChequeContext';

const ChequeTitle = () => {
  const {data} = useChequecontext()
  return (
    <div style={{"position":"relative"}}>
      <section style={{"position":"absolute"}}>
        <Printpage />
      </section>
      <h1>Print Cheque</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Pre-view</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((info) => (
              <List key={info.id} {...info}  />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  )
}

export default ChequeTitle
