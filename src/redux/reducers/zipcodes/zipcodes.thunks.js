import ZipcodesService from "../../../services/zipcodes.service";
import actions from "./zipcodes.actions";

export const loadZipcodeData = (countryCode, zipCode) => (dispatch) => {
    dispatch(actions.zipcodesLoadStart());

    ZipcodesService.getZipData(countryCode, zipCode)
        .then((response) => dispatch(actions.zipcodesLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.zipcodesLoadError(error.message)));
};