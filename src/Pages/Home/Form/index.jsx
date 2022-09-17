import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css'
export default function Form() {
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        const quantidade = parseInt(e.target.elements.quantidade.value);
        navigate(`start/${quantidade}`)
    }


    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="quantidade">Informe a quantidade</label>
            <input pattern="^\d+$" type="number" name="quantidade" id="quantidade" />
            <button className={styles.botao} type="submit" >Enviar</button>
        </form>
    )
}
