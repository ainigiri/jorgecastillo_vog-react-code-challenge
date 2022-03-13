import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

const UniversitiesList = (props) => {
    const [universities, setUniversities] = useState(props.universities);

    // Updates universitites on property change
    useEffect(() => {
        setUniversities(props.universities);
    }, [props.universities]);

    return (
        <Row>
            {universities && universities.map((university) =>{
                return(
                    <Col className="px-1 pt-3" key={university.name}>
                        <Card className="h-100 w-100">
                            <Card.Body>
                                <Card.Title>{university.name}</Card.Title>
                                <Card.Text>
                                    {university['state-province']}
                                </Card.Text>
                                <Card.Link href={university.web_pages[0]}>{university.web_pages[0]}</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default UniversitiesList;