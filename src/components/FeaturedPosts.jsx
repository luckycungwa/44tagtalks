import React, { useEffect, useState } from "react";
import FeaturePostCard from "./FeaturePostCard";
import { fetchPosts } from "../services/cms-api";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Divider } from "@nextui-org/react";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const response = await fetchPosts({ limit: 6 }); // Adjust
        console.log("Fetched featured posts:", response);
        // Check if response.docs exists and is an array
        if (response && Array.isArray(response.docs)) {
          setPosts(response.docs);
        } else {
          console.error("Unexpected response structure:", response);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error loading posts:", error);
        setPosts([]);
      }
    };

    loadPosts();
  }, []);

  // Render the component only if posts is an array
  if (!Array.isArray(posts)) {
    return null; // or return a loading indicator
  }

  const handleViewMore = () => {
    navigate("/blog");
  };

  return (
    <>
      <div className="py-4 flex-col gap-2 md:px-32 px-5">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-md flex font-bold justify-between justify-center items-end">
            Featured Posts{" "}
            <span
              className="tracking-wider text-xs text-gray-500 flex gap-1 cursor-pointer"
              onClick={handleViewMore}
            >
              View All <FiArrowUpRight size={16} />{" "}
            </span>
          </h1>
          <Divider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 flex flex-row gap-4 flex-wrap py-4 justify-center items-start">
          {posts.length === 0 ? (
            <p>No featured posts available.</p>
          ) : (
            posts.map((post) => (
              <FeaturePostCard
                key={post.id}
                imageUrl={`${API_URL}${post.media[0].url}`}
                title={post.title}
                date={new Date(post.publishDate).toLocaleDateString()}
                category={post.categories?.name || "Uncategorized"}
                // onClick={() => navigate(`/post/${post.id}`)}
                onClick={() =>
                  navigate(`/post/${post.id}`, {
                    state: { imageUrl: `${API_URL}${post.media[0].url}` },
                  })
                }
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
