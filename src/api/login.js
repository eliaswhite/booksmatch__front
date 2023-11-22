import axios from 'axios';

class LoginService {
    async login(user) {
        const { data } = await axios.post('/api/login/', user)
        return data;
    }
}

export default new LoginService();