<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
  <%@ include file="/WEB-INF/views/templates/head.jsp" %>
  <!-- head -->

  <head>
    <title>아이디 찾기</title>
    <link rel="stylesheet" href="css/login/loginCommon.css" />
  </head>

  <script src="js/login/join.js"></script>

  <body>
    <div className="findpwd-form-container">
      <div className="findpwd-header">
        <h1 className="findpwd-logo">아이디 찾기</h1>
      </div>

      <p className="instruction-text">회원가입 시 사용한 이메일을 입력해주세요</p>

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
      </div>
      <input type="button" className="signcomplete" id="findId-btn" value="아이디 찾기" />
      <input type="button" className="signcomplete" value="로그인 화면으로 돌아가기" onClick="location.href = '/login' " />
    </div>
  </body>
</html>
