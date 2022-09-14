import './Home.css'
import Form from './Form/index'
// import Question from '../../Components/ListQuestion/Question'
// import ListQuestion from '../../Components/ListQuestion'
function Home() {

  
  return (
    <div className="container">
      <header>
        <h1>Projeto desafiador</h1>
      </header>
      <Form/>
      <button className='botao' type="button" >relatorio</button> 
      
    </div>
  )
}

export default Home
