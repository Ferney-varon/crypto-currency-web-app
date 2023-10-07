import Button from "./clientComponents/commonButton";
import { Route } from "../types";
import { ROUTES } from "../constants"

export default function Navigation () {
    return(
    <nav>
        <ul>
            {ROUTES.map((el: Route):any => {
                <li key={el.route}>
                    <Button href={el.route} text={el.label} />
                </li>
            })}
        </ul>
    </nav>
)};