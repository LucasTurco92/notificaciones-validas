import { useRef } from 'react';
import styles from "./magic-component.module.scss";
import useOnScreen from '../../hooks/intersectionObserver';
import useResponsiveWindow from '../../hooks/responsiveWindow';
    
const MagicComponent = ({children}) => {
    const { isDesktop } = useResponsiveWindow();
    const distance = isDesktop ? "-200px" : "";
    const animate = styles.showAnimation;
    const ref = useRef();
    const onScreen = useOnScreen(ref, distance);

    return(
        <div ref={ref} className={onScreen ? animate: ''}>
            {children}
        </div>
    );
};

export default MagicComponent;