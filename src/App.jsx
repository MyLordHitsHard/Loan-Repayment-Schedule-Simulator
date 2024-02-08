import { useContext, useEffect, useState } from 'react'
import './App.css'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Card from './assets/components/card/CardComp'
import SliderComp from './assets/components/silder/SliderComp';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AccordianComp from './assets/components/accordian/AccordianComp';
import { LoanDetailsContext } from './context/LoanDetailsContext';
import { LoanOutputContext } from './context/LoanOutputContext';
import calculateLoan from './utils/calculateLoan';
import PaymentPieChart from './assets/components/charts/PaymentPieChart';


function App() {

  const [datevalue, setDateValue] = useState(dayjs())
  const {loanDetails, setLoanDetails} = useContext(LoanDetailsContext)
  const {loanOutput, setLoanOutput} = useContext(LoanOutputContext)
  const [slidersData, setSlidersData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfYears = loanOutput ? Math.ceil(loanOutput.length / 12) : 0
  const accordiansToShow = currentPage * 5;

  useEffect(() => {
    import('./assets/components/silder/silders.json').then((data) => {
      setSlidersData(data.default);
    });
  }, []);


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
    }
    
}, [slidersData, datevalue, setLoanDetails, setLoanOutput]);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <Card title="Input Details"> 
        {
          slidersData.map((slider, index) => {
            return <SliderComp key={index} {...slider} onChange={(newValue) => {
              const newSlidersData = [...slidersData];
              newSlidersData[index].value = newValue;
              setSlidersData(newSlidersData);
            }} />
          })
        }
        <DatePicker
          value={datevalue} 
          onChange={(newValue) => setDateValue(newValue)}
          minDate={dayjs('2001-01-01')} 
        />
      </Card>

      <Card title="Output Details">
        <h2>{loanDetails && loanDetails.loanAmount}</h2>
        <h2>{loanOutput && loanOutput.reduce((acc, curr) => acc + parseFloat(curr.monthlyInterest), 0).toFixed(2)}</h2>
        <h2>{loanOutput && loanOutput.reduce((acc, curr) => acc + parseFloat(curr.monthlyPayment), 0).toFixed(2)}</h2>
      </Card>

      <Card title="Pie Chart">
        {loanOutput && <PaymentPieChart loanDetails={loanDetails} loanOutput={loanOutput} />}
      </Card>
      
      { numberOfYears &&
        [...Array(numberOfYears)].slice(0, accordiansToShow).map((_, yearIndex) => {
          const isInitialYear = yearIndex === 0;
          const isLastYear = yearIndex === numberOfYears - 1;
          const monthInYear = isInitialYear ? 13 - datevalue.month() : isLastYear ? loanOutput.length % 12 : 12;

          return (
            <AccordianComp key={yearIndex} months={monthInYear} year={yearIndex + 1} />
          )
        })
      }
      
      {numberOfYears > accordiansToShow && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          Show More
        </button>
      )}
    </LocalizationProvider>
  )
}

export default App
