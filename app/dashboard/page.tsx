import { TableHead } from '../components/clientComponents/tableHead';
import TabularRow from '../components/tabularRow';
import styles from '../styles/tables.module.css'


const fetchCryptoCurrency = async ()=>{
    const url = 'https://api.coinlore.net/api/tickers/'

    const response = await fetch(url, {next: {revalidate: 60 }})
    if (!response.ok)throw new Error("Failed to fetch Crypto currencies");

    return response.json()
}

export default async function DashboardPage () {

    const {data} = await fetchCryptoCurrency();
    
    return (
        <div className={styles.tableContainer}>
            <table className={styles.tableElement}>
                <thead className={styles.tableHeaderGroup}>
                    <TableHead data={data} />
                </thead>
                <tbody className={styles.tableBodyGroup}>
                    {data?.map((el:any)=>{
                        return (
                            <TabularRow key={el.id} data={el}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
    
}