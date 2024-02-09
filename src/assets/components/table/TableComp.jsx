
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableComp(props) {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Year</TableCell>
                            <TableCell align="right">Payment</TableCell>
                            <TableCell align="right">Principal</TableCell>
                            <TableCell align="right">Interest</TableCell>
                            <TableCell align="right">Balance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <TableRow
                                key={row.date}
                            >
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="right">{row.monthlyPayment}</TableCell>
                                <TableCell align="right">{row.monthlyPrincipal}</TableCell>
                                <TableCell align="right">{row.monthlyInterest}</TableCell>
                                <TableCell align="right">{row.remainingBalance}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


export default TableComp;