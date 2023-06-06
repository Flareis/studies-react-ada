import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components-Props.jsx'
import Account from './States-Events.jsx'
import Renderizador from './myList.jsx'
import Fetch from './fetch.jsx'
import Myaccount from './MyAccount2.jsx'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myaccount />
    <App />
    <Account />
    <Renderizador />
    <Fetch />
  </React.StrictMode>,
)
