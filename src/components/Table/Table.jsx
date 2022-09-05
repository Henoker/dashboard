import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
  name, orderId, dueDate, status
) {
  return { name, orderId, dueDate, status };
}

const rows = [
    createData("Localization Stars", 18908424, "2 March 2022", "Requested"),
    createData("Webs Translators", 18908424, "2 March 2022", "Pending"),
    createData("FiFa", 18908421, "2 March 2022", "Delivered"),
    createData("WeLocalize", 18908424, "2 March 2022", "Requested"),

    
];

const makeStyles=(status)=> {
    if (status === "Requested"){
       return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
       }
    }
    else if(status === "Pending"){
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }

}

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
    
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell align="left">Order ID</TableCell>
            <TableCell align="left">Due Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.orderId}</TableCell>
              <TableCell align="left">{row.dueDate}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyles(row.status)}>{row.status}</span>
                </TableCell>
              <TableCell align="left" className='Details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
