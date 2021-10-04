import { useRef } from 'react';
import styles from "./section-mission.module.scss";
import useOnScreen from '../../hooks/intersectionObserver';
import useResponsiveWindow from '../../hooks/responsiveWindow';


const SectionMission = () => {
  const { isDesktop } = useResponsiveWindow();
  const distance = isDesktop ? "-200px" : "";
  const ref = useRef();
  const onScreen = useOnScreen(ref, distance);

  return (
    <div id={'mission'}  className={styles.content}> 
    
      <div className={styles.box}>
        <h2 className={styles.title}>Misión</h2>
        <p>
        Crear una plataforma que otorgue VALOR LEGAL a un medio electrónico, de forma rápida, segura y eficaz permitiendo ahorrar tiempo y dinero, evitando problemas legales por el uso de correos electrónicos.
        </p>
        <p>
        NUNCA FUE TAN FACIL, EFICAZ Y ECONÓMICO NOTIFICAR UNA DECISIÓN.
        </p>
      </div>
      
      <img ref={ref} className={onScreen ? `${styles.bellAnimation} ${styles.bell}`  : styles.bell } src={'/images/bell-solid.svg'} />
    </div>
  )
}

export default SectionMission;