import React from 'react';
import styles from './BasicModal.module.css';

const BasicModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={onClose}>
        닫기
      </button>
      <div>{children}</div>
    </div>
  );
};

export default BasicModal;
