// LoanDetailsContext.js
import { createContext, useState } from 'react';

export const LoanDetailsContext = createContext();

export const LoanDetailsProvider = ({ children }) => {
    const [loanDetails, setLoanDetails] = useState(null);

    return (
        <LoanDetailsContext.Provider value={{ loanDetails, setLoanDetails }}>
            {children}
        </LoanDetailsContext.Provider>
    );
};