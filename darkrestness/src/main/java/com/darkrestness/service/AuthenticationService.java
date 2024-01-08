package com.darkrestness.service;

import com.darkrestness.entity.User;
import com.darkrestness.exception.AuthenticationFailedException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    public String authenticate(String email, String password) {
        try {
            // The authentication manager provides secure authentication and throws exception if it fails
            var authToken = new UsernamePasswordAuthenticationToken(email, password);
            Authentication authenticate = authenticationManager.authenticate(authToken);
//          var user  = (User) authenticate.getPrincipal(); // --> org.springframework.security.core.userdetails.User cannot be cast to class com.darkrestness.entity.User
            org.springframework.security.core.userdetails.User ppalUser = (org.springframework.security.core.userdetails.User) authenticate.getPrincipal();
            User user = new User();
            user.setUsername(ppalUser.getUsername());
            user.setPassword(ppalUser.getPassword());
            String token = tokenService.generateToken(user);
            return token;
        } catch (AuthenticationException e) {
            throw new AuthenticationFailedException("Invalid User or Password");
        }
    }

}
