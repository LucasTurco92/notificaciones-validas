import styles from './section-first.module.scss';
import SeparatorTop from "../separator-top/separator-top";

const SectionFirst = () => {
    return (
        <div id={'intro'} className={styles.container}> 
            <div className={styles.cover} >
                 <img className={styles.coverUpDesktop} src={'/images/galaxy-2.jpg'} />
                 <img className={styles.coverUpMobile} src={'/images/galaxy-mobile.jpg'} />}
            
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