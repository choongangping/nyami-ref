// 본 js파일은 Image module 파일이며, 하기와 같이 import를 하면 이미지를 일일히 import 안해도 됨
// import 방법 : import images from '../../assets/images';
// 사용 예시 :   <img src={images.kakaoButton} alt="카카오 로그인 버튼" />

import kakaoButton from './kakao_button.png';
import googleButton from './google_button.png';
import naverButton from './naver_button.png';
import nyaminyami from './logo.png';
const images = {
  kakaoButton,
  googleButton,
  naverButton,
  nyaminyami,
};

export default images;
