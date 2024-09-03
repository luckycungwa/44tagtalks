import { Button, Divider, Link } from "@nextui-org/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div>
      <div className="post-hero flex justify-center items-center">
        {/* post image */}
        <img
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero"
          className="w-full object-cover post-hero-img"
        />
        {/* post title */}
        <div className="absolute flex flex-col justify-center items-center">
          
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Join the conversation & let's inspire each other | {' '}
              <Link to="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0 cursor-pointer" />
                Share thoughts <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center flex-col gap-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase mb-4">
              H E M E O U
            </h1>
            <p className="text-md text-gray-800 px-6">Welcome to HEMEOU, where the conversation starts and ideas take flight. 
            <span className="hidden sm:inline">This is a space for unfiltered thoughts, unbridled passion, and fresh perspectives on entertainment, productivity, and culture.</span>
            </p>
           
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button auto flat color="primary" href="/post/create">
                Get Started
              </Button>
              <Link to="/about" className="text-sm font-semibold leading-6 radius-xs text-gray-900 flex gap-2  cursor-pointer">
                Learn more <span aria-hidden="true"><FiArrowRight size={20}/></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
