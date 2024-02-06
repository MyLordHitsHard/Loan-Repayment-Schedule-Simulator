import { useContext} from "react";
import { LoanDetailsContext } from "../context/LoanDetailsContext.jsx";
import { PieChartContext } from "../context/PieChartContext.jsx";
import { BarGraphContext } from "../context/BarGraphContext.jsx";

export function useAllContexts() {
    const {loanDetails, setLoanDetails} = useContext(LoanDetailsContext)
    const {pieChartData, setPieChartData} = useContext(PieChartContext)
    const {barGraphData, setBarGraphData} = useContext(BarGraphContext)


    return {loanDetails, setLoanDetails, pieChartData, setPieChartData, barGraphData, setBarGraphData}
}