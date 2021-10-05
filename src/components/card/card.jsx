import styles from './card.module.scss';
import { useRef } from 'react';
import useOnScreen from '../../hooks/intersectionObserver';
import useResponsiveWindow from '../../hooks/responsiveWindow';

const Card = ({ path,text,title }) =>{
    const { isDesktop } = useResponsiveWindow();
    const distance = isDesktop ? "-200px" : "";
    const ref = useRef();
    const onScreen = useOnScreen(ref, distance);

    return (
        <div className={styles.box}>
            <img className={styles.card} src={path}/>
            <div className={onScreen ? `${styles.hoverCard} ${styles.textContainer}` : styles.textContainer  }>
                <h3 ref={ref} >{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </div> 
    );
}

export default Card;