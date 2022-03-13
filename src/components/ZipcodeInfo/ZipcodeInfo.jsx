import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const ZipcodeInfo = (props) => {
    const [zipCodeData, setZipCodeData] = useState(props.zipCodeData);

    // Update zip code info on property change
    useEffect(() => {
        setZipCodeData(props.zipCodeData);
    }, [props.zipCodeData]);

    return(
        <Row>
            <Col>
                { zipCodeData && 
                <Card>
                    <Card.Header>{zipCodeData.country} {zipCodeData['post code']}</Card.Header>
                    <Card.Body>
                        <Card.Title>Places:</Card.Title>
                        {zipCodeData.places && zipCodeData.places.map((place) => {
                            return (
                                <Card.Text key={place['place name']}>
                                    State: {place.state}<br />
                                    Place: {place['place name']}<br />
                                    Latitude: {place.latitude}<br />
                                    Longitude: {place.longitude}<br />
                                </Card.Text>
                            );
                        })}
                    </Card.Body>
                </Card> }
            </Col>
        </Row>
    );
}

export default ZipcodeInfo;