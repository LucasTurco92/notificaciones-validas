import SectionContainer from "../section-container/section-container";
import styles from './section-vantages.module.scss';
import SeparatorBottom from "../separator-bottom/separator-bottom";
import Cards from '../cards/cards';


const SectionVantages = () => {

    return (
    <SectionContainer id={'vantages'} color={'containerFourth'} show={true}>
      <SeparatorBottom show={true} color={'specialBlack'}/> 
      <h2 className={styles.title}>Ventajas</h2>
      <div className={styles.cardsContainer}>
        <Cards/>
      </div>

    </SectionContainer>
    )
}

export default SectionVantages;