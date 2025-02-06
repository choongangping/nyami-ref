import styles from './TagContainer.module.css';
import Tag from './Tag';

import { IoClose } from 'react-icons/io5';

const TagContainer = ({
  tags,
  onLocalChange,
  onFoodCategoryChange,
  onThemeChange,
}) => {
  const handleRemoveTag = (tag) => {
    if (tag === tags[0]) {
      console.log(`${tag} 삭제 (local)`);
      onLocalChange(null);
    }
    if (tag === tags[1]) {
      console.log(`${tag} 삭제 (foodCategory)`);
      onFoodCategoryChange(null);
    }
    if (tag === tags[2]) {
      console.log(`${tag} 삭제 (theme)`);
      onThemeChange(null);
    }
  };

  return (
    <div className={styles.tagContainer}>
      {tags.map(
        (tag, index) =>
          tag && (
            <Tag key={index}>
              {tag}
              <IoClose
                className={styles.closeIcon}
                onClick={() => handleRemoveTag(tag)}
              />
            </Tag>
          )
      )}
    </div>
  );
};

export default TagContainer;
