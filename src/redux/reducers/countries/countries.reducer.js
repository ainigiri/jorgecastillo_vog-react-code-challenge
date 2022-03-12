import actionTypes from "./countries.actionTypes";
import initialStates from "./countries.initialStates";

const countriesReducer = (state = initialStates, {type, payload}) => {
    switch(type) {
        case actionTypes.COUNTRIES_LOAD_START:
            return {
                ...state,
                isLoadingCountries: true,
                countries: [],
                countriesErrorMessage: null,
            };

        case actionTypes.COUNTRIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoadingCountries: false,
                countries: payload,
            };

        case actionTypes.COUNTRIES_LOAD_ERROR:
            return {
                ...state,
                isLoadingCountries: false,
                countriesErrorMessage: payload,
            };

        default:
            return state;
    }
};

export default countriesReducer;