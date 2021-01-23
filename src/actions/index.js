import API from '../services/API';

import {
    ACTION_SET_DEPARTMENTS,
    ACTION_SET_EMPLOYEES,
} from '../constant/constants.js';

//获取部门信息
export const setDepartments = departments => ({
    type: ACTION_SET_DEPARTMENTS,
    payload: departments,
});

export const getDepartments = () => {
    return async dispatch => {
        try {
            const res = await API.getDepartments();
            dispatch(setDepartments(res));
        } catch (e) {
            console.error(e)
        }
    }
};

//获取员工信息
export const setEmployees = employees => ({
    type: ACTION_SET_EMPLOYEES,
    payload: employees
});
export const getEmployees = () => {
    return async dispatch => {
        try {
            const result = await API.getEmployees();
            dispatch(setEmployees(result));
        } catch (error) {
            console.log(error);
        }
    }
}

