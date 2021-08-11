import SectionContainer from "../section-container/section-container";
import styles from "./section-second.module.scss";
import common from '../section-container/section-container.module.scss';
import useScroll from '../../hooks/scroll.js';

const SectionSecond = () => {
  const ref = useScroll();
  
  return (
      <SectionContainer  color={'containerSecond'} show={true}>
        <div id={'quienes'}  className={`${common.content} ${styles.content}`}>
     
          <div className={styles.box}>
            <b>Nuestra Propuesta</b>

            <p>
              Olvídate de firmar un acuerdo presencialmente, o notificar una decisión por medio de documentos físicos, o no saber si el destinatario recibe la notificación.
            </p>
          </div>

          <img className={styles.bell} src={'/images/hand-shake-1.jpg'} />
          </div>
          

      </SectionContainer>
  )
}

export default SectionSecond;