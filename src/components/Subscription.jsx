import React from "react";
import { Input, Button } from "@nextui-org/react";

const Subscription = () => {
  return (
    <div className="py-16 px-4 text-center">
      <h1 className=" text-white text-3xl font-bold tracking-wider uppercase mb-4">
        Subscribe to my newsletter
      </h1>
      <p className="text-gray-200 mb-8">
        Stay up-to-date with my latest news and updates.
      </p>

      <form className="flex justify-center items-center gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="max-w-xs"
        />
        <Button className="bg-[#ff4b14] text-white" radius="sm">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Subscription;
