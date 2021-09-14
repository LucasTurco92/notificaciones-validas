import styles from './nav-icon.module.scss'

const NavIcon = ({src}) => {
    return(<img className={styles.navIcon} src={src}/>)
}

export default NavIcon;