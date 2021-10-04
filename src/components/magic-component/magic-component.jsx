import { useRef } from 'react';
import styles from "./magic-component.module.scss";
import useOnScreen from '../../hooks/intersectionObserver';
    
const MagicComponent = ({children}) => {
    const animate = styles.showAnimation;
    const ref = useRef();
    const onScreen = useOnScreen(ref, '');

    return(
        <div ref={ref} className={onScreen ? animate: ''}>
            {children}
        </div>
    );
};

export default MagicComponent;