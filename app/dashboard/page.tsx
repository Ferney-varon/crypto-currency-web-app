import { TableComponent } from '../components/clientComponents/tableComponent';
import styles from '../styles/tables.module.css'


export default function DashboardPage (): React.ReactNode {    
    return (
            <div className={styles.tableContainer}>
                <TableComponent/>
            </div>
    );
    
}