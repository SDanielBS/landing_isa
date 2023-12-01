import './TeamCard.css'

function TeamCard({id, name, image}) {
  return(
    <div className="team_card">
      <img src={image} alt={name} />
      <span className="team_name">{name}</span>
      <span className="team_id">{id}</span>
    </div>
  )
}

export { TeamCard }