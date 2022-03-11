import actionTypes from "./posts.actionTypes";
import initialStates from "./posts.initialStates";

const postsReducer = (state = initialStates, {type, payload}) => {
    switch(type) {
        case actionTypes.POSTS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                posts: [],
                errorMessage: null,
            };

        case actionTypes.POSTS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: payload,
            };

        case actionTypes.POSTS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };

        case actionTypes.POST_LOAD_START:
            return {
                ...state,
                isLoading: true,
                posts: [],
                errorMessage: null,
            };

        case actionTypes.POST_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: payload,
                errorMessage: null,
            };

        case actionTypes.POST_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };

        case actionTypes.POST_CREATE_START:
            return {
                ...state,
                isLoadingCreate: true,
                createResponse: null,
                createErrorMessage: null,
            };

        case actionTypes.POST_CREATE_SUCCESS:
            return {
                ...state,
                isLoadingCreate: false,
                createResponse: payload,
            };

        case actionTypes.POST_CREATE_ERROR:
            return {
                ...state,
                isLoadingCreate: false,
                createErrorMessage: payload,
            };

        case actionTypes.POST_EDIT_START:
            return {
                ...state,
                isLoadingEdit: true,
                editResponse: null,
                editErrorMessage: null,
            };

        case actionTypes.POST_EDIT_SUCCESS:
            return {
                ...state,
                isLoadingEdit: false,
                editResponse: payload,
            };

        case actionTypes.POST_EDIT_ERROR:
            return {
                ...state,
                isLoadingEdit: false,
                editErrorMessage: payload,
            };

        case actionTypes.POST_DELETE_START:
            return {
                ...state,
                isLoadingDelete: true,
                deleteResponse: null,
                deleteErrorMessage: null,
            };

        case actionTypes.POST_DELETE_SUCCESS:
            return {
                ...state,
                isLoadingDelete: false,
                deleteResponse: payload,
            };

        case actionTypes.POST_DELETE_ERROR:
            return {
                ...state,
                isLoadingDelete: false,
                deleteErrorMessage: payload,
            };

        case actionTypes.POST_CLEAR_RESPONSES:
            return {
                ...state,
                createResponse: null,
                editResponse: null,
                deleteResponse: null,
            };

        default:
            return state;
    }
};

export default postsReducer;