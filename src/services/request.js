import axios from 'axios';
import { BASE_URL } from '../constant/constants';

// eslint-disable-next-line
const errorHandler = (status, other) => {
    switch (status) {
        case 401:
            break;
        default:
            break;
    }
};

axios.defaults.baseURL = BASE_URL;
const instance = axios.create({ timeout: 10 * 1000 });
instance.defaults.headers.get['Content-Type'] = 'application/json';
instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(
    (config) => {
        // config.headers['X-Auth-Token'] = token.get();
        return config;
    },
    error => Promise.reject(error),
);

instance.interceptors.response.use(
    (res) => {
        if (res.status >= 200 && res.status < 300) {
            return Promise.resolve(res);
        }
        return Promise.reject(res);
    },
    (error) => Promise.reject(error),
);

export function get(path, params = {}) {
    return instance.get(path, { params });
}

export function put(path, params = {}) {
    return instance.put(path, params);
}

export function post(path, params = {}) {
    return instance.post(path, params);
}

export default instance;
