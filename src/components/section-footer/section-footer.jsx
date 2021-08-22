import SectionContainer from "../section-container/section-container";
import SeparatorBottom from "../separator-bottom/separator-bottom";

import styles from './section-footer.module.scss';

const SectionFooter = () => {

    return (
    <SectionContainer color={'containerFifth'} show={true}>
      <div  id={'contacto'}  className={styles.content}>
      <SeparatorBottom show={true} color={'specialBlack'}/>
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
      <img className={styles.window} src={'/images/window-1.svg'} />
      </div>
    </SectionContainer>
    )
}

export default SectionFooter;