import styles from './Tag.module.css';

const Tag = ({ children }) => {
  return (
    <div className={styles.tag}>
      <span>{children}</span>
    </div>
  );
};

export default Tag;
