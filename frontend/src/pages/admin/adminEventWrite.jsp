<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/admin/templates/header.jsp" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <title>작성폼</title>
    <link rel="stylesheet" href="/css/admin/adminWriteForm.css">
    <style>
        .mb-0 {
            margin-bottom: 0;
        }
    </style>
    
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="/js/admin/adminEvent.js"></script>
</head>
<body>
    <div class="main-content">
        <div style="display: flex; justify-content: space-between;">
            <div class="form-group" style="width: 200px;">
                <label for="category">주제</label>
                <select id="category" name="category">
                    <option value="">주제 선택</option>
                    <option value="할인">할인</option>
                    <option value="포인트">포인트</option>
                    <option value="기타">기타</option>
                </select>
            </div>

            <div style="display: flex; gap: 20px;">
                <div class="form-group">
                    <label for="start-date">시작일자</label>
                    <input type="date" id="start-date" name="startDate" />
                </div>
                <div class="form-group">
                    <label for="end-date">종료일자</label>
                    <input type="date" id="end-date" name="endDate" />
                </div>
            </div>
        </div>

        <div class="main-content-header mb-0">
            <div class="form-group">
                <label for="title">제목</label>
                <input type="text" id="title" name="title" placeholder="제목을 입력하세요." />
            </div>
        </div>

        <div class="main-content-content">
            <div class="form-group">
                <label for="content" style="margin-top: 20px;">내용</label>
                <textarea id="content" name="content" placeholder="내용을 입력하세요."></textarea>
            </div>
        </div>

        <div class="upload-form text-left">
            <label for="event-image" class="custom-file-upload">파일 선택</label>
            <input id="event-image" type="file" name="eventImage">
            <div class="file-name" id="file-name">선택된 파일이 없습니다.</div>
        </div>

        <div class="button-container">
            <a class="active-btn" id="write-event-btn">작성</a>
            <a class="active-btn" href='/admin/events'>목록</a>
        </div>
    </div>
</body>
</html>
