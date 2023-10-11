'use client'
import styles from '@/app/styles/error.module.css'

export default function Error ({reset}: {reset: () => void}): React.ReactNode {
    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>❌</div>
            <div className={styles.errorMessage}>An error occurred. Please try again later.</div>
            <button onClick={()=> reset()}>Try again</button>
        </div>
    );
};