import apiClientUniversities from "../helper/apiClientUniversities";

class UniversitiesService {
    getUniversitiesByCountry = (country) => apiClientUniversities().get("search?country="+country);
}

export default new UniversitiesService();