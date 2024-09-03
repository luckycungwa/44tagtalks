import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostBySlug } from "../services/cms-api"; // Ensure this is imported
import { Divider, Badge } from "@nextui-org/react";
import RichTextRenderer from "../components/RichTextRenderer";
import CommentSection from "../components/CommentSection";
import SuggestedPosts from "../components/SuggestedPosts";
import FeaturedPosts from "../components/FeaturedPosts";
import Subscription from "../components/Subscription";
import FAQSection from "../components/FAQSection";

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const { slug } = useParams(); // Use slug from URL

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log("Fetching post with slug:", slug);
        const data = await fetchPostBySlug(slug);
        console.log("Full post data:", data);
        console.log("Media data:", data.media);
        if (data && data.id) {
          setPost(data);
          setLikes(data.likes || 0);
        } else {
          console.error("Post not found:", data);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);
  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="flex flex-col w-full gap-8">
      {/* HERO SECTION */}
      <div className="post-hero flex justify-center items-end ">
        {post.media && post.media.length > 0 && post.media[0].url ? (
          <img
            src={
              `${API_URL}${post.media[0].url}` ||
              "https://assets.lummi.ai/assets/Qme2XFr9GsrJFzsKaHDQxgmXDK57HCJEvt3PuW4YJs9aKT?auto=format&w=1500"
            }
            alt={post.media[0].alt || post.title + " background cover"}
            className="w-full object-cover post-hero-img text-white"
          />
        ) : (
          <img
            src={
              `${API_URL}${post.media[0].url}` ||
              "https://assets.lummi.ai/assets/Qme2XFr9GsrJFzsKaHDQxgmXDK57HCJEvt3PuW4YJs9aKT?auto=format&w=1500"
            }
            alt={post.media[0].alt || post.title + " background cover"}
            className="w-full object-cover post-hero-img"
          />
        )}
        <div className="post-hero-content w-[90%] min-h-[30%] max-h-[40%] md:max-h-[80%] md:max-w-[84%] flex flex-col justify-center items-center px-4 py-6">
          <p className="text-2xl md:text-4xl font-bold text-white text-center py-4">
            {post.title}
          </p>
          <Divider />
        </div>
      </div>
      <div className="mt-20 md:grid md:grid-cols-12 flex flex-col text-start md:mt-20 gap-4 md:gap-16 px-4 md:px-32">
        <section className="w-auto mb-8 md:mx-4 flex flex-col items-center lg:w-full col-span-12 md:col-span-7">
          <p className="text-xl font-bold my-4">{post.title}</p>
          {post.body ? (
            <RichTextRenderer content={post.body} />
          ) : (
            <p>No content available for this post.</p>
          )}
          {/* <div className="w-full flex justify-between items-center mt-8 ">
            <p>Written by: {post.author || "Anonymous"}</p>
            <div className="flex gap-4 items-center my-4">
              <Badge color="secondary" content={likes}>
               <LikeButton postId={post.id} />
              </Badge>
              <Badge color="secondary" content={post.comments.length}>
                <CommentSection postId={post.id} />
              </Badge>
            </div>
          </div> */}
          <Divider />{" "}
          <p className="text-sm text-center text-gray-500 py-8">
            Comment and like functions comming soon{" "}
          </p>
          <Divider />
          {/* <CommentSection postId={post.id} /> */}
        </section>
        <section className="w-auto mb-8 md:mx-4 flex flex-col items-center lg:w-full md:col-start-10 md:col-span-3">
          <SuggestedPosts />
        </section>
      </div>

      <Divider />
      <FeaturedPosts />
      <Divider />
      <Subscription />
      <Divider />
      <FAQSection />
    </div>
  );
};

export default Post;
