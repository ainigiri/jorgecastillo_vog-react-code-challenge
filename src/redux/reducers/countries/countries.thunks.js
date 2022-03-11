import CountriesService from "../../../services/countries.service";
import actions from "./countries.actions";

export const loadAllCountriesAsync = () => (dispatch) => {
    dispatch(actions.countriesLoadStart());

    CountriesService.getAllCountries()
        .then((response) => dispatch(actions.countriesLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.countriesLoadError(error.message)));
};