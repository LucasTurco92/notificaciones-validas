import SectionContainer from "../section-container/section-container";
import styles from "./section-third.module.scss";
import common from '../section-container/section-container.module.scss';
import useScroll from '../../hooks/scroll.js';
import { useState } from 'react';

const SectionThird = () => {
  const [boxes, setBoxes]= useState([
    {
      title:'1',
      text:'Creas tu usuario, podes tener sub usuarios y empezás  a enviar y recibir notificaciones.'
    },
    {
      title:'2',
      text:' Si alguna persona, a quien quieras enviar notificaciones no es usuario, solo tendrás que invitarlo a que se registre como usuario o como tu sub usuario'
    },
    {
      title:'3',
      text:'Nosotros registramos la recepción de la notificación y te avisamos.'
    },
    {
      title:'4',
      text:'Podrás incluso enviar y recibir honorarios dentro de la plataforma al instante y de manera certificada.'
    },
  ]);


  const ref = useScroll();



    return (
      <SectionContainer color={'containerThird'} show={true}>
        <div id={'mision'} className={`${common.content} ${styles.content}`}>      
          <h2 className={styles.mainTitle}>¿Cómo funciona?</h2>
          {
          boxes.map(box=>(
            <div className={styles.box} key={box.title}>
              <div className={styles.text}>
                <span className={styles.title}>{box.title}</span>
                <p>{box.text}</p>
              </div>
            </div>
          ))
          }
          <img className={styles.imageContract} src={'/images/contract-5.png'} />
        </div>
    </SectionContainer>
    )
}

export default SectionThird;