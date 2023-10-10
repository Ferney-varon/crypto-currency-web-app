import Aside from "./components/aside";
import CryptoFetcherButton from "./components/clientComponents/cryptoFetcherButton";

const fetchGlobalData = async ()=>{
  const url = `https://api.coinlore.net/api/global/`

  const response = await fetch(url, {next: {revalidate: 60 }})

  if (!response.ok)throw new Error("Failed to global data");

  return response.json()
}

export default async function HomePage() {
  const [response] = await fetchGlobalData()
const {coins_count, active_markets} = response
  return (
    <>
      <section className='main-container'>
        <h1>This is main route / </h1>
        <p>{coins_count}</p>
        <CryptoFetcherButton />
      </section>
      <hr />
      <Aside />
    </>
  )
}
