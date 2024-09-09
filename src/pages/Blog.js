import React, { useEffect, useState } from "react";
import {
  fetchPosts,
  fetchMediaById,
  fetchPostBySlug,
  fetchPostsByCategory,
} from "../services/cms-api";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";
import { Divider, Pagination, Spinner } from "@nextui-org/react";
import Searchbar from "../components/Searchbar";
import CategoryFilter from "../components/CategoryFilter";
import Subscription from "../components/Subscription";
import ScrollToTop from "../components/ScrollToTop";
import Warning from "../components/Warning";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); // filtered/search results
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16); // Set to 10 as per your requirement
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts();
        if (Array.isArray(data.docs)) {
          setPosts(data.docs);
          setFilteredPosts(data.docs); // Set initial filtered posts to all posts
        } else {
          setPosts([]);
          setFilteredPosts([]);
        }
      } catch (err) {
        console.error("Error loading posts:", err);
        setError("Network error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const handleSearch = (results) => {
    setFilteredPosts(results); // Update filtered posts with search results
    setCurrentPage(1); // Reset to first page
  };

  const handleCategoryFilter = (categoryId) => {
    if (categoryId === "all") {
      setFilteredPosts(posts); // Show all posts if "All" is selected
    } else {
      setFilteredPosts(posts.filter((post) => post.categories.id === categoryId));
    }
    setCurrentPage(1); // Reset to first page
  };

  // Calculate current posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="flex flex-col gap-2 md:px-32 lg:px-48">
      {loading && <Spinner color="default" />}
      {error && <p>{error}</p>}
      <ScrollToTop />
      <Warning error={error} />
      <div className="flex flex-col gap-2 justify-center items-center ">
        <div className="flex flex-col gap-2 justify-center items-center my-8">
          <p className="text-2xl text-center font-bold uppercase mt-4">
            Discover the latest posts
          </p>
          <p className="text-center text-gray-500 w-5/6">
            Where Conversations Start and Ideas Take Flight
          </p>
        </div>
        <Divider />
      </div>
      <div className="flex flex-row gap-4 flex-wrap justify-between lg:flex-row-reverse items-end px-4 py-8 gap-8">
        <Searchbar onSearch={handleSearch} />
        <CategoryFilter onFilter={handleCategoryFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {currentPosts.map((post) => (
          <PostCard
            key={`${post.id}-${post.slug}`}
            id={post.id}
            slug={post.slug}
            imageUrl={`${API_URL}${post.media[0].url}`}
            title={post.title}
            subtitle={post.body.map((paragraph) => (
              <span key={paragraph.id}>
                {paragraph.children.map((child) => child.text).join("")}
              </span>
            ))}
            date={new Date(post.publishDate).toLocaleDateString()}
            category={post.categories.name || "Uncategorized"}
            onClick={() => navigate(`/post/${post.id}${post.slug}`, {
              state: { imageUrl: `${API_URL}${post.media[0].url}` },
            })}
          />
        ))}
      </div>
      <div className="flex justify-center my-12">
        <Pagination
          total={totalPages}
          onChange={setCurrentPage}
          initialPage={currentPage}
        />
      </div>

      <section className="block-image2 text-white object-cover md:rounded-xl relative ">
        <div className="w-full h-full absolute bottom-0 opacity-60 overflow-hidden" />
        <Subscription />
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Blog;