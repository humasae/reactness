package com.darkrestness.web;

import com.darkrestness.DarkrestnessApplication;
import com.darkrestness.service.RestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class DarkrestController {

    private final RestService restService;

    public DarkrestController(RestService restService) {
        this.restService = restService;
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
}
