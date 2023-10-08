import styles from "@/app/styles/card.module.css"

export default function Card ({data}:any) {
    const {name,base,price_usd} = data;
    const price = price_usd.toFixed(3)
    const infoHeaders = ['Base Currency:','Price Offered:']
    const infoData = [base, `$${price}`];
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
}