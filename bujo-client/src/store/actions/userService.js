import axios from 'axios';

export const userService = {
    login,
    register,
    logout
};

function login(user) {
    
    return axios.post('https://bujo-to-go.herokuapp.com/users/authenticate', {
        username: user.username,
        password: user.password
    })

}

function register(user) {

    return axios.post('https://bujo-to-go.herokuapp.com/users/register', {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password
    })
}

function logout(user) {
    localStorage.removeItem('jsonwebtoken');
}