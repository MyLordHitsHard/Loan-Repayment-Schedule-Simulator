// import React from 'react'
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2'

Chart.register(...registerables);
function PaymentPieChart({details}) {
    console.log('details', details)
    const data = {
        labels: ['Monthly Payment', 'Monthly Principal', 'Monthly Interest'],
        datasets: [
            {
                data: [details.monthlyPayment, details.monthlyPrincipal, details.monthlyInterest],
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
