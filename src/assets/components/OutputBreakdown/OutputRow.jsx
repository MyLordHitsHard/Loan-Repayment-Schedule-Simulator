// import {useState} from 'react'
function OutputRow({ details, key, handleClick }) {
    // const [showChart, setShowChart] = useState(false)


    return (
        <>
            <tr key={key} onMouseOver={() => handleClick(details)}>
                <td>{details.month}</td>
                <td>{details.monthlyPayment}</td>
                <td>{details.monthlyPrincipal}</td>
                <td>{details.monthlyInterest}</td>
                <td>{details.remainingBalance}</td>
            </tr>
        </>
    );
}

export default OutputRow;