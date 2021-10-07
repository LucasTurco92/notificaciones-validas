import styles from './nav-bar.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import NavButton from '../nav-button/nav-button';
import NavIcon from '../nav-icon/nav-icon';

const NavBar =()=>{
    const [ menuStatus,setMenuStatus ] = useState(styles.navInitialClose);
    const [ menuOpen,setMenuOpen ] = useState(false);
    const [ menu,setMenu ] = useState([
        {ref:'#intro',iconSrc:'/icons/nav-mobile/intro.svg',refName:'Intro'},
        {ref:'#propuesta',iconSrc:'/icons/nav-mobile/proposal.svg',refName:'Propuesta'},
        {ref:'#vantages',iconSrc:'/icons/nav-mobile/vantages.svg',refName:'Ventajas'},
        {ref:'#howItWork',iconSrc:'/icons/nav-mobile/how-it-works.svg',refName:'Cómo funciona'},
        {ref:'#mission',iconSrc:'/icons/nav-mobile/target.svg',refName:'Misión'},
        {ref:'#contacto',iconSrc:'/icons/nav-mobile/contact.svg',refName:'Contacto'},
    ]);
    
    const handleMenuStatus=()=>{
        setMenuStatus(()=>{
           return !menuOpen ? styles.navOpen :styles.close;
        },setMenuOpen(!menuOpen));
    };

    return(
    <div className={styles.navContainer}>
        <div onClick={()=>handleMenuStatus()}>{
            menuOpen ? <NavButton enabledAnimation={false} src={'icons/cancel.svg'}/>
            :   <NavButton enabledAnimation={!menuOpen} src={'icons/bars.svg'}/> }
            <div className={menuStatus}>
                <ul className={styles.nav}>
                    {
                        menu.map(item =>(
                            <li key={item.refName}>
                                <Link href={item.ref}>
                                    <a className={styles.navSection}>
                                        <span className={styles.navDescription}>
                                            {item.refName}
                                        </span>
                                        <NavIcon src={item.iconSrc}/>
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
    )
}

export default NavBar;