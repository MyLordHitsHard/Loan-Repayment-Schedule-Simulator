function calculateLoan(paymentAmount, interestRate, loanTermYears, startDate) {
    // Convert annual interest rate to monthly rate
    let monthlyRate = interestRate / (12 * 100);

    // Convert loan term from years to months
    let numPayments = loanTermYears * 12;

    // Calculate monthly payment using formula
    let monthlyPayment = paymentAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments) / (Math.pow(1 + monthlyRate, numPayments) - 1);

    let currentDate = new Date(startDate);
    let remainingBalance = paymentAmount;
    
    let monthlyBreakdown = []
    for (let i = 0; i < numPayments; i++) {
        // Calculate monthly interest
        let monthlyInterest = remainingBalance * monthlyRate;

        // Calculate monthly principal
        let monthlyPrincipal = monthlyPayment - monthlyInterest;

        // Update remaining balance
        remainingBalance -= monthlyPrincipal;

        monthlyBreakdown.push({
            date: currentDate.toLocaleDateString(),
            monthlyPayment: monthlyPayment.toFixed(2),
            monthlyPrincipal: monthlyPrincipal.toFixed(2),
            monthlyInterest: monthlyInterest.toFixed(2),
            remainingBalance: remainingBalance.toFixed(2),
        })

        // Move to next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return monthlyBreakdown;
}


export default calculateLoan;