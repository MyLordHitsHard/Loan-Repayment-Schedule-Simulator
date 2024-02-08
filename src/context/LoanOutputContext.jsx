import { createContext, useState } from "react"

export const LoanOutputContext = createContext()

export const LoanOutputProvider = ({children}) => {
    const [loanOutput, setLoanOutput] = useState(null)

    return (
        <LoanOutputContext.Provider value={{loanOutput, setLoanOutput}}>
            {children}
        </LoanOutputContext.Provider>
    )
}
