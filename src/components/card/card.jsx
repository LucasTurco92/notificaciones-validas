import styles from './card.module.scss';

const Card = ({path}) =>{
    return (
            <div className={styles.box}>
                    <img className={styles.card} src={path}/>

                <div className={styles.textContainer}>
                    <p className={styles.text}>Lorem ipsum dolor</p>
                </div>
            </div> 
    );
}

export default Card;