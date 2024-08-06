import React from 'react';
import { Container, Input, Button } from "@nextui-org/react";

const Subscription = () => {
  return (
    <Container className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-8">Stay up to date with our latest news and products.</p>
      <form className="flex justify-center items-center gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="max-w-xs"
        />
        <Button color="primary">Subscribe</Button>
      </form>
    </Container>
  );
};

export default Subscription;