import styles from './nav-bubble.module.scss';
import Link from 'next/link';
import { useState } from 'react';
const NavBubble =()=>{
    const [ menuStatus,setMenuStatus ] = useState(styles.navInitialClose);
    const [ menuOpen,setMenuOpen ] = useState(false);
    const handleMenuStatus=()=>{
        setMenuStatus(()=>{
           return !menuOpen ? styles.navOpen :styles.navClose;
        },setMenuOpen(!menuOpen));
    }


    return(
    <div className={styles.navContainer}>
        <div onClick={()=>handleMenuStatus()}><img className={styles.bars} src={'icons/bars.svg'} /></div>
        <ul className={styles.nav}>
            <div className={menuStatus}>
                <li><Link href="#intro" >Intro</Link></li>
                <li><Link href="#propuesta">Propuesta</Link></li>
                <li><Link href="#vantages" >Ventajas</Link></li>
                <li><Link href="#howItWork" >Cómo funciona?</Link></li>
                <li><Link href="#mission" >Misión</Link></li>
                <li><Link href="#contacto" >Contacto</Link></li>
            </div>
        </ul>
    </div>
    )
}

export default NavBubble;