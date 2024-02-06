
import { LoanDetailsProvider } from '../context/LoanDetailsContext';
import { PieChartProvider } from '../context/PieChartContext';
import { BarGraphProvider } from '../context/BarGraphContext';

export const Provider = ({ children }) => (
    <LoanDetailsProvider>
        <PieChartProvider>
            <BarGraphProvider>
                {children}
            </BarGraphProvider>
        </PieChartProvider>
    </LoanDetailsProvider>
);