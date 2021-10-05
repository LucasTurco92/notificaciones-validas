import styles from "./magic-bell.module.scss";
import { useRef } from 'react';
import useOnScreen from '../../hooks/intersectionObserver';
import useResponsiveWindow from '../../hooks/responsiveWindow';

const MagicBell = () => {
  const { isDesktop } = useResponsiveWindow();
  const distance = isDesktop ? "-200px" : "";
  const ref = useRef();
  const onScreen = useOnScreen(ref, distance);
  
  return (<img ref={ref} className={onScreen ? `${styles.bellAnimation} ${styles.bell}` 
   : styles.bell } src={'/images/bell-solid.svg'} />
  );
}

export default MagicBell;