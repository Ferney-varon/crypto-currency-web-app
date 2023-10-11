import { TableComponent } from '../components/clientComponents/tableComponent';
import styles from '../styles/tables.module.css'


export default async function DashboardPage () {    
    return (
            <div className={styles.tableContainer}>
                <TableComponent/>
            </div>
    );
    
}