import React from 'react';
import ChequeContent from './ChequeContent'
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {Paper} from '@mui/material';
import { useChequecontext } from '../../Context/ChequeContext';

const ChequeTitle = ({search,searchBy}) => {
  const { chequeData } = useChequecontext()
  // used to choose search title
  // let newData
  // if(searchBy === 'Payee'){
  //   newData = chequeData.filter(items => (items.Payee).toLowerCase().includes(search.toLowerCase()))
  // } else if (searchBy === 'Signatory'){
  //   newData = chequeData.filter(items => (items.Signatory).toLowerCase().includes(search.toLowerCase()))
  // } else {
  //   newData = chequeData.filter(items => (items.Payee).toLowerCase().includes(search.toLowerCase()))
  // }
  return (
    <div style={{"position":"relative"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Date<br /><span style={{backgroundColor:"yellow"}}>modify date format</span></TableCell>
              <TableCell align="center">Payee</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Signatory</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Paid Date</TableCell>
              <TableCell align="center">Combine</TableCell>
              <TableCell align="center">Pre-view</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chequeData.map((info) => (
              <ChequeContent key={info.id} {...info}  />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ChequeTitle
