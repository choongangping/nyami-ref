<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link rel="stylesheet" href="css/login/loginCommon.css" />
  </head>
  <body>
    <div className="signup-container">
      <h1 className="signup-logo">어떤 회원으로 가입하시겠습니까?</h1>

      <form className="signup-form">
        <button type="button" className="signup-button" onClick="location.href='memberForm'">개인회원</button>

        <button type="button" className="signup-button" onClick="location.href='ownerForm'">사업자회원</button>
      </form>
    </div>
  </body>
</html>
