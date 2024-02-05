import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoanDetailsProvider } from './context/LoanDetailsContext.jsx'
import { PieChartProvider } from './context/PieChartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoanDetailsProvider>
      <PieChartProvider>
        <App />
      </PieChartProvider>
    </LoanDetailsProvider>
  </React.StrictMode>,
)
