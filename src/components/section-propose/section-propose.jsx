import styles from "./section-propose.module.scss";
import { useRef } from 'react';
import useOnScreen from '../../hooks/intersectionObserver';
import useResponsiveWindow from '../../hooks/responsiveWindow';

const SectionPropose = () => {
  const { isDesktop } = useResponsiveWindow();
  const distance = isDesktop ? "-200px" : "";
  const ref = useRef();
  const onScreen = useOnScreen(ref, distance);
  return (
    <div> 
      <div id={'propuesta'}  className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title} ref={ref}>Nosotros proponemos</h2>
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