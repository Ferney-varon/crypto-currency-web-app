import Button from "./clientComponents/commonButton";
import styles from "../styles/header.module.css"
import Navigation from "./navigation";
import { ButtonProps } from "../types";
import { ROUTES } from '../constants'

export default function Header () {
// const props : ButtonProps = {
//     text: homeButtonText
// }
const [homeRoute] = ROUTES.filter(({label})=>label === 'Home');
return (
<header className={styles.header}> 
    <div className="button-container">
        <Button href={homeRoute.route} text={homeRoute.label} />
    </div>
    <hr />
    <div className="nav-container">
        <Navigation />
        Testing 
    </div>
</header>
)};