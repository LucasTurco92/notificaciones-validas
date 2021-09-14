import styles from './nav-desktop.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import NavButton from '../nav-button/nav-button';
const NavDesktop =()=>{
    const [ menuStatus,setMenuStatus ] = useState(styles.navClose);
    const [ menuOpen,setMenuOpen ] = useState(false);
    const handleMenuStatus=()=>{
        setMenuStatus(()=>{
           return !menuOpen ? styles.navOpen :styles.navClose;
        },setMenuOpen(!menuOpen));
    }


    return(
    <div className={styles.navContainer}>
        <div onClick={()=>handleMenuStatus()}>
        {
            menuOpen ? <NavButton enabledAnimation={false} src={'icons/cancel.svg'}/>
            : <NavButton enabledAnimation={!menuOpen} src={'icons/bars.svg'}/>
        }
            <div className={menuStatus}>
                <ul className={styles.nav}>
                    <Link href="#intro" ><li className={styles.item}>Intro</li></Link>
                    <Link href="#propuesta"><li className={styles.item}>Propuesta</li></Link>
                    <Link href="#vantages" ><li className={styles.item}>Ventajas</li></Link>
                    <Link href="#howItWork" ><li className={styles.item}>Cómo funciona?</li></Link>
                    <Link href="#mission" ><li className={styles.item}>Misión</li></Link>
                    <Link href="#contacto" ><li className={styles.item}>Contacto</li></Link>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default NavDesktop;
