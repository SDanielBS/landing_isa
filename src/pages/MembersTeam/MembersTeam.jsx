import './MembersTeam.css' 
import { TeamCard } from "../../components/TeamCard/TeamCard"
import ventura from '../../assets/ventura.jpg'
import salazar from '../../assets/salazar.jpg'
import cesti from '../../assets/cesti.jpg'
import pablo from '../../assets/pablo.jpg'
import classp1 from '../../assets/classp1.jpg'
import classp2 from '../../assets/classp2.jpg'

function MembersTeam() {
  const team = [
      { 
        id : "N00356796",
        name :"Salazar Balvaceda Saul Andy",
        image: salazar
      }, 
      { 
        id : "N00278091",
        name :"Ventura Cruz María Isabel",
        image: ventura
      },     
      { 
        id : "N00335434",
        name :"Piñan Pablo Alex Sandro",
        image: pablo
      },     
      {
        id : "N00359222",
        name : "Cesti Anhuaman Piero Angello",
        image: cesti
      }
  ]

  let teamListView = []

  team.map((member) => {
    teamListView.push(
        <TeamCard
          key = {member.id}
          id = {member.id}
          name = {member.name}
          image = {member.image}/>
      )
  })

  return (
    <div className="team wrapper">
      <div className="header_team">
        <h3>UNIVERSIDAD PRIVADA DEL NORTE</h3>
        <h3>Comunicación 3-8960</h3>
      </div>
      <div className="prof_section">
        <p className='sub_title'>Docente: 
        <span className='teacher_name'> MARIA SANDRA BASALDUA GUZMAN</span>
        </p>
      </div>
      <div className="team_container">
        <p className='sub_title'>Integrantes:</p>
        <div className="team_list">
          {teamListView}
        </div>
      </div>
      <div className="class_photo">
        <img src={classp1} alt="" />
        <img src={classp2} alt="" />
      </div>
      <p className='date_loca'>LIMA - 2023</p>
    </div>
  )
}

export { MembersTeam } 