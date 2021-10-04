import styles from "./section-propose.module.scss";

const SectionPropose = () => {
  return (
    <div> 
      <div id={'propuesta'}  className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>Nosotros proponemos</h2>
            <p>
              Somos un equipo que ha desarrollado la primer plataforma para notificar en forma digital de manera simple, comprobable y legal entre partes.
            </p>
        </div>
          <img className={styles.desktopMobileApp} src={'/images/app-1.svg'} />
      </div>
    </div>
  )
}

export default SectionPropose;