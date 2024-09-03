import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const HeroSection = ({disabled, title, description, buttonText, onClick}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className="relative h-screen overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/blog-cover.jpg')" || "url('https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg')" ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        y: scrollY * 0.5,
      }}
    />
    <motion.div
      className="absolute inset-0 bg-black opacity-20"
      style={{ y: scrollY * 0.2 }}
    />
    <div className="relative z-2 flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-start md:text-center text-white px-4 md:px-0"
      >
        <h1 className="logo-text text-7xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8 px-0 md:w-2/3 mx-auto">{description}</p>
        <Button
        size="lg"
        color="primary"
        className="my-4 bg-[#ff4b14] text-white font-bold tracking-wider uppercase"
        auto
        onClick={onClick}
        disabled={disabled}
      >
          {buttonText}
        </Button>
      </motion.div>
    </div>
  </div>
    </>
  );
};

export default HeroSection;
