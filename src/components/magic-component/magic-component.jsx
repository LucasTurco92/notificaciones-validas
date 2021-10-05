import styles from "./magic-component.module.scss";
import { useRef } from 'react';
import useOnScreen from '../../hooks/intersectionObserver';
import useResponsiveWindow from '../../hooks/responsiveWindow';

const MagicComponent = ({children}) => {
  const { isDesktop } = useResponsiveWindow();
  const distance = isDesktop ? "-200px" : "";
  const ref = useRef();
  const onScreen = useOnScreen(ref, distance);
  return (
    <div  className={onScreen ? styles.show : ''}  ref={ref}> 
        {children}
    </div>
  )
}

export default MagicComponent;