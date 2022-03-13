import axios from "axios";

const apiClientZipCodes = () => {
    // const { REACT_APP_API_ZIP_URL } = process.env;
    // Is preferred to save api urls on .env file, in this case is hardcoded for challenge purposes 
    const REACT_APP_API_ZIP_URL = "https://api.zippopotam.us/";
    const axiosInstance = axios.create({
        baseURL: REACT_APP_API_ZIP_URL,
        responseType: "json",
    });

    return axiosInstance;
}

export default apiClientZipCodes;