import UniversitiesService from "../../../services/universities.service";
import actions from "./universities.actions";

export const loadUniversitiesByCountryAsync = (country) => (dispatch) => {
    dispatch(actions.universitiesLoadStart());

    UniversitiesService.getUniversitiesByCountry(country)
        .then((response) => dispatch(actions.universitiesLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.universitiesLoadError(error.message)));
};