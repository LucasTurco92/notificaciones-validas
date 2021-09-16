import styles from './nav-button.module.scss';
import useScroll from '../../../hooks/scroll.js';
import { useState,useEffect } from 'react';

const NavButton = ({ enabledAnimation,src })=>{
    const { offsetY } = useScroll();
    const[ scrollDirectionDown,setScrollDirectionDown ] = useState();
    const[ lastScrollDown,setLastScrollDown ] = useState();
    
    useEffect(()=>{
        setScrollDirectionDown(lastScrollDown < offsetY);
        setLastScrollDown(offsetY);
    },[offsetY]);

    return (<img className={`${styles.bars} ${(enabledAnimation && scrollDirectionDown) ? styles.slide: styles.slideBack}`} src={src}/>)
}

export default NavButton;