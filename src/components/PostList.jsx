import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from 'react-router-dom';

function PostList() {
    const posts = useLoaderData();

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>)}
            {posts.length === 0 && (<div style={{ textAlign: 'center', color: 'white' }}>
                <h2>There are not posts yet</h2>
                <p>start adding some</p>
            </div>)}
        </>
    );
}

export default PostList;
