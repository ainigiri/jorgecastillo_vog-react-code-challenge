import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    loadBoundedPostsAsync,
    loadSinglePostAsync,
    deletePostAsync,
    createPostAsync,
    editPostAsync,
    postClearResponsesAsync,
} from "../../redux/reducers/posts/posts.thunks";
import { 
    Container, 
    Row, 
    Col,
    InputGroup,
    FormControl,
    Button,
    ToastContainer,
    Toast
} from "react-bootstrap";
import PostsLayout from "../../components/PostsLayout/PostsLayout";
import CreatePostModal from "../../components/Modal/CreatePostModal";
import EditPostModal from "../../components/Modal/EditPostModal";

const Home = () => {
    const [searchId, setSearchId] = useState('');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [editPost, setEditPost] = useState({
        id: "",
        title: "",
        body: "",
        userId: "",
    });

    const dispatch = useDispatch();
    const { 
        isLoading, 
        posts, 
        errorMessage,
        createResponse,
        createErrorMessage,
        editResponse,
        editErrorMessage,
        deleteResponse,
        deleteErrorMessage,
    } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(loadBoundedPostsAsync(0, 20))
    }, []);

    useEffect(() => {
        if(searchId.trim() == '') {
            dispatch(loadBoundedPostsAsync(0, 20));
            return;
        }
        dispatch(loadSinglePostAsync(searchId));
    }, [searchId]);

    useEffect(() => {
        if(createResponse != "" && createResponse != null) {
            setToastMessage(createResponse);
            setShowToast(true);
        }
        if(editResponse != "" && editResponse != null) {
            setToastMessage(editResponse);
            setShowToast(true);
        }
        if(deleteResponse != "" && deleteResponse != null) {
            setToastMessage(deleteResponse);
            setShowToast(true);
        }
        dispatch(postClearResponsesAsync())
    }, [createResponse, editResponse, deleteResponse]);

    useEffect(() => {
        console.log(createErrorMessage, editErrorMessage, deleteErrorMessage, errorMessage);
    }, [createErrorMessage, editErrorMessage, deleteErrorMessage, errorMessage]);

    const handleSearchId = (input) => setSearchId(input.target.value);
    const handleShowCreateModal = () => setShowCreateModal(true);
    const handleShowEditModal = (post) => {
        setEditPost(post);
        setShowEditModal(true);
    };
    const handleDeletePost = (id) => dispatch(deletePostAsync(id));
    const handleCreatePost = (newPost) => {
        dispatch(createPostAsync(newPost));
        setShowCreateModal(false);
    };
    const handleEditPost = (editedPost) => {
        dispatch(editPostAsync(editedPost));
        setShowEditModal(false);
    };

    return(
        <Container fluid>
            <Row>
                <h2>Check our posts!</h2>
            </Row>
            <Row className="mt-2">
                <Col className="order-md-2 mb-3">
                    <InputGroup>
                        <InputGroup.Text>#</InputGroup.Text>
                        <FormControl
                            placeholder="Search post by id"
                            aria-label="Search"
                            value={searchId}
                            onChange={handleSearchId}
                        />
                    </InputGroup>
                    <Button variant="success" onClick={() => handleShowCreateModal()} className="mt-2 float-end">Create post</Button>
                </Col>
                <Col md={9} className="order-md-1">
                    {isLoading && <h3>Loading...</h3>}
                    <PostsLayout 
                        posts={posts}
                        onEdit={(post) => handleShowEditModal(post)}
                        onDelete={(id) => handleDeletePost(id)}
                    />
                    
                </Col>
            </Row>

            <CreatePostModal
                show={showCreateModal} 
                onHide={() => setShowCreateModal(false)}
                onSave={(newPost) => handleCreatePost(newPost)}
            />

            <EditPostModal
                post={editPost}
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
                onSave={(editedPost) => handleEditPost(editedPost)}
            />

            <ToastContainer className="pt-5" position="top-end">
                <Toast show={showToast} delay={2000} onClose={() => setShowToast(false)} autohide>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
}

export default Home;