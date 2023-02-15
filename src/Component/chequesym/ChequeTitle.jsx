import React, { useState } from 'react';
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

  const [sortItem, setSortItem] = useState({item:'id',status:true})
  // used to choose search title
  // let newData
  // if(searchBy === 'Payee'){
  //   newData = chequeData.filter(items => (items.Payee).toLowerCase().includes(search.toLowerCase()))
  // } else if (searchBy === 'Signatory'){
  //   newData = chequeData.filter(items => (items.Signatory).toLowerCase().includes(search.toLowerCase()))
  // } else {
  //   newData = chequeData.filter(items => (items.Payee).toLowerCase().includes(search.toLowerCase()))
  // }

  
  // Table Sorting fn
  // default value
  let test = (a,b) => {a.id - b.id}
  // Sort by id
  (sortItem.item === 'id' && sortItem.status === true)? (test = (a,b) => a.id - b.id)
    :(sortItem.item === 'id' && sortItem.status === false)? (test = (a,b) => b.id - a.id)
      // Sort by Status
      :(sortItem.item === 'Status' && sortItem.status === true)? (test = (a,b) => a.Status - b.Status)
        :(sortItem.item === 'Status' && sortItem.status === false)? (test = (a,b) => b.Status - a.Status)
          // Sort by Date
          :(sortItem.item === 'Date' && sortItem.status === true)? (test = (a,b) => a.Date - b.Date)
            :(sortItem.item === 'Date' && sortItem.status === false)? (test = (a,b) => b.Date - a.Date)
              // Sort by Payee
              :(sortItem.item === 'Payee' && sortItem.status === true)? (test = (a,b) => (a.Payee.toLowerCase() > b.Payee.toLowerCase())?1:-1)
                :(sortItem.item === 'Payee' && sortItem.status === false)? (test = (a,b) => (a.Payee.toLowerCase() > b.Payee.toLowerCase())?-1:1)
                  // Sort by Amount
                  :(sortItem.item === 'Amount' && sortItem.status === true)? (test = (a,b) => a.Amount - b.Amount)
                    :(sortItem.item === 'Amount' && sortItem.status === false)? (test = (a,b) => b.Amount - a.Amount)
                      // Sort by Signatory
                      :(sortItem.item === 'Signatory' && sortItem.status === true)? (test = (a,b) => (a.Signatory.toLowerCase() > b.Signatory.toLowerCase())?1:-1)
                        :(test = (a,b) =>  (a.Signatory.toLowerCase() > b.Signatory.toLowerCase())?-1:1)
  // End

  return (
    <div style={{"position":"relative"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell
                onClick={() => setSortItem({item:sortItem.item = 'id',status:!sortItem.status})}
              >id</TableCell>
              <TableCell align="center" 
                onClick={() => setSortItem({item:sortItem.item = 'Status',status:!sortItem.status})}
              >Status</TableCell>
              <TableCell align="center"
                onClick={() => setSortItem({item:sortItem.item = 'Date',status:!sortItem.status})}
              >Date<br /><span style={{backgroundColor:"yellow"}}>modify date format</span></TableCell>
              <TableCell align="center"
                onClick={() => setSortItem({item:sortItem.item = 'Payee',status:!sortItem.status})}
              >Payee</TableCell>
              <TableCell align="center"
                onClick={() => setSortItem({item:sortItem.item = 'Amount',status:!sortItem.status})}
              >Amount</TableCell>
              <TableCell align="center"
                onClick={() => setSortItem({item:sortItem.item = 'Signatory',status:!sortItem.status})}
              >Signatory</TableCell>
              <TableCell align="center"
              >Edit</TableCell>
              <TableCell align="center"
              >Delete</TableCell>
              <TableCell align="center"
              >Paid Date</TableCell>
              <TableCell align="center"
              >Combine</TableCell>
              <TableCell align="center"
              >Pre-view</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chequeData.sort((a,b)=>test(a,b)).map((info) => (
              <ChequeContent key={info.id} {...info}  />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ChequeTitle
