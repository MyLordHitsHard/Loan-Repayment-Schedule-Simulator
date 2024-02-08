// import React from 'react'
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2'

Chart.register(...registerables);
function PaymentPieChart({loanDetails, loanOutput}) {
    
    const data = {
        labels: ['Loan Amount', 'Total Interest', 'Total Payment'],
        datasets: [
            {
                data: [loanDetails.loanAmount,
                        loanOutput.reduce((acc, curr) => acc + parseFloat(curr.monthlyInterest), 0).toFixed(2), 
                        loanOutput.reduce((acc, curr) => acc + parseFloat(curr.monthlyPayment), 0).toFixed(2)
                    ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
            },
        ],
    }

    return <Pie data={data} />
}


export default PaymentPieChart
