export const userService = {
    login,
    register
};

function login(user) {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    };

    return fetch('http://localhost:8080/users/authenticate', requestOptions)
    .then(handleResponse)
}

function register(user) {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    };

    return fetch('http://localhost:8080/users/register', requestOptions)
    .then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if(response.state === 401) {
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error)
        }

        return data;
    })
}