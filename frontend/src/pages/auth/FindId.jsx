import React, { useState } from 'react';
import BasicModal from '../../components/modal/BasicModal';
import EmailInputField from '../../components/inputField/EmailInputField';

const FindId = () => {
  const [isIdModalOpen, setIdModalOpen] = useState(false); // boolean 값으로 변경

  const openIdModal = () => setIdModalOpen(true);
  const closeIdModal = () => setIdModalOpen(false);

  return (
    <div>
      <div onClick={openIdModal}>아이디 찾기</div>
      <BasicModal isOpen={isIdModalOpen} onClose={closeIdModal}>
        <h2>아이디 찾기</h2>
        <p>회원가입 때 인증한 이메일을 입력하세요.</p>

        <EmailInputField></EmailInputField>
      </BasicModal>
    </div>
  );
};

export default FindId;
