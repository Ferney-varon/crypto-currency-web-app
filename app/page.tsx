import Aside from "./components/aside";
import CryptoFetcherButton from "./components/clientComponents/cryptoFetcherButton";
import styles from './styles/main.module.css'

const fetchGlobalData = async ()=>{
  const url = `https://api.coinlore.net/api/global/`

  const response = await fetch(url, {next: {revalidate: 60 }})

  if (!response.ok)throw new Error("Failed to global data");

  return response.json()
}

export default async function HomePage() {
  const [response] = await fetchGlobalData()
const {coins_count, active_markets, btc_d, total_mcap} = response
  return (
    <div className={styles.mainWrapper}>
      <section className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <h2>The new level of currency. </h2>
          <span>Here are some Fun Facts about cryptos</span>
          <span>¿Did you know there are {coins_count} currencies operating?</span>
          <span>Currently there are {active_markets} markets.</span>
          <span>Bitcoin has a market dominance of {btc_d}%.</span>
          <span>Market capitalization: ${total_mcap}.</span>
          <span>!And it is expected to grow even more! </span>
          <CryptoFetcherButton />
        </div>
      </section>
      <Aside />
    </div>
  )
}
