package com.darkrestness.service;

import com.darkrestness.entity.User;
import com.darkrestness.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsernameOrEmail(username, username);
        if(user.isEmpty()) {
            throw new UsernameNotFoundException("User not exists by Username");
        }

        // this API doesn't manage Roles
//        Set<GrantedAuthority> authorities = user.getRoles().stream()
//                .map((role) -> new SimpleGrantedAuthority(role.getName()))
//                .collect(Collectors.toSet());
        Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();

        return new org.springframework.security.core.userdetails.User(username,user.get().getPassword(), authorities);
    }

    public List<User> find() {
        return userRepository.findAll();
    }

    public User save(User user) throws Exception {
        if (userRepository.existsByUsernameOrEmail(user.getUsername(), user.getEmail()))
            throw new Exception(String.format("User already exists: %s", user.getEmail()));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}
