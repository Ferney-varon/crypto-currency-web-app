import { TableComponent } from '../components/clientComponents/tableComponent';
import styles from '../styles/tables.module.css'


export default async function DashboardPage () {    
    return (
        <>
            <div><span>This should be Dashboard</span></div>
            <div className={styles.tableContainer}>
                <TableComponent/>
            </div>
        </>
    );
    
}