import React, { useState } from 'react';
import InputField from '../inputField/InputField';
import styles from './EmailInputField.module.css';
import AuthButton from '../button/AuthButton';
const EmailInputField = ({ onEmailChange, buttonValue = '인증' }) => {
  // 이메일 도메인 선택 옵션 (컴포넌트 내부 상수로 정의)
  const emailOptions = [
    '도메인 선택',
    'gmail.com',
    'naver.com',
    'kakao.com',
    'hanmail.com',
    '직접 입력',
  ];

  const [emailId, setEmailId] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [isCustomDomain, setIsCustomDomain] = useState(false); // 직접 입력 활성화 여부

  const handleEmailIdChange = (e) => {
    setEmailId(e.target.value);
    onEmailChange(`${e.target.value}@${emailDomain}`);
  };

  const handleEmailDomainChange = (e) => {
    const value = e.target.value;
    if (value === '직접 입력') {
      setIsCustomDomain(true);
      setEmailDomain(''); // 직접 입력 활성화
    } else {
      setIsCustomDomain(false);
      setEmailDomain(value); // 선택한 도메인 설정
      onEmailChange(`${emailId}@${value}`);
    }
  };

  const handleCustomDomainChange = (e) => {
    setEmailDomain(e.target.value);
    onEmailChange(`${emailId}@${e.target.value}`);
  };

  return (
    <div>
      <InputField
        type="text"
        name="mailId"
        placeholder="메일 아이디"
        customStyles={{ width: '60px' }}
        value={emailId}
        onChange={handleEmailIdChange}
      />
      <label className={styles.label}>@</label>
      {!isCustomDomain ? (
        <select
          className={styles.select}
          value={emailDomain}
          onChange={handleEmailDomainChange}
        >
          {emailOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <InputField
          type="text"
          name="customDomain"
          placeholder="직접 입력"
          value={emailDomain}
          customStyles={{ width: '60px' }}
          className={styles.input} // 동일 스타일 적용
          onChange={handleCustomDomainChange}
        />
      )}{' '}
      <AuthButton value={buttonValue}></AuthButton>
    </div>
  );
};

export default EmailInputField;
