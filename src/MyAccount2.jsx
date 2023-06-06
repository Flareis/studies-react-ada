import { useState } from "react";
import styles from './button.module.css'

export default function Myaccount() {
  const [account, setAccount] = useState(0)

  function lower() {
    setAccount(account +1)
  }

  return (
    <div className="container">
      <h1>Meu Contador II</h1>
      <h3>{account}</h3>
      <button className={styles.myButton} onClick={lower}>Aumentar</button>
    </div>
  )
}