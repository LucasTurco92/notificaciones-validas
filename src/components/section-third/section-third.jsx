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
            <div className={styles.image}>
              <img className={styles.bell} src={'/images/hand-shake-1.jpg'} />
            </div>
            <div className={styles.text}>
              <b>Como funciona?</b>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellentesque habitant senectus nisl, ad suscipit purus quam blandit cursus sociis. Ad tortor conubia ac posuere feugiat sem ultricies eget natoque malesuada vestibulum, pellentesque curabitur cras tempor augue felis sollicitudin mauris vulputate.</p>
            </div>
          </div>
          <div className={styles.boxInverted}>

            <div className={styles.image}>
              <img className={styles.bell} src={'/images/contract-1.jpg'} />
            </div>
            <div className={styles.text}>
              <b>Como funciona?</b>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellentesque habitant senectus nisl, ad suscipit purus quam blandit cursus sociis. Ad tortor conubia ac posuere feugiat sem ultricies eget natoque malesuada vestibulum, pellentesque curabitur cras tempor augue felis sollicitudin mauris vulputate.</p>
            </div>
            </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img className={styles.bell} src={'/images/real-time-1.jpg'} />
            </div>
            <div className={styles.text}>
              <b>Como funciona?</b>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellentesque habitant senectus nisl, ad suscipit purus quam blandit cursus sociis. Ad tortor conubia ac posuere feugiat sem ultricies eget natoque malesuada vestibulum, pellentesque curabitur cras tempor augue felis sollicitudin mauris vulputate.</p>
            </div>
          </div>
        </div>
    </SectionContainer>
    )
}

export default SectionThird;