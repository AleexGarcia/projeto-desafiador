import styles from './StartCancel.module.css';
import { useNavigate } from 'react-router-dom';
export default function StartCancel() {
    const navigate = useNavigate();
   
    return (
        <div className={styles.container}>
            <button
                onClick={e => {
                    navigate('questionpage')
                }}
                className={styles.botao}>
                Start</button>
            <button
                onClick={e => navigate('/')}
                className={styles.botao}>
                Cancel</button>
        </div>
    )
}