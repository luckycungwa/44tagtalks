import React, { useState, useRef, useEffect } from "react";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const ContactForm = ({ buttonText }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  // fetch data for emailjs from .env file
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

  // Initialize EmailJS with the public key
  useEffect(() => {
    console.log("Initializing EmailJS with Public Key:", PUBLIC_KEY); // Log the public key
    emailjs.init(PUBLIC_KEY);
}, [PUBLIC_KEY]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      to_name: name,
      from_name: email,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((result) => {
        console.log(result.text);
        setName("");
        setEmail("");
        setMessage("");
        toast.success('Message sent successfully!')
      }, (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <form
      ref={form}
      className="flex flex-col gap-4 justify-center grid grid-cols-1 md:grid-cols-2 py-8 px-4 md:px-0"
      onSubmit={handleSubmit}
    >
      <div className="">
        <Image src="/contact.png" className="w-full" />
      </div>

      <div className="w-full flex flex-col justify-between md:border-l border-[#ff774d] md:pl-8">
        <Input
          name="user_name"
          required
          variant="underlined"
          type="text"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="user_email"
          required
          variant="underlined"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          name="message"
          required
          label="Message"
          labelPlacement="outside"
          variant="underlined"
          className="mt-4 text-start"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button 
          className="mt-4 bg-[#ff4b14] text-white font-bold tracking-wider uppercase" 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : buttonText}
        </Button>
      </div>
    </form>
    </>
  );
};

export default ContactForm;