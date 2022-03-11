import React, { useEffect, useState } from "react";
import { Col, Form, InputGroup, Modal, Row, Button } from "react-bootstrap";

const EditPostModal = (props) => {
    const [editedPost, setEditedPost] = useState(
        {
            id: props.post.id,
            title: props.post.title,
            body: props.post.body,
            userId: props.post.userId,
        }
    );

    useEffect(() => {
        setEditedPost(() => props.post);
    }, [props.post]);

    const handlePostChange = (input) => {
        const { name, value } = input.target;
        setEditedPost((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="create-post-modal-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="create-post-modal-vcenter">
                    Edit post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Id</Form.Label>
                        <Form.Control value={editedPost.id} name="id" type="number" readOnly />
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={editedPost.title} name="title" type="text" placeholder="Post title" onChange={handlePostChange} />
                    </Form.Group>
                    <Form.Group controlId="formBody">
                        <Form.Label>Body</Form.Label>
                        <Form.Control value={editedPost.body} name="body" as="textarea" rows={3} onChange={handlePostChange} />
                    </Form.Group>
                    <Form.Group controlId="formUserId">
                        <Form.Label>User id</Form.Label>
                        <Form.Control value={editedPost.userId} type="number" readOnly />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="success" onClick={() => props.onSave(editedPost)}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditPostModal;