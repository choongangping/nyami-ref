<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<%@ include file="/WEB-INF/views/templates/head.jsp" %>
<link rel="stylesheet" href="/css/notice/commonStyles.css">
<link rel="stylesheet" href="/css/notice/noticeCommonStyles.css">
<link rel="stylesheet" href="/css/notice/noticeStyles.css">
<body>
    <!-- 상단바 -->
    <%@ include file="/WEB-INF/views/templates/header.jsp" %>
	<nav className="navbar-menu">
        <a href="/noticeList" className="menu-item">공지사항</a>
        <a href="/eventOnList" className="menu-item active">이벤트</a>
    </nav>

    <div className="content">
        <!-- 제목과 날짜 -->
        <div className="notice-header">
            <h1 className="title">${event.title}</h1>
            <p className="date">${event.startDate} ~ ${event.endDate} | 조회수 ${event.views}</p>
        </div>

        <!-- 본문 내용 -->
        <div className="notice-content">
        	<c:if test="${not empty event.eventImage}">
	        	<div className="notice-image">
	        		<img src="${event.eventImage}">
	        	</div>
        	</c:if>
        	<div>
	            <p>
	            	${event.content}
	            </p>
            </div>
        </div>

        <!-- 관련 공지사항 -->
       <div className="related-notices">
            <p><strong>관련 공지</strong></p>
            <ul>
            	<c:if test="${nextEvent.id != null}">
            		<li className="related-notices-item">
            			이전글<a href="/event/${nextEvent.id}"> ${nextEvent.title}</a>
            		</li>
            	</c:if>
                <c:if test="${preEvent.id != null}">
                	<li className="related-notices-item">
                		다음글<a href="/event/${preEvent.id}"> ${preEvent.title}</a>
                	</li>
                </c:if>
            </ul>
        </div>

        <!-- 목록으로 돌아가기 버튼 -->
        <div className="back-button">
            <button onClick="location.href='/eventOnList'">목록</button>
        </div>
    </div>
<%@ include file="/WEB-INF/views/templates/footer.jsp" %>
</body>
</html>