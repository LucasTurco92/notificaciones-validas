import SectionContainer from "../section-container/section-container";
import styles from './section-first.module.scss';
import useScroll from '../../hooks/scroll.js';
import Cards from '../cards/cards';

const SectionFirst = () => {
    const ref = useScroll();

    return (
        <SectionContainer className={styles.containerFirst}  color={'containerFirst'} show={false}> 
            <div  id={'intro'} className={styles.content}>
                <div className={styles.coverImageContainer}>
                    <h2 className={styles.title}>Notificaciones Válidas</h2>        
                    <div className={styles.coverImage}>
                        <span className={styles.legend}>"Comunicaciones simples, eficaces y legales."</span>
                    </div>
                </div>   
            </div>
            <div className={styles.itemsContainer}>
                <Cards/>
            </div>
        </SectionContainer>
    )
}

export default SectionFirst;