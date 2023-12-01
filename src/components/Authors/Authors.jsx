import './Authors.css'

function Authors({rol, name, image, comment}) {

  return(
    <section className="author-section">
      <p className="author-rol">{rol}</p>
      <div className="author">
        <div className="author-data">
          <img src={image} alt="" />
          <p className="author-name" >{name}</p>
        </div>
        <div className="author-comment">
          <p>{comment}</p>
        </div>
      </div>
    </section>
  )
}

export { Authors }