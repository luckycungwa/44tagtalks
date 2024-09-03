import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Divider, Input, Textarea } from "@nextui-org/react";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import OurSocials from "../components/OurSocials";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const Contacts = () => {
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

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="w-full flex flex-col justify-center items-center px-4 md:px-24 gap-4 my-8 ">
        <div>
          <p className="font-light text-xs tracking-wider uppercase text-[#ff4b14] text-center"></p>
          <h1 className="text-3xl font-bold tracking-wider uppercase">
            CONTACT US
          </h1>
          <Divider className="my-2 h-1 bg-[#1c1c1c]" />
        </div>
        {/* Google adPlacemt */}

        <Card className="flex flex-reverse px-4 md:px-8 grid grid-cols-1 md:grid-cols-2  h-full w-auto justify-center items-start gap-8 py-8 md:m-8 border border-[#2c2c2c] border-8">
          {/* Conntact form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center  md:border-r border-[#ff774d] md:pr-8"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold ">
                Let's Create Something Amazing Together
              </h1>
              <p className="font-light ">
                We'd love to hear from you. Whether it's a collaboration,
                project, or just a chat, Send us a message and we'll be in
                touch.
              </p>
            </div>
            {/* form */}
            <div className="w-full flex flex-col justify-between">
              <Input
                variant="underlined"
                type="text"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                variant="underlined"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
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
              >
                Send Message
              </Button>
            </div>
            <Divider className="md:hidden mt-2 h-1 bg-[#1c1c1c]" />
          </form>

          {/* contact info */}
          <div className="h-full w-auto flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Get In Touch</h1>
              <p className="font-light mb-4">
                As a creative agency, 44Tag Studios thrives to deliver the best
                graphic design related results for our clients. Connect & follow
                us to keep up with our latest updates.
              </p>
            </div>
            {/* Social media Info */}
            <div className="flex flex-col gap-8 text-lg py-4">
              <div className="flex gap-2 items-center ">
                <FiPhone size={20} /> <p>+27 69 494 4349</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaWhatsapp size={20} /> <p>069 494 4349</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FiMail size={20} /> <p>44tagstudios@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center ">
                <FiClock size={20} />
                <p>
                  Mon - Fri: 9am - 5pm | Sat - Sun: 9am - 3pm{" "}
                  <span className="text-[#00000066]"> (SAST - UTC +2)</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center ">
              <OurSocials />
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Contacts;
