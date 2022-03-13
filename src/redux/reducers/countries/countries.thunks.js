import CountriesService from "../../../services/countries.service";
import actions from "./countries.actions";

export const loadAllCountriesAsync = () => (dispatch) => {
    dispatch(actions.countriesLoadStart());

    CountriesService.getAllCountries()
        .then((response) => {
            // Sort countries alphabetically by common name
            dispatch(actions.countriesLoadSuccess(response.data.sort((a,b) => (a.name.common > b.name.common) ? 1 : -1)))
        })
        .catch((error) => dispatch(actions.countriesLoadError(error.message)));
};