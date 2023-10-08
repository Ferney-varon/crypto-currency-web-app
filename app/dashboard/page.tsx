import TabularRow from '../components/tabularRow';
import { TABLE_HEAD_INFO } from '../constants'


const fetchCryptoCurrency = async ()=>{
    const url = 'https://api.coinlore.net/api/tickers/'

    const response = await fetch(url, {next: {revalidate: 60 }})

    if (!response.ok)throw new Error("Failed to fetch Crypto currencies");

    return response.json()
}

export default async function DashboardPage () {

    const {data} = await fetchCryptoCurrency();
    // TODO: remove the slice fn after testing
    const cryptoCurrency = data;
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        {TABLE_HEAD_INFO.map((el)=>{
                            return <th key={el}>{el}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {cryptoCurrency.map((el:any)=>{
                        return (
                            <TabularRow key={el.id} data={el}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
    
}