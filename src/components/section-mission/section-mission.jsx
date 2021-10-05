import styles from "./section-mission.module.scss";
import MagicComponent from "./../magic-component/magic-component";
import MagicBell from "../magic-bell/magic-bell";


const SectionMission = () => {
  return (
    <div id={'mission'}  className={styles.content}> 
    
      <div className={styles.box} >
        <h2  className={styles.title}>Misión</h2>
        <MagicComponent>
          <p>
          Crear una plataforma que otorgue<span className={styles.text}> VALOR LEGAL </span>a un medio electrónico, de forma rápida, segura y eficaz permitiendo ahorrar tiempo y dinero, evitando problemas legales por el uso de correos electrónicos.
          </p>
          <p className={styles.phrase}>
          NUNCA FUE TAN FACIL, EFICAZ Y ECONÓMICO NOTIFICAR UNA DECISIÓN.
          </p>
        </MagicComponent>
      </div>
      <MagicBell/>
    </div>
  )
}

export default SectionMission;