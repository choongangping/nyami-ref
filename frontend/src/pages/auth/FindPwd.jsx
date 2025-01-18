import React, { useState } from 'react';
import BasicModal from '../../components/modal/BasicModal';
import InputField from '../../components/inputField/InputField';
import EmailInputField from '../../components/inputField/EmailInputField';

const FindPwd = () => {
  const [isPwdModalOpen, setPwdModalOpen] = useState(''); // 기본값이 닫힌 상태

  const openPwdModal = () => setPwdModalOpen(true);
  const closePwdModal = () => setPwdModalOpen(false);

  return (
    <div>
      <div onClick={openPwdModal}>비밀번호 찾기</div>
      {/* BasicModal 컴포넌트 */}
      <BasicModal isOpen={isPwdModalOpen} onClose={closePwdModal}>
        <h2>비밀번호 찾기</h2>
        <p>회원 아이디와 회원가입 시 인증한 이메일을 입력해주세요</p>
        <p>해당 이메일로 비밀번호 재설정 링크가 전송됩니다.</p>
        <InputField
          type="text"
          name="id"
          placeholder="아이디"
          customStyles={{ width: '7rem' }}
        />
        <EmailInputField></EmailInputField>
      </BasicModal>
    </div>
  );
};

export default FindPwd;
