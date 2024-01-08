package com.darkrestness.exception;

import org.springframework.security.core.AuthenticationException;

public class AuthenticationFailedException extends AuthenticationException {

    public AuthenticationFailedException(String msg) {
        super(msg);
    }

}
