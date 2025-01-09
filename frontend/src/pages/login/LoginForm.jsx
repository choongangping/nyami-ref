import React from 'react';
import styles from './LoginForm.module.css';
import images from '../../assets/images';

function LoginForm() {
  return (
    <div>
      <div className={styles.container}>
        <a>
          <img src={images.nyaminyami} alt="냐미냐미 로고, 홈으로 돌아가기" />
        </a>
        <form>
          <div>
            <input type="text" name="id" placeholder="아이디"></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
            ></input>
          </div>
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
        <div className={styles.guide}>회원가입하기</div>
        <div className={styles.guide}>아이디 및 비밀번호 찾기</div>
      </div>
    </div>
  );
}

export default LoginForm;
