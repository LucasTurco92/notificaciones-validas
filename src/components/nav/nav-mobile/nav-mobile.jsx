import styles from './nav-mobile.module.scss';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import NavButton from '../nav-button/nav-button';
import NavIcon from '../nav-icon/nav-icon';
const NavMobile =()=>{
    const [ menuStatus,setMenuStatus ] = useState(styles.navInitialClose);
    const [ menuOpen,setMenuOpen ] = useState(false);
    const handleMenuStatus=()=>{
        setMenuStatus(()=>{
           return !menuOpen ? styles.navOpen :styles.close;
        },setMenuOpen(!menuOpen));
    }

    useEffect(()=>{     
        const animate = setInterval(()=>{
            if(!menuOpen){
                setMenuStatus(styles.navClose);
            }
    }, 500);

    return () => clearInterval(animate);
},[menuOpen]);

    return(
    <div className={styles.navContainer}>
        <div onClick={()=>handleMenuStatus()}>{
            menuOpen ? <NavButton enabledAnimation={false} src={'icons/cancel.svg'}/>
            :   <NavButton enabledAnimation={!menuOpen} src={'icons/bars.svg'}/>
        }
            <div className={menuStatus}>
                <ul className={styles.nav}>
                    <li><Link href="#intro" ><div className={styles.navSection}> <span >Intro</span> <NavIcon src={'/icons/nav-mobile/intro.svg'}/></div></Link></li>
                    <li><Link href="#propuesta"><div className={styles.navSection}> <span >Propuesta</span> <NavIcon src={'/icons/nav-mobile/proposal.svg'}/></div></Link></li>
                    <li><Link href="#vantages" ><div className={styles.navSection}> <span >Ventajas</span> <NavIcon src={'/icons/nav-mobile/vantages.svg'}/></div></Link></li>
                    <li><Link href="#howItWork" ><div className={styles.navSection}> <span >Cómo funciona?</span> <NavIcon src={'/icons/nav-mobile/how-it-works.svg'}/></div></Link></li>
                    <li><Link href="#mission" ><div className={styles.navSection}> <span >Misión</span> <NavIcon src={'/icons/nav-mobile/target.svg'}/></div></Link></li>
                    <li><Link href="#contacto" ><div className={styles.navSection}> <span >Contacto </span> <NavIcon src={'/icons/nav-mobile/contact.svg'}/></div></Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default NavMobile;