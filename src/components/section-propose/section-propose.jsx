import styles from "./section-propose.module.scss";
import { useRef } from 'react';
import useOnScreen from '../../hooks/intersectionObserver';
import MagicComponent from '../magic-component/magic-component';

const SectionPropose = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '');
  return (
    <div> 
      <div id={'propuesta'}  className={onScreen ? `${styles.container} ${styles.expand}` : styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title} ref={ref}>Nosotros proponemos</h2>
          <MagicComponent>
            <p>
              Somos un equipo que ha desarrollado la primer plataforma para notificar en forma digital de manera simple, comprobable y legal entre partes.
            </p>
          </MagicComponent>
        </div>
          <img className={styles.desktopMobileApp} src={'/images/app-1.svg'} />
      </div>
    </div>
  )
}

export default SectionPropose;