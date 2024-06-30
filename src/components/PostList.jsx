import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler}
                    onCancel={onStopPosting}
                />
            </Modal>)}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="noone" body="happy tweet" />
            </ul>
        </>
    );
}

export default PostList;
