import './Introduction.css'
import { Authors } from "../../components/Authors/Authors"
import { HeaderTitle } from "../../components/HeaderTitle/HeaderTitle"

function Introduction() {
  let authorsList = []
  const authors = [
    {
      rol: "PROCURADOR PÚBLICO ADJUNTO ESPECIALIZADO EN DELITOS DE CORRUPCIÓN",
      name: "Javier Alonso Pacheco Palacios",
      image: "https://procuraduriaanticorrupcion.minjus.gob.pe/wp-content/uploads/2017/12/JAPP-300x469.jpg",
      comment: "“En un lapso de 4 años la cantidad de procesos por corrupción contra autoridades (en trámite y ejecución) se incrementó en 86.86%. En consecuencia, del total de los casos de corrupción analizados, el delito de mayor incidencia en el que habrían participado las autoridades electas es el de peculado, seguido por el delito de colusión.”"
    },
    {
      rol: " ex ministro de Energía y Mina",
      name: " José de Echave",
      image: "https://elcomercio.pe/resizer/7VKzbygxxTldYtLQV_2kMwxr4-c=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6HTOUC7TNRCW5CMLTKBIJMG4V4.jpg",
      comment: "“La corrupción es un \"cáncer\" que corroía las instituciones públicas y la confianza que deposita el ciudadano en ellas.”"
    },
    {
      rol: " PROCURADORA PÚBLICA(e) ESPECIALIZADA EN DELITOS DE CORRUPCIÓN",
      name: " Yudith Villegas Espinoza",
      image: "https://procuraduriaanticorrupcion.minjus.gob.pe/wp-content/uploads/2017/12/YVE-300x574.jpg",
      comment: "“Los efectos de la corrupción en nuestro país, perjudica el desarrollo de los objetivos de una serie de entidades públicas y privadas, por lo que es fundamental identificar el origen del problema, asimilar sus dimensiones y mediante las conclusiones de un análisis serio dar un tratamiento eficaz al problema.”"
    }
  ]

  const titleData = {
    title: "Corrupción en gobiernos regionales y locales: propuestas para el cambio",
    image: "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2022/02/01151957/imagen_2022-02-01_101944-800x534.png"
  }

  authors.map((author) => {
    authorsList.push(
      <Authors
        key={author.name}
        rol = {author.rol}
        name = {author.name}
        image = {author.image}
        comment = {author.comment}
      />
    )
  })

  return (
    <div className="wrapper">
      <HeaderTitle
        title = {titleData.title}
        image={titleData.image}
      />
      <div className="author-containers">
        {authorsList}
      </div>
    </div>
  )
}

export { Introduction } 