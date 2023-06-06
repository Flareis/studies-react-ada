import { useEffect, useState } from "react"

const myList = [
  {id: '1', value: 'Frutas'},
  {id: '2', value: 'Legumes'},
  {id: '3', value: 'Cereais'},
]

export default function MyList() {

  const [products, setProducts] = useState(myList)
  const [resarch, setResarch] = useState('')

  useEffect(
    () => {
      if(resarch) {
        const newList = myList.filter( (item) => {
        return item.value.toLowerCase().includes(resarch.toLowerCase())
      })
      setProducts(newList)
      } else {
        setProducts(myList)
      }
    }
  , [resarch])
  
    return (
      <div>
        <h1>Efeitos Colaterais</h1>
        <input 
        value={resarch}
        onChange={(e) => setResarch(e.target.value)}
        placeholder="Pesquise aqui!"></input>
        {products.map((item) => {
          return ( <div key={item.id}>
         <h4>{item.value}</h4>
      </div>)
        })}
      </div>  
  )
}