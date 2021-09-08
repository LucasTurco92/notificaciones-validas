import SectionContainer from "../section-container/section-container";
import styles from "./section-second.module.scss";
import common from '../section-container/section-container.module.scss';
import useScroll from '../../hooks/scroll.js';

const SectionSecond = () => {
  const ref = useScroll();
  
  return (
      <SectionContainer  color={'containerSecond'} show={true}>
        <div id={'propuesta'}  className={`${common.content} ${styles.content}`}>
          <div className={styles.box}>
            <h2 className={styles.title} >Nosotros proponemos</h2>
            <p>
              Somos un equipo que ha desarrollado la primer plataforma para notificar en forma digital de manera simple, comprobable y legal entre partes.
            </p>
          </div>
          <img className={styles.bell} src={'/images/app-1.svg'} />
        </div>
      </SectionContainer>
  )
}

export default SectionSecond;