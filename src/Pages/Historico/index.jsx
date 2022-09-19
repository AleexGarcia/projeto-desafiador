import React, { useContext } from 'react'
import MyContext from '../../contexts/myContext.js'
import styles from './Historico.module.css'
import { Link,useNavigate } from 'react-router-dom'

export default function Historico() {
    const [relatoriosGuardados, setRelatoriosGuardados] = useContext(MyContext);
    let navigate = useNavigate();
    return (
        <div>
            <button
                onClick={() => navigate(-1)}
                className={styles.botao}
            >
                Voltar</button>
            <ul className={styles.lista}>
                {relatoriosGuardados.map((relatorio, index) => (

                    <li key={index}>
                        <Link className={styles.link} to={{
                            pathname: `/historico/${index}`,
                        }}>Relatorio {index + 1}</Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}