import { createContext, useState } from "react"

export const BarGraphContext = createContext()

export const BarGraphProvider = ({children}) => {
    const [barGraphData, setBarGraphData] = useState(null)

    return (
        <BarGraphContext.Provider value={{barGraphData, setBarGraphData}}>
            {children}
        </BarGraphContext.Provider>
    )
}