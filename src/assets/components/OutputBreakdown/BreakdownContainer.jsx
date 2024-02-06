import OutputTableHeading from './OutputTableHeading';
import OutputRow from './OutputRow';
import PaginationButtons from './PaginationButtons';
import PaymentPieChart from '../charts/PaymentPieChart';
import Details from './Details';
import PaymentBarGraph from '../charts/PaymentBarGraph';
import ExcelExport from '../ExcelExport';


function BreakdownContainer({loanDetails, breakdown, showChart, currentPage, rowsPerPage, handleClick, barGraphData, pieChartData, handlepageChange}) {
    return (
        <>
            <div className="container">
                <div className="table-container">
                    <div className='table-box'>
                        <table id="output-table" className="styled-table">
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
                    </div>    
                       
                    <div className="pagination">
                        <PaginationButtons handlepageChange={handlepageChange} />
                    </div>
                    <ExcelExport data={loanDetails} />
                </div>
                <div className="piechart-container">
                    {showChart && pieChartData && <PaymentPieChart details={pieChartData} />}
                </div>
            </div>
            
            
            <div className="details-container">
                <div className='details'>
                    <Details breakdown={breakdown} loanDetails={loanDetails} />
                </div>
                
                <div className='bar-graph'>
                {barGraphData && <PaymentBarGraph breakdown={breakdown} details={barGraphData} />}
                </div>    
            </div>
            
        </>
    )
}

export default BreakdownContainer;