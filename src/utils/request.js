import axios from 'axios';

const instance = axios.create({
    timeout: 10000,
});

instance.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data;
    }
})

export default instance;
