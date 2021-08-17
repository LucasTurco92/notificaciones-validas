import SectionContainer from "../section-container/section-container";
import styles from "./section-third.module.scss";
import common from '../section-container/section-container.module.scss';
import useScroll from '../../hooks/scroll.js';
import Cards from '../cards/cards';

const SectionThird = () => {
  const ref = useScroll();

    return (
      <SectionContainer color={'containerThird'} show={true}>
        <div id={'mision'} className={`${common.content} ${styles.content}`}>
             {/* <div className={styles.cardsContainer}>
                <Cards/>
            </div> */}
         
          <div className={styles.box}>

            <div className={styles.text}>
              <b>Como funciona?</b>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellente.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.text}>
              <b>Como funciona?</b>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellente.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.text}>
              <b>Como funciona?</b>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellente.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.text}>
              <b>Como funciona?</b>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellente.</p>
            </div>
          </div>
        </div>
    </SectionContainer>
    )
}

export default SectionThird;