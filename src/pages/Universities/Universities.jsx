import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllCountriesAsync } from "../../redux/reducers/countries/countries.thunks";
import { loadUniversitiesByCountryAsync } from "../../redux/reducers/universities/universities.thunks";
import { Container, Form, Row, Col } from "react-bootstrap";
import UniversitiesList from "../../components/UniversitiesList/UniversitiesList";
import CountryInfo from "../../components/CountryInfo/CountryInfo";

const Universities = () => {
    const dispatch = useDispatch();
    const { countries, isLoadingCountries, countriesErrorMessage } = useSelector((state) => state.countries);
    const { universities, isLoadingUniversities, universitiesErrorMessage } = useSelector((state) => state.universities);
    const [selectedCountry, setSelectedCountry] = useState(null);
    // Default country setted to Canada
    const [selectedCountryName, setSelectedCountryName] = useState("Canada");

    // Load countries for selector on mount
    useEffect(() =>{
        dispatch(loadAllCountriesAsync());
    }, []);

    // Load universitites on country selection
    useEffect(() => {
        dispatch(loadUniversitiesByCountryAsync(selectedCountryName));
    }, [selectedCountryName]);

    // Update selected country on countries loaded
    useEffect(() => {
        setSelectedCountry(countries.find((country) => country.name.common === selectedCountryName));
    }, [countries]);

    // Methods
    const handleCountrySelection = (event) => {
        setSelectedCountryName(event.target.value);
        setSelectedCountry(countries.find((country) => country.name.common === event.target.value))
    };

    return(
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <h3>Search universities on each country</h3>
                    <Form.Select value={selectedCountryName} aria-label="Country selector" onChange={handleCountrySelection.bind(this)}>
                        { countries && countries.map((country, idx) => {
                            return(<option key={country.name.common} value={country.name.common}>{country.name.common}</option>);
                          }) 
                        }
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    {selectedCountry && <CountryInfo country={selectedCountry} />}
                </Col>
                <Col md={8}>
                 {universities && (universities.length > 0) ? <UniversitiesList universities={universities} /> : <h4 className="mt-3">We couldn't find any university</h4>}
                </Col>
            </Row>
        </Container>
    );
};

export default Universities;