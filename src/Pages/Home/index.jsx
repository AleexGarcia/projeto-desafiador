import styles from './Home.module.css'
import Form from './Form/index'
import React, { useContext } from 'react'
import MyContext from '../../contexts/myContext.js'
import { useNavigate } from 'react-router-dom';

function Home() {

  const [relatoriosGuardados, setRelatoriosGuardados] = useContext(MyContext);


  let button;
  let navigate = useNavigate();
  if (relatoriosGuardados != '') {
    button = <button
      onClick={() => {
        navigate(`/historico`)
      }}
      className={styles.botao}
      type="button"
    >Relatorios</button>
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
