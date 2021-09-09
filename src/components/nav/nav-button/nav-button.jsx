import styles from './nav-button.module.scss';

const NavButton = ({src})=>{
    return (<img className={styles.bars} src={src}/>)
}

export default NavButton;