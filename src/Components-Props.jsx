import MyComponent from "./compenents/MyComponent"
function App() {

  return (
    <div>
      <h1>Hello world, React!</h1>
      <MyComponent/>
      <MyButton conteudo= 'Click Here!'/>
      <MyButton conteudo= 'Click Again!'/>
      <MyButton conteudo= 'Again!'/>
    </div>
    
  )
}

function MyButton(props){
  console.log(props.conteudo)
  return (
    <button>{props.conteudo}</button>
  )
}

export default App
