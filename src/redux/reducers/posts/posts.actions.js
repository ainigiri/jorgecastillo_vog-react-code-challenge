import actionTypes from './posts.actionTypes';

// Load multiple posts
const postsLoadStart = () => ({
    type: actionTypes.POSTS_LOAD_START
});

const postsLoadSuccess = (posts) => ({
    type: actionTypes.POSTS_LOAD_SUCCESS,
    payload: posts,
});

const postLoadError = (errorMessage) => ({
    type: actionTypes.POSTS_LOAD_ERROR,
    payload: errorMessage,
});

// Load single post
const postLoadStart = () => ({
    type: actionTypes.POSTS_LOAD_START
});

const postLoadSuccess = (post) => ({
    type: actionTypes.POSTS_LOAD_SUCCESS,
    payload: post,
});

const postsLoadError = (errorMessage) => ({
    type: actionTypes.POSTS_LOAD_ERROR,
    payload: errorMessage,
});

// Create post
const postCreateStart = () => ({
    type: actionTypes.POST_CREATE_START
});

const postCreateSuccess = (response) => ({
    type: actionTypes.POST_CREATE_SUCCESS,
    payload: response
});

const postCreateError = (errorMessage) => ({
    type: actionTypes.POST_CREATE_ERROR,
    payload: errorMessage
});

// Edit post
const postEditStart = () => ({
    type: actionTypes.POST_EDIT_START
});

const postEditSuccess = (response) => ({
    type: actionTypes.POST_EDIT_SUCCESS,
    payload: response
});

const postEditError = (errorMessage) => ({
    type: actionTypes.POST_EDIT_ERROR,
    payload: errorMessage
});

// Delete post
const postDeleteStart = () => ({
    type: actionTypes.POST_DELETE_START
});

const postDeleteSuccess = (response) => ({
    type: actionTypes.POST_DELETE_SUCCESS,
    payload: response
});

const postDeleteError = (errorMessage) => ({
    type: actionTypes.POST_DELETE_ERROR,
    payload: errorMessage,
});


// Clear response messages for notifications
const postClearResponses = () => ({
    type: actionTypes.POST_CLEAR_RESPONSES,
})

export default {
    // Multiple load
    postsLoadStart,
    postsLoadSuccess,
    postsLoadError,
    // Single load
    postLoadStart,
    postLoadSuccess,
    postLoadError,
    // Create
    postCreateStart,
    postCreateSuccess,
    postCreateError,
    // Edit
    postEditStart,
    postEditSuccess,
    postEditError,
    // Delete
    postDeleteStart,
    postDeleteSuccess,
    postDeleteError,
    // Clear responses
    postClearResponses,
};