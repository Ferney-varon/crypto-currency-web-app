import { LayoutProps } from "@/app/types";
import Link from "next/link";


const fetchSingleCurrency = async (id: number)=>{
    const url = `https://api.coinlore.net/api/ticker/?id=${id}`

    const response = await fetch(url, {next: {revalidate: 60 }})

    if (!response.ok)throw new Error("Failed to fetch single Currency");

    return response.json()
}

export default async function CurrencyLayout ({children, params}: LayoutProps ) {
    const {id} = params;
    const [singleCurrency] = await fetchSingleCurrency(id);
    return (
        <div>
            <p>Testing each coing: {singleCurrency.name}</p>
            <p>Testing each coing: {singleCurrency.price_usd}</p>
            <Link href='/dashboard/[id]/markets' as={`/dashboard/${id}/markets`}>Want to see Markets for {singleCurrency.name}</Link>
            {children}
        </div>
    )
}