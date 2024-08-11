import React, { useEffect, useState } from "react";
import FeaturePostCard from "./FeaturePostCard";
import { fetchPosts } from "../services/cms-api";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Divider } from "@nextui-org/react";
import PostCard from "./PostCard";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts({limit : 4, where : "featured = true"});
        console.log("Fetched posts:", data);
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    loadPosts();
  }, []);

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
            className="tracking-wider text-xs text-gray-500 flex gap-1"
            onClick={handleViewMore}
          >
            View All <FiArrowUpRight size={16} />{" "}
          </span>
        </h1>
        <Divider />
      </div>
      {/* grid card display here */}
      <div className="grid md:grid-cols-2 sm:grid-cols-2 flex flex-row gap-4 flex-wrap py-4 justify-center items-start">
       {posts.map((post) => (
         <FeaturePostCard
         key={post.id}
         id={post.id}
         imageUrl={post.media[0]?.url || "https://via.placeholder.com/270"}
         title={post.title}
         date={new Date(post.publishDate).toLocaleDateString()}
         category={post.categories?.name || "Uncategorized"}
         onClick={() => navigate(`/post/${post.slug.replace(/^\/+/, '')}`)}
       />
       ))}
      </div>
    </div>
   </>
  );
};

export default FeaturedPosts;
