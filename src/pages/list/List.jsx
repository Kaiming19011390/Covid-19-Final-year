import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Datetime from "../../Datetime";

const list = () => {
  const rows = [
    {
      id: 4,
      product: "Afghanistan",
      img: "https://www.worldometers.info/img/flags/af-flag.gif",
      date: "1 March",
      amount: 785,
      method: "Low active cases",
      status: "Safe",
    },
    {
      id: 8,
      product: "Albania",
      img: "https://www.worldometers.info/img/flags/al-flag.gif",
      date: "1 March",
      amount: 1700,
      method: "Medium active cases",
      status: "NotSafe",
    },
    {
      id: 12,
      product: "Algeria",
      img: "https://www.worldometers.info/img/flags/ag-flag.gif",
      date: "1 March",
      amount: 81500,
      method: "High active cases",
      status: "NotSafe",
    },
    {
      id: 20,
      product: "Andorra",
      img: "https://www.worldometers.info/img/flags/an-flag.gif",
      date: "1 March",
      amount: 61,
      method: "Low active cases",
      status: "Safe",
    },
    {
      id: 24,
      product: "Angola",
      img: "https://www.worldometers.info/img/flags/ao-flag.gif",
      date: "1 March",
      amount: 59,
      method: "Low active cases",
      status: "Safe",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Country</TableCell>
            <TableCell className="tableCell">Date/Time</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Active cases</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>

              <TableCell className="tableCell"><Datetime/></TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default list;