import SeparatorBottom from "../separator-bottom/separator-bottom";
import styles from './section-footer.module.scss';

const SectionFooter = () => {

    return (
    <div className={styles.container}>
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
    </div>
    )
}

export default SectionFooter;