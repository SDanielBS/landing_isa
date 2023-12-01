import './TextClousing.css'
import { HeaderTitle } from "../../components/HeaderTitle/HeaderTitle"
import bandera from '../../assets/bandera.jpg'
import parade from '../../assets/diegofary.jpg'
import stopCorr from '../../assets/manitoNo.jpg'

function TextClousing() {
  const titleData = {
    title: "Corrupción en gobiernos regionales y locales: propuestas para el cambio",
    image: "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2022/02/01151957/imagen_2022-02-01_101944-800x534.png"
  }

  return (
    <div className="wrapper">
      <HeaderTitle
        title = {titleData.title}
        image={titleData.image}
      />
      <div className="ensayo">
        <div className="p_image">
          <p>Un estudio realizado por la Procuraduría Pública Especializada en Delitos de Corrupción evidenció un incremento en la cantidad de procesos por corrupción contra autoridades (en trámite y ejecución) en un 86.86%. <br/> En un lapso de 4 años, la corrupción en los gobiernos regionales y locales se incrementó notablemente a pesar de contar un sistema de control y leyes que regulan dichos gobiernos, sin embargo, ¿El sistema de control actual es eficiente y suficiente para combatir la corrupción?</p>
          <img src={stopCorr} alt="" />
        </div>
        <p>Desde nuestro punto de vista, el estado debe reformar la Ley- 27860 Ley de Transparencia y al acceso a la información pública en el artículo 22° para fortalecer el control en los gobiernos regionales y locales promoviendo una mayor transparencia, además el estado debería crear un organismo de control independiente y autónomo que utilice sistemas de control a tiempo real facilitando el acceso a información y disposición de informes detallados del gobierno de turno, para mejorar los mecanismos de rendición de cuentas de los gobiernos regionales y locales generando confianza en la ciudadanía.</p>
        <p>Para demostrar la validez de nuestra tesis, presentamos los siguientes argumentos.</p>
        <p>En lo que vamos a enfocarnos es en la evolución de la corrupción en gobiernos regionales y locales durante los últimos años y sus efectos en la ciudadanía.<br/>Actualmente, la información estadística de la corrupción en los gobiernos regionales y locales, de acuerdo con Olano, Pacheco y Villegas (2022), demostró un incremento notable en los casos de corrupción que había en los gobiernos regionales y locales de acuerdo con el estudio realizado. Se evidenció que en un lapso de 4 años la cantidad de procesos por corrupción contra autoridades (en trámite y ejecución) se incrementó en 86.86%. En consecuencia, del total de los casos de corrupción analizados, el delito de mayor incidencia en el que habrían participado las autoridades electas es el de peculado, seguido por el delito de colusión.</p>
        <div className="p_image p_image_left">
          <p>Estos efectos, tienen un impacto negativo en la ciudadanía, según Olano, Pacheco y Villegas (2022). De manera que, estos delitos ocasionados por la corrupción tienen un impacto negativo en la confianza de los ciudadanos en las entidades públicas, ya que menoscaba la legitimidad de estas instituciones y de sus principales autoridades. Por ello, cuando los ciudadanos perciben que los funcionarios públicos están involucrados en actos de corrupción, pierden la confianza en la capacidad de estas instituciones de servirles y de representar sus intereses. Por esta razón, la corrupción en los gobiernos regionales y locales del Perú es un problema grave que tiene un impacto negativo en el desarrollo del país. La corrupción genera atraso, inestabilidad e inseguridad, y erosiona la confianza de los ciudadanos en las instituciones públicas.</p>
          <img src={parade} alt="" />
        </div>
        <p>La corrupción en gobiernos regionales y locales es un problema crónico que genera atraso, inestabilidad e impacta negativamente en el desarrollo del país. Este cáncer corroe las instituciones públicas y la confianza de los ciudadanos, lo que debilita la democracia.</p>
        <p>Según José de Echave, ex ministro de Energía y Minas (2012), la corrupción es un "cáncer" que "corroía las instituciones públicas y la confianza que deposita el ciudadano en ellas". En Perú, la corrupción ha tenido un impacto negativo en varios sectores, como la minería ilegal en Apurímac.</p>
        <p>Para combatir la corrupción, es necesario fortalecer el control en estos niveles de gobierno. Una reforma de la Ley de Transparencia y acceso a la información pública podría contribuir a ello, al permitir un mayor acceso a la información pública. Esta medida es necesaria para fortalecer el control en los gobiernos regionales y locales, ya que el artículo 22° de esta ley establece que estos gobiernos deben publicar información sobre sus presupuestos, gastos y contrataciones. Sin embargo, esta información a menudo es incompleta o no está actualizada. Además de fortalecer el control, es importante que las nuevas autoridades regionales elegidas implementen acciones efectivas para prevenir, detectar y sancionar la corrupción. Para ello, deben rodearse de equipos de trabajo honestos y eficientes, y su labor no debe verse comprometida desde el inicio.</p>
        <img src={bandera} alt="" />
        <p>En este sentido, Eduardo Vega, profesor de la Universidad Antonio Ruiz de Montoya (2018), señala que "esta tarea requiere, pues, de una acción decidida por parte de los nuevos gobernadores: por un lado, estos deben rodearse de equipos de trabajo que tengan una clara trayectoria de honestidad y eficiencia, y, por otro lado, su labor no debe verse comprometida, desde el inicio".</p>
        <p>Por último, una medida que podría ayudar a mejorar los mecanismos de rendición de cuentas de los gobiernos regionales y locales es la creación de un organismo autónomo que use sistemas de control a tiempo real. Estos sistemas permitirían a los ciudadanos y a las autoridades monitorear en tiempo real las actividades de estos gobiernos.</p>
        <p>En síntesis, para combatir la corrupción, es necesario fortalecer el control en estos niveles de gobierno. Una reforma de la Ley de Transparencia y acceso a la información pública podría contribuir a ello, al permitir un mayor acceso a la información pública. Esta medida es necesaria para fortalecer el control en los gobiernos regionales y locales, ya que el artículo 22° de esta ley establece que estos gobiernos deben publicar información sobre sus presupuestos, gastos y contrataciones. En resumen, el estado debe tomar acciones legales y decisiones drásticas para evitar la corrupción en todos los gobiernos regionales o locales.</p>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Y-03CLuCMQo?si=bQuKBAVi3lmVg2ED" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export { TextClousing } 