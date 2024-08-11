import React, { useState, useEffect } from "react";
import { Divider } from "@nextui-org/react";
import { fetchPosts } from "../services/cms-api";
import { useNavigate } from "react-router-dom";
import PostCardLite from "./PostCardLite";

const SuggestedPosts = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

//  fetch limited posts
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts({ limit: 4 });
        console.log("Fetched posts:", data);
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="py-4 flex-row gap-2 px-5 md:px-32">
      <div className="flex flex-col gap-2 justify-center mb-4 ">
        <h1 className=" flex font-bold justify-between justify-center items-end">
          Suggested Posts{" "}
        </h1>
        <Divider />
      </div>
      {/* grid card display here */}
      <div className="  flex flex-row gap-2 flex-wrap py-4 justify-start items-start">
      {posts.map((post) => (
          <PostCardLite />
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
