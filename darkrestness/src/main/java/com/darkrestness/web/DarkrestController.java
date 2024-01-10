package com.darkrestness.web;

import com.darkrestness.DarkrestnessApplication;
import com.darkrestness.entity.User;
import com.darkrestness.mapper.UserMapper;
import com.darkrestness.service.AuthenticationService;
import com.darkrestness.service.RestService;
import com.darkrestness.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.darkrestness.dto.*;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api")
public class DarkrestController {

    private final RestService restService;
    private final UserService userService;
    private final AuthenticationService authenticationService;
    private final UserMapper mapper;

    public DarkrestController(RestService restService, UserService userService, AuthenticationService authenticationService, UserMapper mapper) {
        this.restService = restService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.mapper = mapper;
    }
    @GetMapping(value="/hello", produces = "application/json")
    public ResponseEntity<String> getHello() {
        return new ResponseEntity<>(restService.getHello(), HttpStatus.OK) ;
    }



    // Users
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody @Valid AuthenticationRequest request) {
        var token = authenticationService.authenticate(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(new AuthenticationResponse(token));
    }

    @GetMapping("/logout")
    public String logout() {
        return "redirect:/login";
    }

    @GetMapping("/users")
    public ResponseEntity<List<AppUserResponse>> getUsers() {
        List<User> users = userService.find();
        var resp = users.stream().map(mapper::toResponse).toList();
        return ResponseEntity.ok(resp);
    }

    @PostMapping
    public ResponseEntity<AppUserResponse> createUser(@RequestBody @Valid AppUserRequest request) throws Exception {
        var user = mapper.toModel(request);
        user = userService.save(user);
        var resp = mapper.toResponse(user);
        return ResponseEntity.created(URI.create(user.getId().toString())).body(resp);
    }

    @GetMapping("/usersAdd")
    public ResponseEntity<AppUserResponse> createUser2() throws Exception {
        AppUserRequest request = new AppUserRequest();
        request.setName("test");
        request.setUserName("UserTest");
        request.setEmail("a@a.as");
        request.setPassword("admin");
        var user = mapper.toModel(request);
        user = userService.save(user);
        var resp = mapper.toResponse(user);
        return ResponseEntity.created(URI.create(user.getId().toString())).body(resp);
    }
}
