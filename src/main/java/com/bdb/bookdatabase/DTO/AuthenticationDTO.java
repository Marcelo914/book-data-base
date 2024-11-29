package com.bdb.bookdatabase.DTO;

public record AuthenticationDTO(String login, String password) {

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }

}
