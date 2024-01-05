package com.darkrestness.mapper;

import com.darkrestness.dto.AppUserRequest;
import com.darkrestness.dto.AppUserResponse;
import com.darkrestness.entity.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserMapper {

    private final ModelMapper mapper;


    public User toModel(AppUserRequest request) {
        return mapper.map(request, User.class);
    }

    public AppUserRequest toRequest(User user) {
        return mapper.map(user, AppUserRequest.class);
    }

    public AppUserResponse toResponse(User user) {
        return mapper.map(user, AppUserResponse.class);
    }
}
