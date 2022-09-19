import React, { useContext } from 'react'
import MyContext from '../../contexts/myContext.js'
import {Link} from 'react-router-dom'

export default function Historico() {
    const [relatoriosGuardados, setRelatoriosGuardados] = useContext(MyContext);
    relatoriosGuardados.map(relatorio =>{
        console.log(relatorio)
    })
    return (
        <ul>
            {relatoriosGuardados.map((relatorio, index) => (
               
                <li key={index}>
                    <Link to={{
                        pathname: `/historico/${index}`,
                    }}>Relatorio {index + 1}</Link>
                </li>
            ))}

        </ul>
    )
}