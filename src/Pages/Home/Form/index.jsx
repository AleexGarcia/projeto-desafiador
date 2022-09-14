import './Form.css'
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
            <button className='botao' type="submit" >Enviar</button>
        </form>
    )
}
