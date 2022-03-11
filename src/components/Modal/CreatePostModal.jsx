import React, { useEffect, useState } from "react";
import { Col, Form, InputGroup, Modal, Row, Button } from "react-bootstrap";

const CreatePostModal = (props) => {
    const [newPost, setNewPost] = useState(
        {
            title: "",
            body: "",
            userId: "",
        }
    );

    const handleNewPostChange = (input) => {
        const { name, value } = input.target;
        setNewPost((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="create-post-modal-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="create-post-modal-vcenter">
                    Create new post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" type="text" placeholder="Post title" onChange={handleNewPostChange} />
                    </Form.Group>
                    <Form.Group controlId="formBody">
                        <Form.Label>Body</Form.Label>
                        <Form.Control name="body" as="textarea" rows={3} onChange={handleNewPostChange} />
                    </Form.Group>
                    <Form.Group controlId="formUserId">
                        <Form.Label>User id</Form.Label>
                        <Form.Control name="userId" value={newPost.userId} type="number" onChange={handleNewPostChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="success" onClick={() => props.onSave(newPost)}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePostModal;