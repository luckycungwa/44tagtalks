import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/cms-api";
import { Button, Divider, Spinner } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const response = await fetchPosts({ limit: 12 }); // Adjust the limit as needed
        console.log("Fetched recent posts:", response);
        // Check if response.docs exists and is an array
        if (response && Array.isArray(response.docs)) {
          setPosts(response.docs);
        } else {
          console.error("Unexpected response structure:", response);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error loading RECENT posts:", error);
        setPosts([]);
      }
    };

    loadPosts();
  }, []);

  if (!Array.isArray(posts)) {
    if (loading)
      return (
        <div className="w-full h-auto flex flex-col gap-2 justify-center items-center">
          <Spinner color="default" />
          Loading Recent Posts...
        </div>
      );
    return null; // or return a loading indicator
  }

  if (error) return <div>Error: {error}</div>;
  const handleViewBlog = () => {
    navigate("/blog");
  };

  return (
    <div className="py-4 flex-col gap-2 md:px-32 px-5">
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-md flex font-bold justify-between justify-center items-end">
          Recent Posts{" "}
          <span
            className="tracking-wider text-xs text-gray-500 flex gap-1 cursor-pointer"
            onClick={handleViewBlog}
          >
            View All <FiArrowUpRight size={16} />{" "}
          </span>
        </h1>
        <Divider />
      </div>
      {/* grid card display here */}
      <div className="grid md:grid-cols-4 flex flex-row gap-4 flex-wrap py-4 justify-center items-center">
        {posts.length === 0 ? (
          <p>No recent posts available.</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              imageUrl={`${API_URL}${post.media[0].url}`}
              title={post.title}
              subtitle={
                post.body
                  ? post.body.map((paragraph, index) => (
                      <span key={index}>
                        {paragraph.children.map((child) => child.text).join("")}
                      </span>
                    ))
                  : "No content available for this post."
              }
              date={new Date(post.publishDate).toLocaleDateString()}
              category={post.category?.name || "Uncategorized"}
              onClick={() => navigate(`/post/${post.id}`)}
            />
          ))
        )}
      </div>

      <div className="flex justify-center my-4">
        <Button onClick={handleViewBlog} className="px-9">
          View All
        </Button>
      </div>
    </div>
  );
};

export default RecentPosts;
