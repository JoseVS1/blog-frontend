import { useContext, useEffect, useState } from "react"
import { Link } from "react-router";
import UserContext from "../context/UserContext";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        const data = await response.json();
  
        setPosts(data.posts.filter(post => post.published));
      } catch (err) {
        console.error(err);
      }
    }

    getPosts();
  }, [])
  
  return (
    <div>
        <h1>Blog</h1>

        {user && (
          <h2>Welcome, {user.username}</h2>
        )}

        <ul>
          {posts.map(post => (
            <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
          ))}
        </ul>
    </div>
  )
}
