import {
    ACTION_SET_DEPARTMENTS,
    ACTION_SET_EMPLOYEES
} from '../constant/constants.js';


//初始化state
const initialState = {
    departments: [],
    employees: [],
};
//纯函数
const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_SET_DEPARTMENTS:
            return { ...state, departments: payload };
        case ACTION_SET_EMPLOYEES:
            return { ...state, employees: payload };
        default:
            return state;
    }
};

export default reducer;
