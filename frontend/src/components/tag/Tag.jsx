import styles from './Tag.module.css';

const Tag = ({ children, ...props }) => {
  return (
    <div className={styles.tag} {...props}>
      <span className={styles.tagContent}>{children}</span>
    </div>
  );
};

export default Tag;
