function PaginationButtons({handlepageChange}) {
    return (
        <div className="pagination-buttons">
        <button className="pagination-button" onClick={() => handlepageChange('prev')}>Previous</button>
        <button className="pagination-button" onClick={() => handlepageChange('next')}>Next</button>
        </div>
    );
}

export default PaginationButtons;