import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import './assets/css/main.css'
import Ad from './Ad'
import IndexMain from './IndexMain'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <Ad />
    <IndexMain />
  </React.StrictMode>,
)
