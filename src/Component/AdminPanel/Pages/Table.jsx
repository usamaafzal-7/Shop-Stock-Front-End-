import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';


function createData(number, name, email, price, track, date) {
    return { name, number, email, price, track, date };
}

const rows = [
    createData(1, "Devon Lane", "devon@example.com", "$778.45", "delieverd", "07.05.2020"),
    createData(2, "Devon Lane", "devon@example.com", "$778.45", "delieverd", "07.05.2020"),
    createData(3, "Devon Lane", "devon@example.com", "$778.45", "cancel", "07.05.2020"),
    createData(4, "Devon Lane", "devon@example.com", "$778.45", "delieverd", "07.05.2020"),
    createData(5, "Devon Lane", "devon@example.com", "$778.45", "cancel", "07.05.2020"),
    createData(6, "Devon Lane", "devon@example.com", "$778.45", "delieverd", "07.05.2020"),




];

const BasicTable = () => {


    return (
        <TableContainer  >
            <Table sx={{ minWidth: 650, }} >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Number </TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="center">Email</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="center">Price</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="center">Track</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="center">Date</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>


                            <TableCell >{row.number}</TableCell>
                            <TableCell > {row.name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">{row.track}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default BasicTable