import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/cms-api";
import HeroSection from "../components/HeroSection";
import Subscription from "../components/Subscription";
import FeaturedPosts from "../components/FeaturedPosts";
import RecentPosts from "../components/RecentPosts";
import SuggestedPosts from "../components/SuggestedPosts";
import { Divider } from "@nextui-org/react";
import FAQSection from "../components/FAQSection";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log("Fetched posts:", data); // Add this
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <header>
        <HeroSection />
      </header>
      <main>
        <div className="py-8">
          <FeaturedPosts posts={posts} />
          <RecentPosts />
          <SuggestedPosts />
          <div className="flex flex-col gap-4">
            <Divider />
            <Subscription />
            {/* set div with image background */}
            <div className="md:block hidden block-image br-8">
              <FAQSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
