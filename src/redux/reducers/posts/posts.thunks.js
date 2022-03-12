import PostsService from "../../../services/posts.service";
import actions from "./posts.actions";

export const loadAllPostsAsync = () => (dispatch) => {
    dispatch(actions.postsLoadStart());

    PostsService.getAllPosts()
        .then((response) => dispatch(actions.postsLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.postsLoadError(error.message)));
};

export const loadBoundedPostsAsync = (start, limit) => (dispatch) => {
    dispatch(actions.postsLoadStart());

    PostsService.getBoundedPosts(start, limit)
        .then((response) => dispatch(actions.postsLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.postsLoadError(error.message)));
};

export const loadSinglePostAsync = (id) => (dispatch) => {
    if(!id) {
        return [];
    }

    dispatch(actions.postLoadStart());

    PostsService.getPostById(id)
        .then((response) => dispatch(actions.postLoadSuccess([response.data])))
        .catch((error) => dispatch(actions.postLoadError(error.message)));
};

export const createPostAsync = (data) => (dispatch) => {
    dispatch(actions.postCreateStart());

    PostsService.createPost(data)
        .then((response) => dispatch(actions.postCreateSuccess("Post created succesfully.")))
        .catch((error) => dispatch(actions.postCreateError(error.message)));
};

export const editPostAsync = (data) => (dispatch) => {
    dispatch(actions.postEditStart());

    PostsService.editPost(data)
        .then((response) => dispatch(actions.postEditSuccess("Post edited successfully.")))
        .catch((error) => dispatch(actions.postEditError(error.message)));
};

export const deletePostAsync = (id) => (dispatch) => {
    dispatch(actions.postEditStart());

    PostsService.deletePost(id)
        .then((response) => dispatch(actions.postDeleteSuccess("Post deleted succesfully.")))
        .catch((error) => dispatch(actions.postDeleteError(error.message)));
};

export const postClearResponsesAsync = () => (dispatch) => {
    dispatch(actions.postClearResponses());
}

