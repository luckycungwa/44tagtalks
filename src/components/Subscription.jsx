import React from 'react';
import { Input, Button } from "@nextui-org/react";

const Subscription = () => {
  return (
    <div className="py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-8">Stay up to date with our latest news and products.</p>
      <form className="flex justify-center items-center gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="max-w-xs"
        />
        <Button color="primary" radius='sm'>Subscribe</Button>
      </form>
    </div>
  );
};

export default Subscription;