import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ZipcodeInfo from "../../components/ZipcodeInfo/ZipcodeInfo";
import { loadZipcodeData } from "../../redux/reducers/zipcodes/zipcodes.thunks";

const Postal = () => {
    const dispatch = useDispatch();
    const { zipcodeData, isLoadingZipcodes, zipcodesErrorMessage } = useSelector((state) => state.zipcodes);
    const [countryCode, setCountryCode] = useState("ca");
    const [zipCode, setZipCode] = useState("");
    // Use zippopotamus available countries
    const countryCodes = [
        {value: "ar", label: "Argentina"},
        {value: "ca", label: "Canada"},
        {value: "mx", label: "Mexico"},
        {value: "us", label: "United States"}
    ];

    // Update zip code data on country change or zip change
    useEffect(() => {
        if(zipCode.trim() !== "")
            dispatch(loadZipcodeData(countryCode, zipCode));
    }, [zipCode, countryCode]);

    // Methods
    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };
    
    const handleCountryCodeSelection = (event) => {
        setCountryCode(event.target.value)
    };

    return(
        <Container fluid>
            <Row>
                <Col>
                    <h4>Lookup postal code information</h4>
                </Col>
            </Row>
            <Row>
                <Col className="mb-3">
                    <Form>
                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Select value={countryCode} aria-label="Country selector" onChange={handleCountryCodeSelection.bind(this)}>
                                {countryCodes.map((country) => {
                                    return(<option key={country.value} value={country.value}>{country.label}</option>);
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Postal code</Form.Label>
                            <Form.Control type="text" placeholder="Postal code" value={zipCode} onChange={handleZipCodeChange}/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={8}>
                 {(zipcodesErrorMessage) ? <h4>Enter a valid postal code and country</h4> :
                  (zipcodeData) && <ZipcodeInfo zipCodeData={zipcodeData} />
                 }
                </Col>
            </Row>
        </Container>
    );
};

export default Postal;