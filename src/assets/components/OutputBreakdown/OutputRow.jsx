function OutputRow({ details, key, handleClick }) {


    return (
        <>
            <tr key={key} onMouseOver={() => handleClick(details)}>
                <td>{details.date}</td>
                <td>{details.monthlyPayment}</td>
                <td>{details.monthlyPrincipal}</td>
                <td>{details.monthlyInterest}</td>
                <td>{details.remainingBalance}</td>
            </tr>
        </>
    );
}

export default OutputRow;