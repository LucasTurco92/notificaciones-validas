import styles from './card.module.scss';
import { useRef } from 'react';
import useOnScreen from '../../hooks/intersectionObserver';
import MagicComponent from "./../magic-component/magic-component";

const Card = ({ path,text,title }) =>{
    const ref = useRef();
    const onScreen = useOnScreen(ref, "");
    
    return (
        <div className={onScreen ? `${styles.box} ${styles.animationCard}` : styles.box}>
            <img className={styles.card} src={path}/>
            <div className={styles.textContainer}>
                <h3 ref={ref}>{title}</h3>
                <MagicComponent>
                    <p className={styles.text}>{text}</p>
                </MagicComponent>
            </div>
        </div> 
    );
}

export default Card;