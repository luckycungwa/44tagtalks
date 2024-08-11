import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/cms-api";
import { Button, Divider } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

//   get limited posts
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts({ limit: 9 });
        console.log("Fetched posts:", data); 
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    loadPosts();
  }, []);

  const handleViewBlog = () => {
    navigate("/blog");
  };

  return (
    <div className="py-4 flex-col gap-2 md:px-32 px-5">
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-md flex font-bold justify-between justify-center items-end">
          Recent Posts{" "}
          <span
            className="tracking-wider text-xs text-gray-500 flex gap-1"
            onClick={handleViewBlog}
          >
            View All <FiArrowUpRight size={16} />{" "}
          </span>
        </h1>
        <Divider />
      </div>
      {/* grid card display here */}
      <div className="grid md:grid-cols-3 flex flex-row gap-4 flex-wrap py-4 justify-center items-center">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            imageUrl={post.media[0]?.url || "https://via.placeholder.com/270"}
            title={post.title}
            subtitle={post.body.substring(0, 100) + "..."}
            date={new Date(post.publishDate).toLocaleDateString()}
            category={post.category?.name || "Uncategorized"}
            onClick={() => navigate(`/post/${post.slug.replace(/^\/+/, "")}`)}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button onClick={handleViewBlog} className="px-8">
          View All
        </Button>
      </div>
    </div>
  );
};

export default RecentPosts;
