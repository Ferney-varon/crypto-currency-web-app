import Card from "@/app/components/card";
import styles from "@/app/styles/markets.module.css"
import { LayoutProps } from "@/app/types";

const fetchMarketForCurrency = async (id:number)=>{
    const url = `https://api.coinlore.net/api/coin/markets/?id=${id}`

    const response = await fetch(url, {next: {revalidate: 60 }})

    if (!response.ok)throw new Error("Failed to fetch the markets for specific Currency");

    return response.json()
}

export default async function MarketForCurrencyPage ({params}: LayoutProps) {
    const {id} = params;
    const sliceAmount = 20;
    const data = await fetchMarketForCurrency(id);
    const MarketForCurrency = data.slice(0,sliceAmount);
    return (
        <>
            <div className={styles.bannerContainer}><span>Showing top {sliceAmount} markets:</span></div>
            <div className={styles.marketContainer}>
                    {MarketForCurrency.map((el:any)=>{
                        return <Card key={el.name} data={el}/>
                    })}
            </div>
        </>
    )
}