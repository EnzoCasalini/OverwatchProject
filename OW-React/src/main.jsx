import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PlayerPage from "./PlayersPage/PlayersPage";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
      <PlayerPage />
  </React.StrictMode>,
)
