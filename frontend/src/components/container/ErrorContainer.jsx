import styles from './ErrorContainer.module.css';

/**
 * 에러 발생 시 에러 메시지를 출력하는 컨테이너입니다.
 *
 * @param {string} error - 에러 메시지
 * @param {Function} onRetry - 다시시도 버튼 함수
 */
const ErrorContainer = ({ error, onRetry }) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>🚨 {error}</p>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          다시 시도
        </button>
      )}
    </div>
  );
};

export default ErrorContainer;
