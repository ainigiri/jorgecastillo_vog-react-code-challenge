import actionTypes from "./universities.actionTypes";
import initialStates from "./universities.initialStates";

const universitiesReducer = (state = initialStates, {type, payload}) => {
    switch(type) {
        case actionTypes.UNIVERSITIES_LOAD_START:
            return {
                ...state,
                isLoadingUniversities: true,
                universities: [],
                universitiesErrorMessage: null,
            };

        case actionTypes.UNIVERSITIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoadingUniversities: false,
                universities: payload,
            };

        case actionTypes.UNIVERSITIES_LOAD_ERROR:
            return {
                ...state,
                isLoadingUniversities: false,
                universitiesErrorMessage: payload,
            };

        default:
            return state;
    }
};

export default universitiesReducer;