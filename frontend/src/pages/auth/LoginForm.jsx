import React, { useState } from 'react';
import Container from '../../components/container/Container'; // Container Component
import InputField from '../../components/inputField/InputField'; // InputField Component
import styles from './LoginForm.module.css';
import images from '../../assets/images'; // Image file 사용을 위한 Image Module
import { Link } from 'react-router-dom';
import BasicModal from '../../components/modal/BasicModal';
import EmailInputField from '../../components/inputField/EmailInputField';
import Button from '../../components/button/Button';
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
          <img
            src={images.nyaminyami}
            alt="냐미냐미 로고, 홈으로 돌아가기"
            className={styles.logo}
          />
        </Link>
      </a>
      <form>
        <div className={styles.inputContainer}>
          <InputField type="text" name="id" placeholder="아이디" />
          <InputField type="password" name="password" placeholder="비밀번호" />
          <Button
            type="submit"
            disabled={false}
            customStyles={{
              width: '10.5rem',
              height: '1.5rem',
              fontSize: '0.75em',
            }}
          >
            로그인
          </Button>
        </div>
      </form>
      {
        <>
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
          <div className={styles.joinContainer}>
            <div className={styles.guide}>
              <Link to="/signup">회원가입</Link>
            </div>
          </div>
          <div className={styles.findInfoContainer}>
            <div className={styles.guide} onClick={openModal}>
              아이디 찾기
            </div>
            <div className={styles.guide} onClick={openModal}>
              비밀번호 찾기
            </div>
          </div>
        </>
      }
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
