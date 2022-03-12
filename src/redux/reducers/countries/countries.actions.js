import actionTypes from "./countries.actionTypes";

const countriesLoadStart = () => ({
    type: actionTypes.COUNTRIES_LOAD_START,
});

const countriesLoadSuccess = (countries) => ({
    type: actionTypes.COUNTRIES_LOAD_SUCCESS,
    payload: countries,
});

const countriesLoadError = (errorMessage) => ({
    type: actionTypes.COUNTRIES_LOAD_ERROR,
    payload: errorMessage,
});

export default {
    countriesLoadStart,
    countriesLoadSuccess,
    countriesLoadError,
};