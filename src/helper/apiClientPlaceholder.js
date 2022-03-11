import axios from "axios";

const apiClientPlaceholder = () => {
    // const { REACT_APP_API_PLACEHOLDER_URL } = process.env;
    // Is preferred to save api urls on .env file, in this case is hardcoded for challenge purposes 
    const REACT_APP_API_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com/";
    const axiosInstance = axios.create({
        baseURL: REACT_APP_API_PLACEHOLDER_URL,
        responseType: "json",
    });
    
    return axiosInstance;
}

export default apiClientPlaceholder;