import Post from './Post';
import classes from './PostList.module.css';

function PostList() {
    return(
    <ul className={classes.posts}>
        <Post body="mean tweet" author="everyone" />
        <Post body="happy tweet" author="noone" />
    </ul>
    );
}

export default PostList;