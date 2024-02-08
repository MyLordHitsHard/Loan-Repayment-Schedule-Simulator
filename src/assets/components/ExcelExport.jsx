
import * as XLSX from 'xlsx'

function ExcelExport({data}) {
    const exportToExcel = () => {

        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Sheet 1")
        XLSX.writeFile(wb, "output.xlsx");
    }

    return (
        <div>
            <button onClick={exportToExcel}><img src='../../xlsx.svg' width='50px'></img></button>
        </div>
    )
}

export default ExcelExport