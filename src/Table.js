import React from "react";
import "./Table.css";
import numeral from "numeral";
import TableCell from "@mui/material/TableCell";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';



function table({ countries }) {
  return (
    <div className="">

      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell>Active Cases</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((country) => (
                <TableRow>
                  <TableCell>{country.country}</TableCell>
                  <TableCell>{numeral(country.cases).format("0,0")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </div>
  );
}

export default table;
