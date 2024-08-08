import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/cms-api";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]); // Ensure initial state is an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log(data); // Log the data to check its structure
        setPosts(Array.isArray(data) ? data : []); // Ensure posts is an array
      } catch (err) {
        setError("Failed to load posts");
        setPosts([]); // Set posts to an empty array on error
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              imageUrl={post.media[0]?.url || "https://via.placeholder.com/270"}
              title={post.title}
              subtitle={post.subtitle || "No subtitle available"}
              date={new Date(post.publishDate).toLocaleDateString()}
              category={post.categories?.name || "Uncategorized"}
              onClick={() => navigate(`/post/${post.slug.replace(/^\/+/, '')}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
