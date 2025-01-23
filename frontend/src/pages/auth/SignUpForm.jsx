import React from 'react';
import Container from '../../components/container/Container';
import InputField from '../../components/inputField/InputField';
import EmailInputField from '../../components/inputField/EmailInputField';
import styles from './SignUpForm.module.css';
import images from '../../assets/images';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const SignUpForm = () => {
  const handleEmailChange = (email) => {
    console.log('Complete Email:', email); // 최종 이메일 출력
  };

  return (
    <Container>
      <a>
        <Link to="/">
          <img
            src={images.nyaminyami}
            alt="냐미냐미 로고, 홈으로 돌아가기"
            className={styles.logo}
          />
        </Link>
      </a>

      <form>
        <div className={styles.signupContainer}>
          <h1 className={styles.intro}>
            회원가입을 위해 빈칸을 모두 작성해주세요.
          </h1>
          <InputField
            type="text"
            name="username"
            customStyles={{ width: '8rem' }}
            placeholder="아이디"
          />
          <InputField
            type="text"
            name="nickname"
            customStyles={{ width: '8rem' }}
            placeholder="닉네임"
          />
          <InputField
            type="password"
            name="password"
            customStyles={{ width: '10rem' }}
            placeholder="비밀번호"
          />
          <InputField
            type="password"
            name="confirmPassword"
            customStyles={{ width: '10rem' }}
            placeholder="비밀번호 확인"
          />
          <EmailInputField onEmailChange={handleEmailChange} />
          <Button
            type="submit"
            disabled={false}
            customStyles={{
              width: '14.5rem',
              height: '1.5rem',
              fontSize: '0.6em',
            }}
          >
            회원가입
          </Button>
        </div>
      </form>
      <div className={styles.guide}>
        <Link to="/login">로그인 화면으로 돌아가기</Link>
      </div>
    </Container>
  );
};

export default SignUpForm;
