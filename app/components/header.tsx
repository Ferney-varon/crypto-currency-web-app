import styles from "../styles/header.module.css"
import Navigation from "./navigation";
import Image from 'next/image'

export default function Header () {

return (
<header className={styles.header}> 
    <div className={styles.logoContainer}>
        <Image src={'https://img.icons8.com/officel/80/logo.png'} width={50} height={50} alt="company-logo"/>
        <h1>All the information you need<br /> in one place</h1>
    </div>
    <div className={styles.navContainer}>
        <Navigation /> 
    </div>
</header>
)};