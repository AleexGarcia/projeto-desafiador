import styles from './Home.module.css'
import Form from './Form/index'
function Home() {

  
  return (
    <div className={styles.container}>
      <header>
        <h1>Projeto desafiador</h1>
      </header>
      <Form/>
      <button className={styles.botao} type="button" >relatorio</button> 
      
    </div>
  )
}

export default Home
