import React from 'react';
import styles from './DuplicateButton.module.css';
function DuplicateButton({ value = {}, customStyles, onClick }) {
  return (
    <input
      type="button"
      className={styles.button}
      value={value}
      onClick={onClick}
      style={customStyles}
    />
  );
}

export default DuplicateButton;
