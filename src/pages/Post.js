import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchPostBySlug } from "../services/cms-api"; // Ensure this is imported
import { Divider, Badge, Spinner } from "@nextui-org/react";
import RichTextRenderer from "../components/RichTextRenderer";
// import CommentSection from "../components/CommentSection";
import SuggestedPosts from "../components/SuggestedPosts";
import FeaturedPosts from "../components/FeaturedPosts";
import Subscription from "../components/Subscription";
import FAQSection from "../components/FAQSection";
import ShareBlog from "../components/ShareBlog";

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const { slug } = useParams(); // Use slug from URL
  const postUrl = "https://yourblog.com/post-slug";
  const location = useLocation();
  const postTitle = { slug };

  const API_URL = process.env.REACT_APP_API_URL;

// Access the image URL from the location state
const imageUrl = location.state?.imageUrl || "https://assets.lummi.ai/assets/QmTCes7Px7tTdhr5QacL7qPEywwB2onrNdM83dFqCCkyuV?auto=format&w=1500";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // console.log("Fetching post with slug:", slug);
        const data = await fetchPostBySlug(slug);
        if (data && data.id) {
          setPost(data);
          // setLikes(data.likes || 0);
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

  if (loading)
    return (
      <div className="w-full h-auto flex flex-col gap-2 justify-center items-center">
        <Spinner color="default" />
      </div>
    );
  if (!post) return <div>Post not found</div>;

  return (
    <div className="flex flex-col w-full gap-8">
      {/* HERO SECTION */}
      <div className="post-hero flex justify-center items-end ">
      {post.media && post.media.length > 0 ? (
          <img
            src={imageUrl} // Use the media URL from the post
            alt={post.media[0].alt || post.title + " background cover"}
            className="w-full object-cover post-hero-img"
          />
        ) : (
          <img
            src="https://assets.lummi.ai/assets/Qmc36vhvzVXLr7c2TvCYmxfm5qTSzUyR8EAfMfF776tDFk?auto=format&w=1500"
            alt={post.title + " post background"}
            className="w-full object-cover post-hero-img"
          />
        )}
        <div className="post-hero-content w-[90%] min-h-[30%] max-h-[40%] md:max-h-[80%] md:max-w-[84%] flex flex-col justify-center items-center px-4 py-6">
          <p className="text-2xl md:text-4xl md:px-16 font-bold text-[#fafafa] text-center py-4 uppercase">
            {post.title}
          </p>
          <Divider />
        </div>
      </div>
      <div className="mt-20 md:grid md:grid-cols-12 flex flex-col text-start md:mt-20 gap-4 md:gap-16 px-4 md:px-32 relative">
        <section
          className="w-auto mb-8 md:mx-4 flex flex-col items-start
         lg:w-full col-span-12 md:col-span-7"
        >
          {/* <p className="text-xl font-bold my-4 text-start">{post.title}</p> */}
          {post.body ? (
            <RichTextRenderer content={post.body} />
          ) : (
            <p>No content available for this post.</p>
          )}
          <div className="w-full flex justify-start flex-col text-start">
            <div className="flex gap-4 items-center my-4 flex-col">
              <div className="w-full justify-center flex-col items-center text-gray-400">
                <p className="flex justify-start items-start text-left text-sm ">
                  Written by: {post.author || "Anonymous"}
                </p>

                <p className="flex justify-start items-start text-left text-sm text-gray-400">
                {new Date(post.publishDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Divider /> <ShareBlog url={postUrl} title={postTitle} />
          </div>
          <Divider />
        </section>
        <section className="w-auto mb-8 md:mx-4 flex flex-col items-center lg:w-full md:col-start-10 md:col-span-5 sticky top-0">
          <div className="sticky-container">
            <SuggestedPosts max={4} />
          </div>
        </section>
      </div>

      {/* <Divider /> */}
      <FeaturedPosts />

      <section className="block-image2 text-white object-cover lg:rounded-xl relative md:px-4">
        <div className="w-full h-full absolute bottom-0 opacity-60 overflow-hidden" />

        <Subscription />
      </section>
      <Divider />
      <section className="flex flex-col gap-4 px-4">
        <FAQSection />
      </section>
    </div>
  );
};

export default Post;
