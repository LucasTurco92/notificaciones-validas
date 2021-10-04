import styles from './section-first.module.scss';
import useResponsiveWindow from '../../hooks/responsiveWindow';
import SeparatorTop from "../separator-top/separator-top";

const SectionFirst = () => {
    const { isDesktop } = useResponsiveWindow();
    return (
        <div id={'intro'}> 
            <div className={styles.cover}>
                { isDesktop ? <img className={styles.coverUpDesktop} src={'/images/galaxy-2.jpg'} />
                : <img className={styles.coverUpMobile} src={'/images/galaxy-mobile.jpg'} />}
           
                <div className={styles.coverImageContainer}>
                    <h2 className={styles.title}>Notificaciones Válidas</h2>        
                    <div className={styles.coverImage}>
                        <span className={styles.legend}>"Comunicaciones simples, eficaces y legales."</span>
                    </div>
                </div>   
            </div>
            <SeparatorTop showMobile={false} color={'specialBlack'}/>
        </div>
    )
}

export default SectionFirst;