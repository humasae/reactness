package com.darkrestness.web;

import com.darkrestness.DarkrestnessApplication;
import com.darkrestness.entity.User;
import com.darkrestness.mapper.UserMapper;
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
@RequestMapping("api")
public class DarkrestController {

    private final RestService restService;
    private final UserService userService;
    private final UserMapper mapper;

    public DarkrestController(RestService restService, UserService userService, UserMapper mapper) {
        this.restService = restService;
        this.userService = userService;
        this.mapper = mapper;
    }
    @GetMapping(value="/hello", produces = "application/json")
    public ResponseEntity<String> getHello() {
        return new ResponseEntity<>(restService.getHello(), HttpStatus.OK) ;
    }

    @GetMapping("/")
    public String greeting() {
        return "index";
    }
    @GetMapping("/login")
    public String login() {
        return "login";
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
}
