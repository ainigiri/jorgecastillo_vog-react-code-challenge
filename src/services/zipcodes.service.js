import apiClientZipCodes from "../helper/apiClientZipCodes";

class ZipcodesService {
    getZipData = (countryCode, zipCode) => apiClientZipCodes().get(countryCode+"/"+zipCode);
}

export default new ZipcodesService();