import SectionContainer from "../section-container/section-container";
import styles from './section-first.module.scss';
import useScroll from '../../hooks/scroll.js';
import SeparatorTop from "../separator-top/separator-top";

const SectionFirst = () => {
    const ref = useScroll();

    return (
        <SectionContainer id={'intro'} className={styles.containerFirst}  color={'containerFirst'} show={false}> 
            <div className={styles.cover}>
                <img className={styles.coverUp} src={'/images/galaxy-2.jpg'} />
                <div className={styles.coverImageContainer}>
                    <h2 className={styles.title}>Notificaciones Válidas</h2>        
                    <div className={styles.coverImage}>
                        <span className={styles.legend}>"Comunicaciones simples, eficaces y legales."</span>
                    </div>
                </div>   
            </div>
            <SeparatorTop showMobile={false} color={'specialBlack'}/>
        </SectionContainer>
    )
}

export default SectionFirst;