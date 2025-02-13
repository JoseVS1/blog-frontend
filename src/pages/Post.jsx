import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { CommentForm } from "../components/CommentForm";
import { Comments } from "../components/Comments";
import UserContext from "../context/UserContext";
import parse from "html-react-parser"

export const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [postUser, setPostUser] = useState("");
    const [comments, setComments] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/posts/${id}`);
                const data = await response.json();

                setPost(data.post);
            } catch (err) {
                console.error(err);
            }
        }

        getPost();
    }, [id]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/users/${post.userId}`);
                const data = await response.json();

                setPostUser(data.user);
            } catch (err) {
                console.error(err);
            }
        }

        if (post) {
            getUser();
        }
    }, [post]);

    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/posts/${id}/comments`);
                const data = await response.json();

                setComments(data.comments);
            } catch (err) {
                console.error(err);
            }
        }

        getComments();
    }, [id]);

  return (
    <div>
        {post ? (
            <>
                <h1>{post.title}</h1>
                <h2>By: {postUser.username}</h2>
                <h3>Created at: {post.createdAt}</h3>

                {parse(post.content)}

                {user ? <CommentForm postId={post.id} setComments={setComments} /> : (
                    <h2>Log in to create a comment.</h2>
                )}

                {comments && comments.length > 0 ? <Comments comments={comments} setComments={setComments} /> : <h1>There are no comments</h1> }
            </>
        ) : (
            <p>Loading post...</p>
        )}
    </div>
  )
}
