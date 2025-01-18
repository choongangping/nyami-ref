import React from 'react';
import styles from './BasicModal.module.css';
import Button from '../button/Button';

const BasicModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose}>
      <div
        className={styles.Modalcontainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.content}>{children}</div>
        <div className={styles.ButtonContainer}>
          <Button
            onClick={onClose}
            customStyles={{
              width: '2.5rem',
              height: '1rem',
              fontSize: '0.6rem',
            }}
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
