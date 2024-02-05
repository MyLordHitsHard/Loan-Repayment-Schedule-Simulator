import { createContext, useState } from 'react'

export const PieChartContext = createContext()

export const PieChartProvider = ({children}) => {
    const [pieChartData, setPieChartData] = useState(null)

    return (
        <PieChartContext.Provider value={{pieChartData, setPieChartData}}>
            {children}
        </PieChartContext.Provider>
    )
}