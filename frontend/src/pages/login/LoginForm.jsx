import React from 'react';
import Container from '../../components/container/Container';
import InputField from '../../components/IiputField/InputField';
import styles from './LoginForm.module.css';
import images from '../../assets/images';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <Container>
      <a>
        <Link to="/">
          <img src={images.nyaminyami} alt="냐미냐미 로고, 홈으로 돌아가기" />
        </Link>
      </a>
      <form>
        <InputField type="text" name="id" placeholder="아이디" />
        <InputField type="password" name="password" placeholder="비밀번호" />
        <input type="submit" value="로그인"></input>
      </form>
      <div className={styles.socialContainer}>
        <a>
          <img src={images.kakaoButton} alt="카카오" />
        </a>
        <a>
          <img src={images.googleButton} alt="구글" />
        </a>
        <a>
          <img src={images.naverButton} alt="네이버" />
        </a>
      </div>
      <div className={styles.guide}>
        <Link to="/signup">회원가입</Link>
      </div>
      <div className={styles.guide}>아이디 및 비밀번호 찾기</div>
    </Container>
  );
}

export default LoginForm;
