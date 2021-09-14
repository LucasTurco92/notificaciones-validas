import styles from './nav-button.module.scss';
import useScroll from '../../../hooks/scroll.js';
import { useEffect,useState } from 'react';

const NavButton = ({ enabledAnimation,src })=>{
    const { refY } = useScroll();
    const [ prevY,setPrevY ] = useState(refY);
    const ref = refY();
    const[animation,setAnimation] =  useState();

    useEffect(()=>{     
        if(enabledAnimation){    
            if(prevY < ref){
                setAnimation(styles.slide);
            }else{
                setAnimation(styles.slideBack);
            };
        setPrevY(ref);
       }
    },[ref,enabledAnimation])
   
    return (<img className={`${styles.bars} ${animation}`} src={src}/>)
}

export default NavButton;