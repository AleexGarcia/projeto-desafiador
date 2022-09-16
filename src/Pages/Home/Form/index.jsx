import styles from './Form.module.css'
export default function Form(){
    
    const onSubmit = (e) => {
        e.preventDefault();
        const quantidade = e.target.elements.quantidade.value;
        console.log(quantidade)
      }
    
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="quantidade">Informe a quantidade</label>
            <input pattern="^\d+$" type="number" name="quantidade" id="quantidade" />
            <button className={styles.botao} type="submit" >Enviar</button>
        </form>
    )
}
