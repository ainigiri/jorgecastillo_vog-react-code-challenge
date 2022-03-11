import actionTypes from "./universities.actionTypes";
import initialStates from "./universities.initialStates";

const universitiesReducer = (state = initialStates, {type, payload}) => {
    switch(type) {
        case actionTypes.UNIVERSITIES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                universities: [],
                errorMessage: null,
            };

        case actionTypes.UNIVERSITIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                universities: payload,
            };

        case actionTypes.UNIVERSITIES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };

        default:
            return state;
    }
};

export default universitiesReducer;