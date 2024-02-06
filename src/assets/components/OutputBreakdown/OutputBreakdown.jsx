import { useState, useEffect} from "react";
import './OutputBreakdown.css'
import BreakdownContainer from "./BreakdownContainer";
import calculateLoan from "../../../utils/calculateLoan.js";
import { useAllContexts } from "../../../hooks/useAllContexts.jsx";

function OutputBreakdown({breakdown}) {

    const {loanDetails, setLoanDetails, pieChartData, setPieChartData, barGraphData, setBarGraphData} = useAllContexts()
    const [showChart, setShowChart] = useState(false)
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
        setPieChartData(details)
    }

    useEffect(() => {
        const details = calculateLoan(breakdown.loanAmount, breakdown.interestRate, breakdown.loanTerm, breakdown.startDate)
        setLoanDetails(details)
        setBarGraphData(details)
        
    }, [breakdown, setLoanDetails, setBarGraphData])
    
    return (
        <>
            <h2>Output Breakdown</h2>
            { loanDetails && loanDetails.length > 0 ? (
            <div className="output-breakdown">
                <BreakdownContainer
                loanDetails={loanDetails} 
                breakdown={breakdown}
                showChart={showChart}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                handleClick={handleClick}
                pieChartData={pieChartData}
                barGraphData={barGraphData}
                handlepageChange={handlepageChange} />   
            </div>
        ) : <p>No Data Available</p>}
        </>       
    )
}
export default OutputBreakdown