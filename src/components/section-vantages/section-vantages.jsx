import styles from './section-vantages.module.scss';
import SeparatorBottom from "../separator-bottom/separator-bottom";
import Cards from '../cards/cards';

const SectionVantages = () => {

    return (
    <div id={'vantages'}  className={styles.container}>
      <SeparatorBottom show={true} color={'specialBlack'}/> 
      <h2 className={styles.title}>Ventajas</h2>
      <div className={styles.cardsContainer}>
        <Cards/>
      </div>
    </div>
    )
}

export default SectionVantages;