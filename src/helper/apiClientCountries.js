import axios from "axios";

const apiClientCountries = () => {
    // const { REACT_APP_API_COUNTRIES_URL } = process.env;
    // Is preferred to save api urls on .env file, in this case is hardcoded for challenge purposes 
    const REACT_APP_API_COUNTRIES_URL = "https://restcountries.com/v3.1/";
    const axiosInstance = axios.create({
        baseURL: REACT_APP_API_COUNTRIES_URL,
        responseType: "json",
    });
    
    return axiosInstance;
}

export default apiClientCountries;