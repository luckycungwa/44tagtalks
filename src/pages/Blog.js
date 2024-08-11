import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/cms-api";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";
import { Divider, Pagination } from "@nextui-org/react";
import Searchbar from "../components/Searchbar";
import CategoryFilter from "../components/CategoryFilter";
import Subscription from "../components/Subscription";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // pagination stuff
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts({
          limit: postsPerPage,
          offset: (currentPage - 1) * postsPerPage,
        });
        console.log(data); // Log the data to check its structure
        // setPosts(Array.isArray(data) ? data : []); // if posts is an aarray
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load posts");
        setPosts([]); // Set posts to an empty array on error
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage, postsPerPage]);

  // pagination stuff
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // feedback
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center ">
        <div className="flex flex-col gap-2 justify-center items-center my-8">
          <p className="text-2xl text-center font-bold uppercase mt-4">
            Discover the latest posts
          </p>{" "}
          <p className=" text-center text-gray-500 w-5/6">
            Where Conversations Start and Ideas Take Flight{" "}
          </p>
        </div>

        <Divider />
      </div>
      {/* grid card display here */}
      <div className="flex flex-row gap-4 flex-wrap justify-between lg:flex-row-reverse items-center items-center px-8 py-12">
        <Searchbar />
        <CategoryFilter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
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
              onClick={() => navigate(`/post/${post.slug.replace(/^\/+/, "")}`)}
            />
          ))
        )}
      </div>
      <div className="flex justify-center my-12">
        <Pagination
          total={Math.ceil(posts.length / postsPerPage)}
          onChange={paginate}
        />
      </div>
      <Subscription />
    </div>
  );
};

export default Blog;
