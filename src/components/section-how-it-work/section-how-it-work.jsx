import styles from "./section-how-it-work.module.scss";
import { useState } from 'react';
import SeparatorTop from "../separator-top/separator-top";
import WorkIcon from "../work-icon/work-icon";
import MagicComponent from "./../magic-component/magic-component";

const SectionHowItWork = () => {
  const [boxes, setBoxes]= useState([
    {
      key:'1',
      icon:<WorkIcon source='/icons/user.svg'/>,
      text:'Creas tu usuario, podes tener sub usuarios y empezás  a enviar y recibir notificaciones.'
    },
    {
      key:'2',
      icon:<WorkIcon source='/icons/friends.svg'/>,
      text:' Si alguna persona, a quien quieras enviar notificaciones no es usuario, solo tendrás que invitarlo a que se registre como usuario o como tu sub usuario'
    },
    {
      key:'3',
      icon:<WorkIcon source='/icons/letter.svg'/>,
      text:'Nosotros registramos la recepción de la notificación y te avisamos.'
    },
    {
      key:'4',
      icon:<WorkIcon source='/icons/money.svg'/>,
      text:'Podrás incluso enviar y recibir honorarios dentro de la plataforma al instante y de manera certificada.'
    },
  ]);

    return (
      <div>
        <SeparatorTop showMobile={false} color={'specialBlack'}/>
        <div id={'howItWork'} className={styles.content}>      
          <h2 className={styles.mainTitle}>¿Cómo funciona?</h2>
          {
          boxes.map(box=>(
            <div className={styles.box} key={box.key}>
              <div className={styles.text}>
                <span className={styles.title}>{box.icon}</span>
                <MagicComponent><p>{box.text}</p></MagicComponent>
              </div>
            </div>
          ))
          }
          <img className={styles.imageContract} src={'/images/universe-4.svg'} />
        </div>
    </div>
    )
}

export default SectionHowItWork;