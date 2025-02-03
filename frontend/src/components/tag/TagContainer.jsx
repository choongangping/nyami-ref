import styles from './TagContainer.module.css';
import Tag from './Tag';

const TagContainer = ({ tags }) => {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag, index) => tag && <Tag key={index}>{tag}</Tag>)}
    </div>
  );
};

export default TagContainer;
