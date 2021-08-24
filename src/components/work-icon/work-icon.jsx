import styles from './work-icon.module.scss';

const WorkIcon = ({source}) => {

    return <img src={source} className={styles.icon} />
}


export default WorkIcon;