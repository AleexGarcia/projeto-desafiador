import styles from './StartCancel.module.css';
export default function StartCancel() {
    return (
        <div className={styles.container}> 
            <button className={styles.botao}>Start</button>
            <button className={styles.botao}>Cancel</button>
        </div>

    )
}