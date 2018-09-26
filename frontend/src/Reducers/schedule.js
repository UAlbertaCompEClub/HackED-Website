import { REDUCER_ROUTERS as RR } from '../Config/Constants'

const initialState = {
    isLoading: true,
};


export default function schedule(state = initialState, action) {

    switch (action.type) {

        case RR.SCHEDULE.GET_SCHEDULE_REQUEST:
            return { isLoading: true };
        case RR.SCHEDULE.GET_SCHEDULE_SUCCESS:
            return { ...state, ...action.schedule, isLoading: undefined };
        case RR.SCHEDULE.GET_SCHEDULE_FAILURE:
            return { ...state, isLoading: undefined };

        default:
            return state;
    }
}