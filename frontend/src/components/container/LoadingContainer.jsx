import React from 'react';
import styles from './LoadingContainer.module.css';
import Spinner from '../spinner/Spinner';

/** 스피너와 Loading 메시지를 출력하는 컨테이너입니다. */
const LoadingContainer = () => {
  return (
    <div className={styles.loadingContainer}>
      <Spinner />
      <p className={styles.loadingMessage}>Loading...</p>
    </div>
  );
};

export default LoadingContainer;
