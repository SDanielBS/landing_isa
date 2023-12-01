import './HeaderTitle.css'

function HeaderTitle({title, image}) {
  return(
    <div className="title-container">
      <img src={image} alt="" />
      <h1 className="biggest">{title}</h1>
    </div>
  )
}

export { HeaderTitle }

