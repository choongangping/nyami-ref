import styles from './BasicDropdown.module.css';

/**
 * 공통 드롭다운 컴포넌트입니다.
 *
 * @param {React.ReactNode} children - 드롭다운에 표시할 데이터
 * @param {boolean} isOpen - 드롭다운 열림 상태
 * @param {Function} onClose - 드롭다운 닫기 함수
 * @returns {JSX.Element} 드롭다운 컴포넌트
 */
const BasicDropdown = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown}>
        <div className={styles.dropdownContent}>{children}</div>
      </div>
    </div>
  );
};

export default BasicDropdown;
