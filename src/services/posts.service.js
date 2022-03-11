import apiClientPlaceholder from "../helper/apiClientPlaceholder";

class PostsService {
    getAllPosts = () => apiClientPlaceholder().get("posts");
    getBoundedPosts = (start, limit) => apiClientPlaceholder().get("posts?_start="+start+"&_limit="+limit);
    getPostById = (id) => apiClientPlaceholder().get("posts/"+id);
    createPost = (data) => apiClientPlaceholder().post("posts", data);
    editPost = (data) => apiClientPlaceholder().put("posts/"+data.id, data);
    deletePost = (id) => apiClientPlaceholder().delete("posts/"+id);
}

export default new PostsService();