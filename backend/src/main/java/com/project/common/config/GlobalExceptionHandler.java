package com.project.common.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/** 예외를 처리하는 전역 예외 처리 클래스 */
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    /** IllegalArgumentException 예외 처리 */
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException e) {
        log.warn("IllegalArgument 예외가 발생하였습니다: {}", e.getMessage(), e);
        return ResponseEntity.badRequest()
                .body("입력값이 잘못되었습니다.");
    }

    /** IllegalArgumentException 예외 처리 */
    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<String> handleIllegalStateException(IllegalStateException e) {
        log.warn("IllegalState 예외가 발생하였습니다: {}", e.getMessage(), e);
        return ResponseEntity.badRequest()
                .body("요청을 처리할 수 없는 상태입니다.");
    }

    /** 일반 예외 처리 */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception e) {
        log.warn("예외가 발생하였습니다: {}", e.getMessage(), e);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("서버 내부 오류가 발생했습니다.");
    }
}
