import api from '../api';

class AuthenticationService { 
    async registerUser(registerUserRequest) {
        const json = JSON.stringify(registerUserRequest);
        await api.post("api/authentication/register", json);
    }

    async signinUser(signinUserRequest) {
        const json = JSON.stringify(signinUserRequest);
        await api.post("api/authentication/signin", json);
    }
}

export default AuthenticationService