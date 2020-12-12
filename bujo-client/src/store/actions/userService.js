import axios from 'axios';

export const userService = {
    login,
    register,
    logout
};

function login(user) {
    
    return axios.post('http://localhost:8080/users/authenticate', {
        username: user.username,
        password: user.password
    })

}

function register(user) {

    return axios.post('http://localhost:8080/users/register', {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password
    })
}

function logout(user) {
    localStorage.removeItem('jsonwebtoken');
    localStorage.removeItem('isAuthenticated');
}