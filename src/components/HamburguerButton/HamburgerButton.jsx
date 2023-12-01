import './HamburgerButton.css'

function HamburgerButton({clicked, handlerClick}) {
  return (
    <div 
      className={`icon nav-icon-5 ${clicked ? 'open' : ''}`} 
      onClick={handlerClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export { HamburgerButton }