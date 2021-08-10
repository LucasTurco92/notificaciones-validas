import SectionContainer from "../section-container/section-container";
import styles from "./section-fourth.module.scss";
import common from '../section-container/section-container.module.scss';

const SectionFourth = () => {

    return (
    <SectionContainer color={'containerFourth'} show={true}>
      <div  id={'contacto'}  className={`${common.content} ${styles.content}`}>
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

export default SectionFourth;