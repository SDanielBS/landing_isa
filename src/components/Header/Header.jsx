import { Link } from "react-router-dom"
import './Header.css'
import { HamburgerButton } from "../HamburguerButton/HamburgerButton"
import { useState } from "react"

function Header() {
  let [ navState, setNavState ] = useState(false)
  const burgerbuttonHandlerClick = () => {
    setNavState(!navState)
  }
  const  burgerbuttonSetClickFalse = () => {
    setNavState(false)
  }
  return (
    <header className="main-header">
      <div className="main-header-container wrapper">
        <h2 className="text-logo">
          <Link to='/' onClick={burgerbuttonSetClickFalse} >Comunicación 3 <span>Clase 8960</span></Link>
        </h2>
        <nav className={`main-nav ${navState ? 'active' : ''}`}>
          <ul>
            <li>
              <Link className="main-nav-link" to='/'  onClick={burgerbuttonSetClickFalse} >Inicio</Link>
            </li>
            <li>
              <Link className="main-nav-link" to='/ensayo'  onClick={burgerbuttonSetClickFalse} >Ensayo</Link></li>
            <li>
              <Link className="main-nav-link" to='/team'  onClick={burgerbuttonSetClickFalse} >Equipo</Link>
            </li>
          </ul>
        </nav>
        <div className="burger-container">
          <HamburgerButton clicked={navState} handlerClick={burgerbuttonHandlerClick} />
        </div>
        <div className={`bg-nav ${navState ? 'active' : ''}`}></div>
      </div>
    </header>
  )
}

export { Header }