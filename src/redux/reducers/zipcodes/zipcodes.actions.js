import actionTypes from "./zipcodes.actionTypes";

const zipcodesLoadStart = () => ({
    type: actionTypes.ZIPCODES_LOAD_START,
});

const zipcodesLoadSuccess = (zipcodeInfo) => ({
    type: actionTypes.ZIPCODES_LOAD_SUCCESS,
    payload: zipcodeInfo,
});

const zipcodesLoadError = (errorMessage) => ({
    type: actionTypes.ZIPCODES_LOAD_ERROR,
    payload: errorMessage,
});

export default {
    zipcodesLoadStart,
    zipcodesLoadSuccess,
    zipcodesLoadError,
};