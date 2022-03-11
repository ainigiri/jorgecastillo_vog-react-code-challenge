import actionTypes from "./countries.actionTypes";
import initialStates from "./countries.initialStates";

const countriesReducer = (state = initialStates, {type, payload}) => {
    switch(type) {
        case actionTypes.COUNTRIES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                countries: [],
                errorMessage: null,
            };

        case actionTypes.COUNTRIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                countries: payload,
            };

        case actionTypes.COUNTRIES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };

        default:
            return state;
    }
};

export default countriesReducer;