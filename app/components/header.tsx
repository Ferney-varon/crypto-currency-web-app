import Button, { ButtonProps } from "./clientComponents/commonButton";
import styles from "../styles/header.module.css"
import Navigation from "./navigation";

export default function Header () {
const homeButtonText= 'Back Home'
const props : ButtonProps = {
    text: homeButtonText
}
return (
<header className={styles.header}> 
    <div className="button-container">
        <Button text={homeButtonText} />
    </div>
    <hr />
    <div className="nav-container">
        <Navigation />
        Testing 
    </div>
</header>
)};