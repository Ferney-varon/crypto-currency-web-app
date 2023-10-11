import Button from "../components/clientComponents/commonButton";
import { InputState } from "../components/clientComponents/inputState";
import { LayoutProps } from "../types";
import styles from '../styles/dashboard.module.css'

export default function DashboardLayout ({children}: LayoutProps): React.ReactNode {
    return (
        <section className={styles.dashboardContainer}>
            <div className={styles.dashboard}>
                <div className={styles.buttonContainer}>
                    <Button href={'/'} text={'\u2302'} dashboardBtn={true} />
                    <div className={styles.dashboardInfo}>
                        <h2>Latest information in your hands.</h2>
                        <span>Interact with each currency to know more</span>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <InputState />
                </div>
            </div>
            {children}
        </section>
)};