import styles from "@/app/styles/card.module.css"
import { MarketsResponse } from "../types";

export default function Card ({data}: {data: MarketsResponse}) {
    const {name, base, price_usd} = data;
    const infoHeaders = ['Base Currency:','Price Offered:']
    const infoData = [base, `$${price_usd}`];
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardElement}>
                <div className={styles.cardHeader}>
                    <p>{name}</p>
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.infoHeaders}>
                        {infoHeaders.map((header)=>{
                            return (
                                <span className={styles.cardHeaders} key={header}>{header}</span>
                            )
                        })}
                    </div>
                    <div className={styles.infoData}>
                        {infoData.map((data)=>{
                            return (
                                <span className={styles.cardHeaders} key={data}>{data}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};