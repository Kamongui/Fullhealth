import React, { useEffect } from 'react'
import { useState } from 'react'
import { useChequecontext } from '../../Context/ChequeContext'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'DragName',
    headerName: 'Name',
    width: 300,
    editable: true,
  },
  {
    field: 'Price',
    headerName: 'Price',
    width: 300,
    editable: true,
  }
];

export default function Drag() {
  const {dragData, dragLoading, dragError} = useChequecontext();
  const rows = [
    {
      id:1,DragName:"Drag1",Price:100
    },
    {
      id:2,DragName:"Drag2",Price:200
    },
    {
      id:3,DragName:"Drag3",Price:300
    },
  ]


  let row =[]
  let content
  if (dragLoading) {
    content = <h1>Loading</h1>
  } else if (dragError) {
    content = <h1>`${dragError.message}`</h1>
  } else {
    for(let i=0;i<dragData.length;i++){
      let rowData = dragData[i]
      row = [...row,rowData]
    }
  }
  return (
    <>
      <div>{content}</div>
      <Box sx={{ height: 400, width: '100%', backgroundColor:'pink' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}


// const Drag = () => {
//   const { dragdata, setDragdata } = useChequecontext()
  
//   return (
//     <div>
//       dragData
//       {/* title */}
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>id</TableCell>
//               <TableCell align="right">Date</TableCell>
//               <TableCell align="right">Payee</TableCell>
//               <TableCell align="right">Amount</TableCell>
//               <TableCell align="right">Edit</TableCell>
//               <TableCell align="right">Delete</TableCell>
//               <TableCell align="right">Pre-view</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((info) => (
//               <List key={info.id} {...info}  />
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {dragdata.map(data => 
//         <div key={data.dragId}>
//           {data.DragName} & Price is {data.Price}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Drag
