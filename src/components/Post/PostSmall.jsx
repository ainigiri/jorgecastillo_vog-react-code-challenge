import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const PostSmall = (props) => {
    const [post, setPost] = useState(props.post);
    const [image, setImage] = useState(props.image)
    
    return (
        <Card>
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title>{'#'+post.id+': '+post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
                <Button className="float-end" variant="danger" onClick={props.onDelete}>Delete</Button>
                <Button className="float-end mx-2" variant="secondary" onClick={props.onEdit}>Edit</Button>
            </Card.Body>
        </Card>
    )
};

export default PostSmall;