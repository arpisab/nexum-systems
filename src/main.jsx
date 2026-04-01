import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppIT from './AppIT.jsx'
import './styles/global.css'

const path = window.location.pathname

const isItalian = path.startsWith('/it')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isItalian ? <AppIT /> : <App />}
  </React.StrictMode>
)