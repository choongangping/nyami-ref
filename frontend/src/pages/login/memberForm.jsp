<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
  <%@ include file="/WEB-INF/views/templates/head.jsp" %>
  <!-- head -->

  <head>
    <title>Login</title>
    <link rel="stylesheet" href="css/login/loginCommon.css" />

    <script src="js/login/join.js"></script>
  </head>

  <body>
    <form method="post" action="/joinMember">
      <input type="hidden" name="category" value="일반" />
      <input type="hidden" name="email" id="email" />

      <div className="memberform-container">
        <div className="memberform-header">
          <h1 className="memberform-logo">일반회원가입</h1>
        </div>
        <div className="id-form">
          <input type="text" placeholder="아이디" id="memberId" name="memberId" />
          <input type="button" value="아이디중복검사" id="idCheck-btn" />
          <div id="id-check-result" className="check-result"></div>
        </div>

        <div className="id-form">
          <input type="text" placeholder="닉네임" id="nickname" name="nickname" />
          <input type="button" value="닉네임중복검사" id="nicknameCheck-btn" />
          <div id="nickname-check-result" className="check-result"></div>
        </div>

        <div className="passwd-form">
          <input type="password" placeholder="비밀번호" id="passwd" name="passwd" />
          <input type="password" placeholder="비밀번호 확인" id="passwdCheck" name="passwdCheck" />
          <div id="passwd-check-result" className="check-result"></div>
        </div>

        <div className="email-form">
          <input type="text" placeholder="이메일" className="email-input" id="mailid" name="mailid" />
          <span className="domain-symbol">@</span>
          <input type="text" placeholder="도메인" className="email-input" id="domain" name="domain" />

          <select className="email-select" id="emailSelect">
            <option value="">직접입력</option>
            <option value="naver.com">네이버</option>
            <option value="kakao.com">카카오</option>
            <option value="gmail.com">구글</option>
          </select>

          <!-- 인증하기 버튼 -->
          <button type="button" id="verifyButton">인증</button>
        </div>

        <!-- 인증 입력 필드와 확인 버튼이 나타날 위치 -->
        <div id="verification-input-container" className="verification-container"></div>
        <!-- 인증 완료 메시지를 표시할 빈 div -->
        <div id="verificationMessage" className="verification-message"></div>
        <!-- 회원가입 버튼 -->
        <button type="submit" className="signcomplete" id="member-signup-button">회원가입</button>
      </div>
    </form>
  </body>
</html>
