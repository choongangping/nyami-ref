import { useEffect, useRef } from 'react';
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
  const dropdownRef = useRef(null);

  useEffect(() => {
    // 1. 패널 외부 클릭 시 드롭다운 패널을 닫는 함수 정의
    const handleDropdownClose = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    // 2. isOpen 상태가 true일 때 이벤트 리스너 등록
    if (isOpen) {
      document.addEventListener('mousedown', handleDropdownClose);
    }

    // 3. 컴포넌트 언마운트 또는 isOpen이 false로 변경될 때 (클린업) 이벤트 해제
    return () => {
      document.removeEventListener('mousedown', handleDropdownClose);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className={styles.dropdown}>
        <div className={styles.dropdownContent} onClick={onClose}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BasicDropdown;
