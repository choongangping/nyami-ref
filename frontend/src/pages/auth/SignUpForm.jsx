import React, { useState } from 'react';
import Container from '../../components/container/Container';
import InputField from '../../components/inputField/InputField';
import EmailInputField from '../../components/inputField/EmailInputField';
import styles from './SignUpForm.module.css';
import images from '../../assets/images';
import { Link } from 'react-router-dom';
import AuthButton from '../../components/button/AuthButton';
function SignUpForm() {
  const handleEmailChange = (email) => {
    console.log('Complete Email:', email); // 최종 이메일 출력
  };

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
        <div className={styles.signupContainer}>
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
          />
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
          <EmailInputField onEmailChange={handleEmailChange} />
          <InputField
            type="password"
            name="confirmPassword"
            customStyles={{ width: '150px' }}
            placeholder="인증번호 입력"
          />
          <AuthButton value="확인"></AuthButton>
          <input type="submit" value="회원가입"></input>
        </div>
      </form>
    </Container>
  );
}

export default SignUpForm;
