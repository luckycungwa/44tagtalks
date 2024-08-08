import React from 'react';
import { Button, Image } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="py-16">
      <div className="items-center">
        <div span={6}>
          <h1 className="text-5xl font-bold mb-4">Welcome to ACME</h1>
          <p className="text-xl text-gray-600 mb-8">Empowering your business with cutting-edge solutions.</p>
          <Button color="primary" size="lg">Get Started</Button>
        </div>
        <div span={6}>
          <Image
            alt="Hero image"
            src="https://placeimg.com/1000/1000/tech"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;