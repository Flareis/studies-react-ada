import { useState } from "react"

export default function MyAccounter() {

  console.log('Renderizando meu account.')
  const [account, setAccount] = useState(0)


  function increase() {
    setAccount(account + 1)
  }

  function decrease() {
    setAccount(account - 1)
  }

  if(account > 5){
    return (
      <div>
       <h1>Valor Muito Alto!</h1>
       <button onClick={increase}>increase</button>
       <button onClick={decrease}>decrease</button> 
    </div>
    )
  }

  return (
    <div>
      <h1>My Account: {account}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button> 
    </div>
  )

  /* return (
    <div>
      <h1>My Accounter</h1> 
      {
        account > 9 ? <h1> Valor muito grande</h1> : null
      }
      {
        account > 9 ? <button> Deletar </button> : null
      }
      <h3>{account}</h3>
      <button onClick={increase}>Increase</button>
    </div>
  ) */
}