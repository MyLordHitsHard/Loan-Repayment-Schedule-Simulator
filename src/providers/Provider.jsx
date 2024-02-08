
import { LoanDetailsProvider } from '../context/LoanDetailsContext';
import { LoanOutputProvider } from '../context/LoanOutputContext';
import { PieChartProvider } from '../context/PieChartContext';
import { BarGraphProvider } from '../context/BarGraphContext';

export const Provider = ({ children }) => (
    <LoanDetailsProvider>
        <LoanOutputProvider>
            <PieChartProvider>
                <BarGraphProvider>
                    {children}
                </BarGraphProvider>
            </PieChartProvider>
        </LoanOutputProvider>
    </LoanDetailsProvider>
);