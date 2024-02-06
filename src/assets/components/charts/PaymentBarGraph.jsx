import {Bar} from 'react-chartjs-2'

function PaymentBarGraph({breakdown, details}) {
    const data = {
        labels: ['Loan Amount', 'Total Interest', 'Total Payment'],
        datasets: [
            {
                label: 'Loan Details',
                data: [breakdown.loanAmount,
                    details.reduce((acc, curr) => acc + parseFloat(curr.monthlyInterest), 0).toFixed(2), 
                    details.reduce((acc, curr) => acc + parseFloat(curr.monthlyPayment), 0).toFixed(2)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,

            },
        ],
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }

    return <Bar data={data} options={options} />
}

export default PaymentBarGraph