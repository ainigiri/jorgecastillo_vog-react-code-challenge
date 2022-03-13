import actionTypes from "./zipcodes.actionTypes";
import initialStates from "./zipcodes.initialStates";

const zipcodesReducer = (state = initialStates, {type, payload}) => {
    switch(type) {
        case actionTypes.ZIPCODES_LOAD_START:
            return {
                ...state,
                isLoadingZipcodes: true,
                zipcodeData: null,
                zipcodesErrorMessage: null,
            };

        case actionTypes.ZIPCODES_LOAD_SUCCESS:
            return {
                ...state,
                isLoadingZipcodes: false,
                zipcodeData: payload,
            };

        case actionTypes.ZIPCODES_LOAD_ERROR:
            return {
                ...state,
                isLoadingZipcodes: false,
                zipcodesErrorMessage: payload,
            };

        default:
            return state;
    }
};

export default zipcodesReducer;