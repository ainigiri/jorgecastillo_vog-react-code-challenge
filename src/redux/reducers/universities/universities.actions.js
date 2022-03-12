import actionTypes from "./universities.actionTypes";

const universitiesLoadStart = () => ({
    type: actionTypes.UNIVERSITIES_LOAD_START,
});

const universitiesLoadSuccess = (universities) => ({
    type: actionTypes.UNIVERSITIES_LOAD_SUCCESS,
    payload: universities,
});

const universitiesLoadError = (errorMessage) => ({
    type: actionTypes.UNIVERSITIES_LOAD_ERROR,
    payload: errorMessage,
});

export default {
    universitiesLoadStart,
    universitiesLoadSuccess,
    universitiesLoadError,
};