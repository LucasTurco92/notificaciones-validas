import styles from './card.module.scss';

const Card = ({ path,text,title }) =>{
    return (
        <div className={styles.box}>
            <img className={styles.card} src={path}/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </div> 
    );
}

export default Card;