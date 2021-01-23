import { get, post } from './request';

const API = {
    getDepartments: () => {
        return get('departments')
            .then(res => res.data);
    },
    getEmployees: () => {
        return get('employees')
            .then(res => res.data);
    },
    createEmployee: param => {
        return post('employees', param)
            .then(res => res.data);
    }
};

export default API;
