import React, { useState } from 'react';
import Container from '../../components/container/Container';
import InputField from '../../components/inputField/InputField';
import styles from './LoginForm.module.css';
import images from '../../assets/images';
import { Link } from 'react-router-dom';
import BasicModal from '../../components/modal/BasicModal';
import EmailInputField from '../../components/inputField/EmailInputField';
function LoginForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
      <form>
        <div className={styles.inputContainer}>
          <InputField type="text" name="id" placeholder="아이디" />
          <InputField type="password" name="password" placeholder="비밀번호" />
          <input type="submit" value="로그인"></input>
        </div>
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
      <div className={styles.guide} onClick={openModal}>
        아이디 및 비밀번호 찾기
      </div>

      <BasicModal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.intro}>아이디 찾기</div>
        <div className={styles.guide2}>
          회원가입 시, 인증했던 이메일을 입력해주세요.
        </div>
        <div className={styles.gap}>
          <EmailInputField
            onEmailChange={handleEmailChange}
            buttonValue="확인"
          />
        </div>
        <div className={styles.intro}>비밀번호 찾기</div>
        <div className={styles.guide2}>
          회원아이디와 인증된 이메일을 입력해주세요,<br></br> 15분간 유효한
          비밀번호 재설정 링크가 발송됩니다.
        </div>
        <div className={styles.gap}>
          <InputField
            type="text"
            name="id"
            customStyles={{ width: '100px' }}
            placeholder="아이디"
          />
        </div>
        <div className={styles.gap}>
          <EmailInputField
            onEmailChange={handleEmailChange}
            buttonValue="발송"
          />
        </div>
      </BasicModal>
    </Container>
  );
}

export default LoginForm;
