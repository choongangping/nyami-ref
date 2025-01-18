import React, { useState } from 'react';
import InputField from '../inputField/InputField';
import styles from './EmailInputField.module.css';
import Button from '../button/Button';
const EmailInputField = ({ onEmailChange }) => {
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
    <div className={styles.emailContainer}>
      <InputField
        type="text"
        name="mailId"
        placeholder="메일 아이디"
        customStyles={{ width: '5.5rem' }}
        value={emailId}
        onChange={handleEmailIdChange}
      />
      <label className={styles.at}>@</label>
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
          ``
        </select>
      ) : (
        <InputField
          type="text"
          name="customDomain"
          placeholder="직접 입력"
          value={emailDomain}
          customStyles={{ width: '5.5rem' }}
          className={styles.input}
          onChange={handleCustomDomainChange}
        />
      )}{' '}
      <Button
        type="submit"
        disabled={false}
        customStyles={{
          width: '2.5rem',
          height: '1.3rem',
          fontSize: '0.6rem',
        }}
      >
        인증
      </Button>
    </div>
  );
};

export default EmailInputField;
