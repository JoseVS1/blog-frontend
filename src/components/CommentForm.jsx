import { useState } from "react";

export const CommentForm = ({postId, setComments}) => {
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/posts/${postId}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    text
                })
            })

            const result = await response.json();

            setComments(prevComments => [...prevComments, result.comment]);
            setText("");
        } catch (err) {
            console.error(err);
        }

    }
  return (
    <>
        <h2 className="comment-heading">Comments</h2>

        <form className="create-comment-form" onSubmit={handleSubmit}>
            <textarea name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button type="submit">Comment</button>
        </form>
    </>
  )
}
