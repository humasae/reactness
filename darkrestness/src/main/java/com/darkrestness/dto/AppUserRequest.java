package com.darkrestness.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class AppUserRequest {

    @NotEmpty(message = "{required.field}")
    private String name;

    @NotEmpty(message = "{required.field}")
    private String userName;

    @NotEmpty(message = "{required.field}")
    private String email;

    @NotEmpty(message = "{required.field}")
    private String password;

}
