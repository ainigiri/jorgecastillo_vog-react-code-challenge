import apiClientCountries from "../helper/apiClientCountries";

class CountriesService {
    getAllCountries = () => apiClientCountries().get("all?fields=name,flags,population,languages");
}

export default new CountriesService();