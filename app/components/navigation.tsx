import Button from "./clientComponents/commonButton";
import { Route } from "../types";
import { ROUTES } from "../constants"
import styles  from "../styles/navigation.module.css"

export default function Navigation () {
    return(
    <nav>
        <ul className={styles.nav}>
            {ROUTES.map((el: Route):any => {
                return (
                    <li key={el.route}>
                        <Button href={el.route} text={el.label} />
                    </li>
                )}
            )}
        </ul>
    </nav>
)};