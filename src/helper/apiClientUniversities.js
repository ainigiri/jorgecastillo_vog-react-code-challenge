import axios from "axios";

const apiClientUniversities = () => {
    // const { REACT_APP_API_UNIVERSITIES_URL } = process.env;
    // Is preferred to save api urls on .env file, in this case is hardcoded for challenge purposes 
    const REACT_APP_API_UNIVERSITIES_URL = "http://universities.hipolabs.com/";
    const axiosInstance = axios.create({
        baseURL: REACT_APP_API_UNIVERSITIES_URL,
        responseType: "json",
    });

    return axiosInstance;
}

export default apiClientUniversities;