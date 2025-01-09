import React, { useState } from 'react';
import Container from '../../components/container/Container';
import InputField from '../../components/inputField/InputField';
import EmailSelect from '../../components/select/EmailSelect';
import styles from './SignUpForm.module.css';
import images from '../../assets/images';
import { Link } from 'react-router-dom';

function SignUpForm() {
  const [emailDomain, setEmailDomain] = useState('');
  const emailOptions = [
    '도메인 선택',
    'google.com',
    'naver.com',
    'kakao.com',
    'hanmail.com',
    '직접 작성',
  ];
  return (
    <Container>
      <a>
        <Link to="/">
          <img src={images.nyaminyami} alt="냐미냐미 로고, 홈으로 돌아가기" />
        </Link>
      </a>
      <h1 className={styles.intro}>
        회원가입을 위해 아래 필수정보를 기입해주세요.
      </h1>
      <form>
        <InputField
          type="text"
          name="username"
          customStyles={{ width: '130px' }}
          placeholder="아이디"
        />
        <InputField
          type="text"
          name="nickname"
          customStyles={{ width: '130px' }}
          placeholder="닉네임"
        />{' '}
        <InputField
          type="password"
          name="password"
          customStyles={{ width: '200px' }}
          placeholder="비밀번호"
        />
        <InputField
          type="password"
          name="confirmPassword"
          customStyles={{ width: '200px' }}
          placeholder="비밀번호 확인"
        />
        <InputField
          type="text"
          name="mailId"
          customStyles={{ width: '70px' }}
          placeholder="메일 아이디"
        />
        <label className={styles.label}>@</label>
        <EmailSelect options={emailOptions} value={emailDomain} />
        <input type="submit" value="회원가입"></input>
      </form>
    </Container>
  );
}

export default SignUpForm;
