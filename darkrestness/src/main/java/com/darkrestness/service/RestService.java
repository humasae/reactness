package com.darkrestness.service;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
public class RestService {
    public String getHello() {
        return "Hellouuu";
    }
}
