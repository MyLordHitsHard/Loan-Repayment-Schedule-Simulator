import { useContext, useEffect, useState } from 'react'
import './App.css'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CardComp from './assets/components/card/CardComp'
import SliderComp from './assets/components/silder/SliderComp';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AccordionComp from './assets/components/accordion/AccordionComp';
import { LoanDetailsContext } from './context/LoanDetailsContext';
import { LoanOutputContext } from './context/LoanOutputContext';
import calculateLoan from './utils/calculateLoan';
import PaymentPieChart from './assets/components/charts/PaymentPieChart';



function App() {

  // state constants
  const [datevalue, setDateValue] = useState(dayjs())
  const [slidersData, setSlidersData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [showPieChart, setShowPieChart] = useState(false);

  // context constants
  const {loanDetails, setLoanDetails} = useContext(LoanDetailsContext)
  const {loanOutput, setLoanOutput} = useContext(LoanOutputContext)

  // derived constants
  const numberOfYears = loanOutput ? Math.ceil(loanOutput.length / 12) : 0
  const accordionsToShow = currentPage * 5;


  // fetch data from json file and update it on change
  useEffect(() => {
    import('./assets/components/silder/silders.json').then((data) => {
      setSlidersData(data.default);
    });
  }, []);



  // update loan details and loan output on change
  useEffect(() => {
    if (slidersData.length > 0) {
      const newDetails = {
        loanAmount: parseFloat(slidersData[0].value),
        interestRate: parseFloat(slidersData[1].value),
        loanTerm: parseInt(slidersData[2].value),
        startDate: datevalue
      };
      setLoanDetails(newDetails);
      const calculatedLoan = calculateLoan(newDetails.loanAmount, newDetails.interestRate, newDetails.loanTerm, newDetails.startDate);
      setLoanOutput(calculatedLoan);
      setShowPieChart(newDetails.loanAmount !== 0 && newDetails.interestRate !== 0 && newDetails.loanTerm !== 0);
    }

}, [slidersData, datevalue, setLoanDetails, setLoanOutput]);


  return (

    // main component
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='container'>
        {/* Card for Input details fields */}
        <CardComp title="Input Details" classes={showPieChart ? 'container-card1-short' : 'container-card1'}>
          {/* Slider fields */}
          {slidersData.map((slider, index) => (
            <SliderComp
              key={index}
              {...slider}
              onChange={(newValue) => {
                const newSlidersData = [...slidersData];
                newSlidersData[index].value = newValue;
                setSlidersData(newSlidersData);
              }}
            />
          ))}
          {/* Date picker field */}
          <DatePicker
            value={datevalue}
            onChange={(newValue) => setDateValue(newValue)}
            minDate={dayjs('2001-01-01')}
          />
        </CardComp>

        {/* Card for Pie Chart */}
        {showPieChart && (
          <CardComp title="Pie Chart"  classes={`container-card2 ${showPieChart ? 'visible' : ''}`}>
            {loanOutput && <PaymentPieChart loanDetails={loanDetails} loanOutput={loanOutput} />}
          </CardComp>
        )}
      </div>

      <div className='container2'>
        {/* Card for Output details */}
        <CardComp title="Output Details" classes="container-card3">
          <h3>Loan Amount</h3>
          <h4>{loanDetails && loanDetails.loanAmount}</h4>
          <h3>Interest Rate</h3>
          <h4>{loanOutput && loanOutput.reduce((acc, curr) => acc + parseFloat(curr.monthlyInterest), 0).toFixed(2)}</h4>
          <h3>Total Payment</h3>
          <h4>{loanOutput && loanOutput.reduce((acc, curr) => acc + parseFloat(curr.monthlyPayment), 0).toFixed(2)}</h4>
        </CardComp>

        {/* Accordion for monthly payments only 5 rendered at first */}
        <div className='container-accordion'>
          {numberOfYears &&
            [...Array(numberOfYears)].slice(0, accordionsToShow).map((_, yearIndex) => {
              const isInitialYear = yearIndex === 0;
              const isLastYear = yearIndex === numberOfYears - 1;
              const monthInYear = isInitialYear ? 13 - datevalue.month() : isLastYear ? loanOutput.length % 12 : 12;

              return (
                <AccordionComp key={yearIndex} months={monthInYear} year={yearIndex + 1} data={loanOutput} />
              )
            })
          }

          {/* Button to see more accordions */}
          {numberOfYears > accordionsToShow && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Show More
            </button>
          )}
        </div>
      </div>
    </LocalizationProvider>
  )
}

export default App

