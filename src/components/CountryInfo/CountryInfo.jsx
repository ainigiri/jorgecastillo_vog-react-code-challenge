import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const CountryInfo = (props) => {
    const [country, setCountry] = useState(props.country);

    // Change country info if property change
    useEffect(() => {
        setCountry(props.country);
    }, [props.country]);

    return(
        <Row className="pt-3">
            <Col>
             {country &&
                <Card>
                    <Card.Img src={country.flags.png} />
                    <Card.Body>
                        <Card.Title>{country.name.common}</Card.Title>
                        <Card.Text>
                            Official name: {country.name.official}
                        </Card.Text>
                        <Card.Text>
                            Population: {country.population}
                        </Card.Text>
                    </Card.Body>
                </Card> }
            </Col>
        </Row>
    );
}

export default CountryInfo;