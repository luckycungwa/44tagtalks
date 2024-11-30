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
  const [posts, setPosts] = useState([]); // Original posts
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState([]); // Filtered posts
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [totalPages, setTotalPages] = useState(1); // Total pages for pagination
  const postsPerPage = 16; // Number of posts per page
  const navigate = useNavigate();

  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://four4tagtalks-server.onrender.com/api";

  // Fetch posts from API
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts({
          page: currentPage,
          limit: postsPerPage,
        });
        setPosts(data.docs);
        setFilteredPosts(data.docs); // Ensure filtered posts are updated with fetched posts
        setTotalPages(data.totalPages); // Adjust total pages based on API response
      } catch (error) {
        console.error("Error loading posts:", error);
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage]); // Trigger useEffect on currentPage change

  // Handle search results
  const handleSearch = (results) => {
    setFilteredPosts(results); // Update filtered posts with search results
    setCurrentPage(1); // Reset to the first page after search
  };

  // Handle category filtering
  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setFilteredPosts(posts); // Show all posts if "All" is selected
    } else {
      setFilteredPosts(
        posts.filter((post) => post.categories.id === categoryId)
      );
    }
    setCurrentPage(1); // Reset to first page after filter
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-auto flex flex-col gap-2 justify-center items-center text-center">
          <Spinner color="default"/>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-col gap-2 md:px-32 lg:px-48">
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

          {/* Search and Filter */}
          <div className="flex flex-row gap-4 flex-wrap justify-between lg:flex-row-reverse items-end px-4 py-8 gap-8">
            <Searchbar onSearch={handleSearch} />
            <CategoryFilter onFilter={handleCategoryFilter} />
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {filteredPosts.map((post) => (
              <PostCard
                key={`${post.id}-${post.slug}`}
                id={post.id}
                slug={post.slug}
                imageUrl={
                  post.media && post.media[0]
                    ? `${API_URL}${post.media[0].url}`
                    : "/default-image.jpg"
                }
                title={post.title}
                subtitle={
                  post.body && post.body.length
                    ? post.body.map((paragraph) => (
                        <span key={paragraph.id}>
                          {paragraph.children
                            ? paragraph.children
                                .map((child) => child.text)
                                .join("")
                            : ""}
                        </span>
                      ))
                    : "No content available"
                }
                date={new Date(post.publishDate).toLocaleDateString()}
                category={
                  post.categories && post.categories.name
                    ? post.categories.name
                    : "Uncategorized"
                }
                onClick={() =>
                  navigate(`/post/${post.id}${post.slug}`, {
                    state: { imageUrl: `${API_URL}${post.media[0].url}` },
                  })
                }
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center my-12">
            <Pagination
              total={totalPages} // Total pages from API
              initialPage={1}
              page={currentPage}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>

          {/* Subscription Section */}
          <section className="block-image2 text-white object-cover md:rounded-xl relative ">
            <div className="w-full h-full absolute bottom-0 opacity-60 overflow-hidden" />
            <Subscription />
          </section>

          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default Blog;
