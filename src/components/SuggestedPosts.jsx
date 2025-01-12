import React, { useState, useEffect } from "react";
import { Divider, Spinner } from "@nextui-org/react";
import { fetchPosts } from "../services/cms-api";
import { useNavigate } from "react-router-dom";
import PostCardLite from "./PostCardLite";

const SuggestedPosts = ({ max }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "https://four4tagtalks-server.onrender.com/api";

  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetchPosts({ limit: max }); // Adjust the limit as needed
        console.log("Fetched suggested posts:", response);
        // Check if response.docs exists and is an array
        if (response && Array.isArray(response.docs)) {
          setPosts(response.docs);
        } else {
          console.error("Unexpected response structure:", response);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error loading suggested posts:", error);
        setPosts([]);
      }
    };

    loadPosts();
  }, []);

  // Render the component only if posts is an array
  if (!Array.isArray(posts)) {
    if (loading)
      return (
        <div className="w-full h-auto flex flex-col gap-2 justify-center items-center text-center">
          <Spinner color="default" />
          Loading Suggested Posts...
        </div>
      );

    return null; // or return a loading indicator
  }
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-4 flex-col gap-2 px-4 w-full">
      <div className="flex flex-col gap-2 justify-center mb-4 ">
        <h1 className=" flex font-bold justify-between justify-center items-end">
          Suggested Posts{" "}
        </h1>
        <Divider />
      </div>
      {/* grid card display here */}
      <div className="w-full flex gap-8 flex-wrap py-4 justify-around items-start">
      {posts.length === 0 ? (
          <p>No suggested posts available.</p>
        ) : (posts.map((post) => (
          <PostCardLite
            key={post.id}
            id={post.id}
            slug={post.slug}
            imageUrl={`${API_URL}${post.media[0].url}`}
            title={post.title}
            date={new Date(post.publishDate).toLocaleDateString()}
            category={post.categories?.name || "Uncategorized"}
            // onClick={() => navigate(`/post${post.slug}`)}
            onClick={() => navigate(`/post/${post.id}/${post.slug}`, { state: { imageUrl: `${API_URL}${post.media[0].url}` } })}
          />
        ))
        )}
        
      </div>
    </div>
  );
};

export default SuggestedPosts;
