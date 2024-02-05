
function Details({breakdown, loanDetails}) {
    return (
        <>
            <h3 className="details-heading">Total Loan Amount</h3>
            <p>{breakdown.loanAmount}</p>
            <h3 className="details-heading">Total Interest</h3>
            <p>{loanDetails ? (loanDetails.reduce((acc, curr) => acc + parseFloat(curr.monthlyInterest), 0)).toFixed(2) : 0}</p>
            <h3 className="details-heading">Total Payment</h3>
            <p>{loanDetails ? (loanDetails.reduce((acc, curr) => acc + parseFloat(curr.monthlyPayment), 0)).toFixed(2) : 0}</p>
        </>
    )
}

export default Details