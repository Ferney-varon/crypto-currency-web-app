import Link from "next/link";

export default function TabularRow ({data}:any) {
    const {name, price_usd, rank, id} = data;
    return (
        <tr>
            <td>{rank}</td>
            <td><Link href='/dashboard/[id]' as={`/dashboard/${id}`}>{name}</Link></td>
            <td>{price_usd}</td>
        </tr>
    );
}