import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostById, fetchPostBySlug } from "../services/cms-api";
import { useAuth } from "../context/AuthContext";
import { getComments, likePost } from "../services/interactionService";
import { Divider, Button, Badge } from "@nextui-org/react";
import { FiHeart, FiShare } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FeaturedPosts from "../components/FeaturedPosts";
import SuggestedPosts from "../components/SuggestedPosts";
import CommentSection from "../components/CommentSection";
import RichTextRenderer from "../components/RichTextRenderer";

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const { slug } = useParams(); // Only use slug here

  const { getCurrentUser } = useAuth();
  const navigate = useNavigate();

  const notify = () =>
    toast.warning(<p className="text-sm">Please login to save this post</p>);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await fetchPostBySlug(slug);
        console.log("Fetched post data:", data); // Log the fetched data
        if (data) {
          setPost(data);
          setLikes(data.likes || 0);
        } else {
          toast.error("Post not found.");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        toast.error("Failed to load the post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const data = await getComments(post.id); // Ensure post.id is available
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchPost();
    fetchCurrentUser();
  }, [slug]);

  const handleLike = async () => {
    if (!user) {
      notify();
      return;
    }

    try {
      await likePost(post.id); // Ensure post.id is used
      setLikes(likes + 1);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.briefDescription,
          url: window.location.href,
        })
        .then(() => console.log("Post shared successfully"))
        .catch((error) => console.error("Error sharing post:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <div className="w-full">
        <div className="post-hero flex justify-center items-end ">
          {post.media.length > 0 && (
            <img
              src={`http://localhost:3000/api/media/${post.media[0]}`}
              alt={post.image?.alt || "Post Image"}
              className="w-full object-cover post-hero-img"
            />
          )}
          <div className="post-hero-content flex flex-col justify-center items-center">
            <p className="text-3xl font-bold text-white text-center">
              {post.title}
            </p>
            <Divider />
          </div>
        </div>

        <div className="md:grid md:grid-cols-12 flex flex-col text-start mt-16 px-5 lg:px-16 justify-between flex-col gap-16">
          <ToastContainer
            stacked
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            limit={3}
            transition={Slide}
          />
          <div className="w-auto mb-8 flex flex-col w-1/2 lg:w-full col-span-12 md:col-span-8">
            <p className="text-xl font-bold my-4">{post.title}</p>
            {post.body ? (
              <RichTextRenderer content={post.body} />
            ) : (
              <p>No content available for this post.</p>
            )}

            <div className="flex justify-between items-center mt-8">
              <p>Written by: {post.author || "Anonymous"}</p>
              
              <div className="flex gap-4 items-center my-4">
                <Badge color="secondary" content={likes}>
                  <Button
                    size="sm"
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="Likes"
                    onClick={handleLike}
                  >
                    <FiHeart size={16} />
                  </Button>
                </Badge>

                <Badge color="secondary" content={comments.length}>
                  <Button
                    size="sm"
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="comments"
                  >
                    <BsChat size={16} />
                  </Button>
                </Badge>

                <Button
                  size="sm"
                  isIconOnly
                  color="default"
                  variant="faded"
                  aria-label="share post"
                  onClick={handleShare}
                >
                  <FiShare size={16} />
                </Button>
              </div>
            </div>

            <Divider />
            <CommentSection
              user={user}
              comments={comments}
              setComments={setComments}
            />
          </div>

          <div className="mb-8 w-auto flex flex-col col-span-12 lg:col-span-4">
            <SuggestedPosts />
            <Divider />
          </div>
        </div>
        <FeaturedPosts />
      </div>
    </>
  );
};

export default Post;
