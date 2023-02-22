import React from 'react'
import SupplierList from '../../Component/SupplierList';
import { useChequecontext } from '../../Context/ChequeContext'
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {Paper} from '@mui/material';

const Supplier = () => {
  const { supplierData } = useChequecontext()

  return (
    <div>
      Supplier List
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Ac No</TableCell>
              <TableCell align="center">Product</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supplierData.map(data => 
              <SupplierList key={data.id} {...data} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Supplier
