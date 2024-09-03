import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/cms-api";
import HeroSection from "../components/HeroSection";
import Subscription from "../components/Subscription";
import FeaturedPosts from "../components/FeaturedPosts";
import RecentPosts from "../components/RecentPosts";
import SuggestedPosts from "../components/SuggestedPosts";
import { Divider, Spinner } from "@nextui-org/react";
import FAQ from "../components/FAQ";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubscription = () => {
    setIsLoading(true);
    console.log("I'm interested in services");
    // Simulate a delay before redirecting
    setTimeout(() => {
      window.location.href = "https://vev.co/44tagstudios-za";
    }, 1000); // Adjustdelay as needed

    setIsLoading(false);
  };

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


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
      <HeroSection
          title={
            <p>
              44Tag Talks
              <span className="text-[#ff4b14] hover:opacity-0">.</span>
            </p>
          }
          description="A 44tag studios blog dedicated to bringing the relevant modern content to you. Join us on our journey as we continue to build and grow."
          buttonText={isLoading ? <Spinner color="default" size="sm" /> : "Subscribe"}
          onClick={handleSubscription}
          disabled={isLoading}
        />
      </header>
      <main>
        <div className="py-8">
          <FeaturedPosts posts={posts} />
          <RecentPosts />
          <section className=" md:px-28">
            <SuggestedPosts max={6} />
          </section>

          <div className="flex flex-col gap-4">
            <Divider />
            <div className="md:block hidden block-image br-8">
              <Subscription />
            </div>

            {/* set div with image background */}
            <div className="md:px-32 text-center flex-col gap-4">
              <FAQ />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
