import { REDUCER_ROUTERS as RR } from '../Config/Constants'

const initialState = {
    isLoading: true,
};


export default function sponsors(state = initialState, action) {

    switch (action.type) {

        case RR.SPONSORS.GET_SPONSORS_REQUEST:
            return { isLoading: true };
        case RR.SPONSORS.GET_SPONSORS_SUCCESS:
            return { ...action.sponsors, isLoading: undefined };
        case RR.SPONSORS.GET_SPONSORS_FAILURE:
            return { ...state, isLoading: undefined };


        //todo once Stripe implemented
        // case RR.SPONSORS.REGISTER_SPONSOR_FOR_EVENT_REQUEST:
        //     return { isLoading: true };
        // // case RR.SPONSORS.REGISTER_SPONSOR_FOR_EVENT_SUCCESS:
        // // return { ...action.sponsors, isLoading: undefined };
        // case RR.SPONSORS.REGISTER_SPONSOR_FOR_EVENT_FAILURE:
        //     return { ...state, isLoading: undefined };

        default:
            return state;
    }
}