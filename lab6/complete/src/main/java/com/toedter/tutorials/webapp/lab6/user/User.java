package com.toedter.tutorials.webapp.lab6.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private String id;
    private String fullName;
    private String email;
}
