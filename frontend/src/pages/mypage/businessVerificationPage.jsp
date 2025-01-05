<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
  <%@ include file="/WEB-INF/views/templates/head.jsp" %>
  <!-- head -->

  <head>
    <title>사업자 회원 전환</title>
    <link rel="stylesheet" href="css/login/loginCommon.css" />

    <script src="js/login/join.js"></script>
  </head>

  <body>
    <div className="ownerform-container">
      <div className="ownerform-header">
        <h1 className="owner-logo">사업자 회원 전환</h1>
      </div>

      <input type="hidden" name="registrationNumber" id="registrationNumber" />
      <div className="owner-num">
        <input type="text" placeholder="사업자" id="ownerCode1" />
        <span className="owner-symbol">-</span>
        <input type="text" placeholder="번호" id="ownerCode2" />
        <span className="owner-symbol">-</span>
        <input type="text" placeholder="입력" id="ownerCode3" />
        <input type="button" value="사업자번호 인증" id="ownerValidation" />
      </div>
      <div id="validationMessage" className="instruction-text"></div>
      <button type="submit" className="signcomplete" id="memberChange-button">전환</button>
    </div>
  </body>
</html>
