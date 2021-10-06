import { useRef } from 'react';
import styles from './section-first.module.scss';
import useResponsiveWindow from '../../hooks/responsiveWindow';
import SeparatorTop from "../separator-top/separator-top";
import useOnScreen from '../../hooks/intersectionObserver';
import MagicComponent from "./../magic-component/magic-component";

const SectionFirst = () => {
    const { isDesktop } = useResponsiveWindow();
    const distance = isDesktop ? "-200px" : "";
    const ref = useRef();
    const onScreen = useOnScreen(ref, distance);
    
    return (
        <div id={'intro'} className={styles.container}> 
            <div className={styles.cover} >
                { isDesktop ? <img className={styles.coverUpDesktop} src={'/images/galaxy-2.jpg'} />
                : <img className={styles.coverUpMobile} src={'/images/galaxy-mobile.jpg'} />}
           
                <div className={styles.coverImageContainer}>
                    <h2 ref={ref} className={onScreen ? `${styles.title} ${styles.animation}` : styles.title}>Notificaciones Válidas</h2>        
                    <div className={styles.coverImage}>
                        <MagicComponent>
                            <span className={styles.legend}>"Comunicaciones simples, eficaces y legales."</span>
                        </MagicComponent>
                    </div>
                </div>   
            </div>
            <SeparatorTop showMobile={false} color={'specialBlack'}/>
        </div>
    )
}

export default SectionFirst;