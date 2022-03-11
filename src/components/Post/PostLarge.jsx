import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./PostLarge.css"

const PostLarge = (props) => {
    const [post, setPost] = useState(props.post);
    const [image, setImage] = useState(props.image);
    
    return (
        <Card className="large-card">
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title>{'#'+post.id+': '+post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
                <Button className="float-end mt-5" variant="danger" onClick={props.onDelete}>Delete</Button>
                <Button className="float-end mt-5 mx-2" variant="secondary" onClick={props.onEdit}>Edit</Button>
            </Card.Body>
        </Card>
    )
};

export default PostLarge;