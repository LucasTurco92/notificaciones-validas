import styles from "./magic-bell.module.scss";
import { useRef } from 'react';
import useOnScreen from '../../hooks/intersectionObserver';

const MagicBell = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "");
  
  return (<img ref={ref} className={onScreen ? `${styles.bellAnimation} ${styles.bell}` 
   : styles.bell } src={'/images/bell-solid.svg'} />
  );
}

export default MagicBell;