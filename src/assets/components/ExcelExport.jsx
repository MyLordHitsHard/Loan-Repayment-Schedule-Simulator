
import * as XLSX from 'xlsx'
// import { saveAs } from 'file-saver';
function ExcelExport({data}) {
    const exportToExcel = () => {

        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Sheet 1")
        XLSX.writeFile(wb, "output.xlsx");
        // const table = document.getElementById(tableId)
        // const wb = XLSX.utils.table_to_book(table, {sheet: 'Sheet 1'})
        // const wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'binary'})
        // const s2ab = (s) => {
        //     const buf = new ArrayBuffer(s.length)
        //     const view = new Uint8Array(buf)
        //     for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
        //     return buf
        // }
        // saveAs(new Blob([s2ab(wbout)], {type: 'application/octet-stream'}), 'test.xlsx')
    }

    return (
        <div>
            <button onClick={exportToExcel}>Export to Excel</button>
        </div>
    )
}

export default ExcelExport