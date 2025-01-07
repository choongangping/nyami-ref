<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
  <%@ include file="/WEB-INF/views/templates/head.jsp" %>
  <!-- head -->

  <head>
    <title>Login</title>
    <link rel="stylesheet" href="/css/login/loginCommon.css" />
    <script src="https://code.jquery.com/jquery-latest.js"></script>
    <script src="/js/login/login.js"></script>
  </head>
  <body>
    <div className="login-container">
      <a href="/signup" className="no-underline">
        <button type="button" className="gosignup-button">회원가입</button>
      </a>

      <div className="login-header">
        <h1 className="login-logo">Login</h1>
      </div>

      <form className="login-form" method="post" action="login">
        <input type="text" placeholder="아이디" id="memberId" name="memberId" />
        <input type="password" placeholder="비밀번호" id="passwd" name="passwd" />
        <button type="submit">로그인</button>
      </form>

      <div className="sns-container">
        <a href="/oauth2/authorization/kakao">
          <img src="/images/kakao_button.png" alt="카카오 간편 로그인" className="sns-login-btn" />
        </a>
        <a href="/oauth2/authorization/google">
          <img src="/images/google_button.png" alt="구글 간편 로그인" className="sns-login-btn" />
        </a>
        <a href="/oauth2/authorization/naver">
          <img src="/images/naver_button.png" alt="네이버 간편 로그인" className="sns-login-btn" />
        </a>
      </div>

      <br />
      <a href="findId" className="forgot-password">아이디 찾기</a>
      <a href="findPwd" className="forgot-password">비밀번호 찾기</a>
    </div>
  </body>
</html>
