import React from 'react';
import styles from './AuthButton.module.css';

function AuthButton({ value = '확인', customStyles, onClick }) {
  return (
    <input
      type="button"
      className={styles.button}
      value={value} // 전달된 문자열 값이 버튼에 표시됨
      onClick={onClick}
      style={customStyles} // 추가적인 스타일 적용
    />
  );
}

export default AuthButton;
