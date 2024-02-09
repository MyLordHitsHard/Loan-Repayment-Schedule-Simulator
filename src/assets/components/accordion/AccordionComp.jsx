import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function AccordionComp(props) {

    return (
        <>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-content"
                >
                Year {props.year}
                </AccordionSummary>
                <AccordionDetails>
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
                                {props.data
                                    .slice((props.year - 1) * 12, props.year * 12)
                                    .map((row) => (
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
                </AccordionDetails>
            </Accordion>
        </>
    )


}

export default AccordionComp;