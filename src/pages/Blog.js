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
import toast, { ToastBar } from "react-hot-toast";
import Warning from "../components/Warning";

const Blog = ({ onFilter }) => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); //filterd category sorting
  const [filteredPosts, setFilteredPosts] = useState([]); // filtered/search results
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts({
          limit: postsPerPage,
          offset: (currentPage - 1) * postsPerPage,
        });
        if (Array.isArray(data.docs)) {
          setPosts(data.docs);
          setFilteredPosts(data.docs); // Set initial filtered posts to all posts
        } else {
          setPosts([]); // Handle unexpected structure
          setFilteredPosts([]); // Handle unexpected structure
        }
      } catch (err) {
        console.error("Error loading posts:", err);
        setError(
          <p className="text-default text-center h-full w-full py-16">
            Network error. Please try again later.
          </p>
        );
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [currentPage, postsPerPage]);

  const handleSearch = (results) => {
    setFilteredPosts(results); // Update filtered posts with search results
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  if (loading)
    return (
      <div className="w-full h-auto flex flex-col gap-2 justify-center items-center">
        <Spinner color="default" />
        Loading All Posts...
      </div>
    );
  if (error) return <p>{error}</p>;

  // const filteredPosts =
  // selectedCategory === "all"
  //   ? posts //return all the posts
  //   : posts.filter((post) => {
  //       // Check if the post's category ID matches the selected category
  //       return post.categories.id === selectedCategory;
  //     });

  // Filter posts based on category
  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setFilteredPosts(posts); // Show all posts if "All" is selected
    } else {
      setFilteredPosts(
        posts.filter((post) => post.categories.id === categoryId)
      ); // Filter by selected category
    }
  };

  return (
    <div className="flex flex-col gap-2 md:px-32 lg:px-48">
      <ScrollToTop />
      {/* failed to load posts warning || server is down/offline */}
      <Warning error={error} />
      <div className="flex flex-col gap-2 justify-center items-center ">
        <div className="flex flex-col gap-2 justify-center items-center my-8">
          <p className="text-2xl text-center font-bold uppercase mt-4">
            Discover the latest posts
          </p>
          <p className=" text-center text-gray-500 w-5/6">
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
        {filteredPosts.map((post) => (
          <PostCard
            key={`${post.id}-${post.slug}`} // Use a unique combination of id and slug
            imageUrl={`${API_URL}${post.media[0].url}`}
            title={post.title}
            subtitle={post.body.map((paragraph) => (
              <span key={paragraph.id}>
                {paragraph.children.map((child) => child.text).join("")}
              </span>
            ))}
            date={new Date(post.publishDate).toLocaleDateString()}
            category={post.categories.name || "Uncategorized"}
            // onClick={() => navigate(`/post/${post.id}`)}
            onClick={() =>
              navigate(`/post/${post.id}`, {
                state: { imageUrl: `${API_URL}${post.media[0].url}` },
              })
            }
          />
        ))}
      </div>
      <div className="flex justify-center my-12">
        <Pagination
          total={Math.ceil(filteredPosts.length / postsPerPage)}
          onChange={paginate}
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
