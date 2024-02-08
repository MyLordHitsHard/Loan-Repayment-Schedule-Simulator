function calculateLoan(paymentAmount, interestRate, loanTermYears, startDate) {

    let monthlyRate = interestRate / (12 * 100);


    let numPayments = loanTermYears * 12;


    let monthlyPayment = paymentAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments) / (Math.pow(1 + monthlyRate, numPayments) - 1);

    let currentDate = new Date(startDate);
    let remainingBalance = paymentAmount;
    
    let monthlyBreakdown = []
    for (let i = 0; i < numPayments; i++) {

        let monthlyInterest = remainingBalance * monthlyRate;


        let monthlyPrincipal = monthlyPayment - monthlyInterest;


        remainingBalance -= monthlyPrincipal;

        monthlyBreakdown.push({
            date: currentDate.toLocaleDateString(),
            monthlyPayment: monthlyPayment.toFixed(2),
            monthlyPrincipal: monthlyPrincipal.toFixed(2),
            monthlyInterest: monthlyInterest.toFixed(2),
            remainingBalance: remainingBalance.toFixed(2),
        })


        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return monthlyBreakdown;
}


export default calculateLoan;