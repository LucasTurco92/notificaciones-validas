import styles from "./section-propose.module.scss";
import MagicComponent from "./../magic-component/magic-component";
const SectionPropose = () => {
  return (
    <div> 
      <div id={'propuesta'}  className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>Nosotros proponemos</h2>
          <MagicComponent>
          <p>
            Somos un equipo que ha desarrollado la primer plataforma para notificar en forma digital de manera simple, comprobable y legal entre partes.
          </p>
          </MagicComponent>
        </div>
        <img className={styles.appImg} src={'/images/app-1.svg'} />
      </div>
    </div>
  )
}

export default SectionPropose;