import styles from './Home.module.css'
import Form from './Form/index'
import React, { useContext } from 'react'
import MyContext from '../../contexts/myContext.js'


function Home() {

  const [relatoriosGuardados, setRelatoriosGuardados] = useContext(MyContext);


  let button;

  if(relatoriosGuardados != ''){
    button = <button className={styles.botao} type="button" >relatorio</button>
  }

  return (

    <div className={styles.container}>
      <header>
        <h1>Projeto desafiador</h1>
      </header>
      <Form />
      {button}
    </div>
  )
}

export default Home
