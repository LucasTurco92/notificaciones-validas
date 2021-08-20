import SectionContainer from "../section-container/section-container";
import styles from './section-fifth.module.scss';

const SectionFifth = () => {

    return (
    <SectionContainer color={'containerFifth'} show={true}>
      <div  id={'contacto'}  className={styles.content}>
        <ul>
          <li>
          ####-####
          </li>
          <li>
          Buenos Aires, Argentina
          </li>
          <li>
          Lorem Ipsum S.A
          </li>
        </ul>
      </div>
    </SectionContainer>
    )
}

export default SectionFifth;