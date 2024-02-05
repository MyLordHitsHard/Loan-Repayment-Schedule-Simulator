import { useState, useEffect, useContext } from "react";
import { LoanDetailsContext } from "../../../context/LoanDetailsContext.jsx";
import { PieChartContext } from "../../../context/PieChartContext.jsx";
import './OutputBreakdown.css'
import OutputRow from "./OutputRow";
import calculateLoan from "../../../utils/calculateLoan.js";
import PaymentPieChart from "../charts/PaymentPieChart.jsx";
import OutputTableHeading from "./OutputTableHeading.jsx";
import PaginationButtons from "./PaginationButtons.jsx";
import Details from "./Details.jsx";

function OutputBreakdown({breakdown}) {

    const {loanDetails, setLoanDetails} = useContext(LoanDetailsContext)
    const {pieChartData, setPieChartData} = useContext(PieChartContext)
    // const [loanDetails, setLoanDetails] = useState([])
    const [showChart, setShowChart] = useState(false)
    // const [currentDetails, setCurrentDetails] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const rowsPerPage = 12

    const maxPage = loanDetails ? Math.ceil(loanDetails.length / rowsPerPage) : 1

    const handlepageChange = (direction) => {
        if (direction === "next" && currentPage < maxPage) {
            setCurrentPage((prevPage) => prevPage + 1)
        } else if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1)
        }
    }

    const handleClick = (details) => {
        setShowChart(true)
        // setCurrentDetails(details)
        setPieChartData(details)
    }

    useEffect(() => {
        const details = calculateLoan(breakdown.loanAmount, breakdown.interestRate, breakdown.loanTerm, breakdown.startDate)
        setLoanDetails(details)
        
    }, [breakdown, setLoanDetails])
    
    // useEffect(() => {
    
    // }, [loanDetails])


    return (
        <div className="output-breakdown">
            <h2>Output Breakdown</h2>
            <div className="container">
                <div className="table-container">
                {
    loanDetails && loanDetails.length > 0 ? (
        <table className="styled-table">
            <OutputTableHeading />
            <tbody>
                {
                    loanDetails.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                        .map((detail, index) => (
                            <OutputRow key={index} details={detail} handleClick={handleClick}/>
                        ))
                }
            </tbody>
        </table>
    ) : (
        <p>No data available</p>
    )
}
                    {/* <table className="styled-table">
                        {loanDetails ? <OutputTableHeading /> : <thead><tr><th>NO DATA</th></tr></thead>}
                        <tbody>

                            {
                                loanDetails && loanDetails
                                    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                                    .map((detail, index) => (
                                        <OutputRow key={index} details={detail} handleClick={handleClick}/>
                                    ))
                            }
                            
                        </tbody>
                    </table> */}
                    <div className="pagination">
                        {loanDetails && loanDetails.length > 0 ? (<PaginationButtons handlepageChange={handlepageChange} />) : <div></div>}
                    </div>
                </div>
                <div className="piechart-container">
                    {showChart && pieChartData && <PaymentPieChart details={pieChartData} />}
                </div>
            </div>
            
            <div className="details-conatiner">
                <Details breakdown={breakdown} loanDetails={loanDetails} />
                
            </div>
            
            
        </div>
    )
}

export default OutputBreakdown