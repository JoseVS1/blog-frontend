import { useContext, useEffect, useState } from "react"
import { Link } from "react-router";
import UserContext from "../context/UserContext";
import parse from "html-react-parser"

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
    <div className="home-page">
        <div className="header-container">
          <h1>ObsidianPost</h1>
        </div>

        {user && (
          <h2>Welcome, <span className="username">{user.username}</span></h2>
        )}

        {posts && posts.length > 0 ? (
            <ul className="post-list">
              {posts.map(post => (
                <li key={post.id}>
                  <Link className="post" to={`/posts/${post.id}`}>
                    <div>
                      <h2>{post.title}</h2>
                      {parse(post.content)}
                    </div>
                  </Link>
                  </li>
              ))}
            </ul>
        ) : (
          <div className="empty-container">
            <h1>There are no posts...</h1>
          </div>
        )}
        
    </div>
  )
}
