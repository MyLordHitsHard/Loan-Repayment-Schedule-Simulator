import { useState } from 'react'
import './App.css'
import Heading from './assets/components/Heading'
import InputForm from './assets/components/Input Form/InputForm'
import OutputBreakdown from './assets/components/OutputBreakdown/OutputBreakdown'

function App() {
  const [breakdown, setBreakdown] = useState(null)
  const handleFormSubmit = (newBreakdown) => {
    setBreakdown(newBreakdown)
  }

  return (
    <>
      <Heading />
      <InputForm onSubmit={handleFormSubmit} />
      <OutputBreakdown key={Date.now()} breakdown={breakdown || {}} />
    </>
  )
}

export default App
