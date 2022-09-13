
function App() {
  
  return (
    <form>
      <label htmlFor="quantidade">Informe a quantidade</label>
      <input pattern="^\d+$" type="number" name="quantidade" id="quantidade" />
      <button type="button">Submit</button>
    </form>
  )
}

export default App
