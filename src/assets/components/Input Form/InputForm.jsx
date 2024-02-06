import { useEffect, useState} from 'react'
import './InputForm.css'
function InputForm( {onSubmit}) {

    const [loanAmount, setLoanAmount] = useState(null)
    const [interestRate, setInterestRate] = useState(null)
    const [loanTerm, setLoanTerm] = useState(null)
    const [startDate, setStartDate] = useState(null)

    useEffect(() => {
        
        const newBreakdown = {
            loanAmount: parseFloat(loanAmount),
            interestRate: parseFloat(interestRate),
            loanTerm: parseInt(loanTerm),
            startDate: startDate
        };
        onSubmit(newBreakdown);
    }, [loanAmount, interestRate, loanTerm, startDate]);




    return (
        <div className="input-form">

            <form>

                <div className="form-group">

                    <label htmlFor="loanAmount">Loan Amount</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="loanAmount" 
                        placeholder="Enter loan amount" 
                        onChange={e => setLoanAmount(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                        
                    <label htmlFor="interestRate">Interest Rate</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="interestRate" 
                        placeholder="Enter interest rate"
                        onChange={e => setInterestRate(e.target.value)}
                    />
                </div>

                <div className="form-group">
                        
                    <label htmlFor="loanTerm">Loan Term</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="loanTerm" 
                        placeholder="Enter loan term" 
                        onChange={e => setLoanTerm(e.target.value)}
                    />
                </div>

                <div className="form-group">
                        
                    <label htmlFor="startDate">Start Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="startDate" 
                        placeholder="Enter start date"
                        onChange={e => setStartDate(e.target.value)}
                    />
                </div>
            </form>

        </div>
    )
}

export default InputForm