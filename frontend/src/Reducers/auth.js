import { REDUCER_ROUTERS as RR } from '../Config/Constants'

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: true,
    user: null,
};


export default function auth(state = initialState, action) {

    switch (action.type) {

        case RR.AUTH.CREATE_USER_REQUEST:
            return { isLoading: true };
        case RR.AUTH.CREATE_USER_SUCCESS:
            localStorage.setItem("token", action.data.token); return { ...state, ...action.user, isLoading: undefined };
        case RR.AUTH.CREATE_USER_FAILURE:
            return { ...state, isLoading: undefined };

        case RR.AUTH.LOGIN_USER_REQUEST:
            return { isLoading: true };
        case RR.AUTH.LOGIN_USER_SUCCESS:
            localStorage.setItem("token", action.data.token); return { ...state, ...action.user, isLoading: undefined };
        case RR.AUTH.LOGIN_USER_FAILURE:
            return { ...state, isLoading: undefined };

        case RR.AUTH.LOGOUT_USER_REQUEST:
            return { isLoading: true };
        case RR.AUTH.LOGOUT_USER_SUCCESS:
            localStorage.removeItem("token"); return {};
        case RR.AUTH.LOGOUT_USER_FAILURE:
            return { ...state, isLoading: undefined };

        default:
            return state;
    }
}