import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PostLarge from "../Post/PostLarge";
import PostSmall from "../Post/PostSmall";

const PostsLayout = (props) => {
    const [posts, setPosts] = useState(props.posts);

    // Update the posts on property change
    useEffect(() => {
        setPosts(props.posts);
    }, [props.posts]);

    const setPostsLayout = () => {
        return posts.map((post, idx) => {
            if(idx === 0) {
                return (
                    <Col xs={12} key={post.id} className="mb-2" style={{paddingRight: 0}}>
                        <PostLarge 
                            post={post} 
                            image={"https://www.leadershipmartialartsct.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} 
                            onEdit={() => props.onEdit(post)}
                            onDelete={() => props.onDelete(post.id)} 
                        />
                    </Col>
                );
            } else {
                return (
                    <Col xl={3} lg={4} sm={6} key={post.id} className="mb-2" style={{paddingRight: 0}}>
                        <PostSmall 
                            post={post} 
                            image={"https://www.leadershipmartialartsct.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} 
                            onEdit={() => props.onEdit(post)}
                            onDelete={() => props.onDelete(post.id)} 
                        />
                    </Col>
                );
            }
        });
    };

    return (
        <Row>
            {!posts && <h3>We couldn't find any post</h3>}
            {posts && setPostsLayout()}
        </Row>
    );
};

export default PostsLayout;