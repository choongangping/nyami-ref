import React from 'react';
import styles from './EmailSelect.module.css';

function EmailSelect({ options = [], value, onChange }) {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default EmailSelect;
