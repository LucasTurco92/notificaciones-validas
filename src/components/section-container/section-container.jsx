import styles from "./section-container.module.scss";
const SectionContainer = (props) => {
  const { children,show,color,id } = props;
  return (
    <div id={id} className={styles[color]}>
      {children}
    </div>
  );
};
export default SectionContainer;
