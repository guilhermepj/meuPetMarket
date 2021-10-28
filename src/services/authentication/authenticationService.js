import api from '../api';

class AuthenticationService { 
    async registerUser(registerUserRequest) {
        const json = JSON.stringify(registerUserRequest);
        await api.post("/authentication/register", json);
    }

    async signinUser(signinUserRequest) {
        const json = JSON.stringify(signinUserRequest);
        await api.post("/authentication/signin", json);
    }
}

export default AuthenticationService