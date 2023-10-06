import Link from "next/link";


export type Route = {
    name: string;
    route: string
}

const routes : Route[]= [
    {
        name: 'testing',
        route: '/testing'
    },
    {
        name: 'testing1',
        route: '/testing1'
    }
]

export default function Navigation () {
    return(
    <nav>
        <ul>
            {routes.map((el: Route):any => {
                <li key={el.route}>
                    <Link href={el.route}>{el.name}</Link>
                </li>
            })}
        </ul>
    </nav>
)};