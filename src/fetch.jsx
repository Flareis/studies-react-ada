import { useEffect, useState } from "react"

/* const tasks = [
  {id: '1', title: 'minha primeira tarefa'},
  {id: '2', title: 'minha segunda tarefa'},
  {id: '3', title: 'minha terceira tarefa'},
  {id: '4', title: 'minha quarta tarefa'},
  {id: '5', title: 'minha quinta tarefa'},
]
 */
export default function Fetch() {

  const [tasks, setTasks] =useState([])

useEffect(() => {
  async function findDatas() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos',)
    const finalResult = await result.json()
    return finalResult
  }

  findDatas().then(res => setTasks(res))
}, [])

  return (
    <div>
      <h1>Buscando Dados</h1>
      <ol>
        {tasks.map((task) => {
        return (
          <div key={task.id}>
           <li>
            {task.title}
            {task.completed ? <span> - Tarefa Concluída</span> : null }
            </li>
         </div>
        )
      })}
      </ol>
    </div>
  )
}