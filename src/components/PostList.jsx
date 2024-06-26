import Post from './Post';

function PostList() {
    return(
    <ul>
        <Post body="mean tweet" author="everyone" />
        <Post body="happy tweet" author="noone" />
    </ul>
    );
}

export default PostList;