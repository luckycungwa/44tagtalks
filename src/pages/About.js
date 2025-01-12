import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Divider,
  Image,
} from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const About = () => {
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
    // console.log("Initializing EmailJS with Public Key:", PUBLIC_KEY); // Log the public key
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
            ABOUT US
          </h1>
          <Divider className="my-2 h-1 bg-[#1c1c1c]" />
        </div>
        {/* Google adPlacemt */}

        <Card className="flex flex-reverse px-4 md:px-8 grid grid-cols-1 md:grid-cols-2  h-full w-auto justify-center items-start gap-8 py-8 md:m-8 border border-[#2c2c2c] border-8">
          <Image
            className="FAQImage object-cover"
            alt="FAQ Abstract cover"
            src={"url('/default.jpeg')" || "https://assets.lummi.ai/assets/QmRzTnsZFsboKZnxBVGpiZQnhFyhs1JGazPdaYPPrEPi8w?auto=format&w=1500"
            }
          />
          <div className="">
            <div className="flex flex-col gap-4">
              <h3>About 44Tag Talks</h3>
              <p className="mb-8">
                Welcome to 44Tag Talks – your go-to resource for all things
                graphic design, freelancing, and creative entrepreneurship.
              </p>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <h3>My Mission </h3>
              <p className="mb-2">
                At 44Tag Talks, I am on a mission to empower, inspire, and
                educate the next generation of graphic designers and creative
                professionals. We believe in the power of shared knowledge and
                experiences, and I am here to provide you with the insights,
                tips, and strategies you need to thrive in the ever-evolving
                world of tech & design.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>What We Offer </h3>
              <div className="mb-8 flex flex-col gap-2">
                <p>
                  My blog is a treasure trove of content designed to help you
                  navigate the exciting but often challenging landscape of
                  graphic design and freelancing:
                </p>
                <ul className="flex flex-col gap-2">
                  <li>
                    <b>Industry Insights:</b> Stay ahead of the curve with my
                    analysis of the latest trends and technologies shaping the
                    design world.
                  </li>
                  <li>
                    <b>Freelancing Tips:</b> From landing your first client to
                    scaling your brand/ business, I share practical advice for
                    freelance success.
                  </li>
                  <li>
                    <b> Design Tutorials:</b> Enhance your skills with my
                    step-by-step guides and video tutorials covering various
                    design techniques and software.
                  </li>
                  <li>
                    <b>Business Strategies:</b> Learn how to price your
                    services, market your skills, and build a sustainable design
                    business.
                  </li>
                  <li>
                    <b>Creative Inspiration:</b> Get your creative juices
                    flowing with showcases of innovative design work and
                    interviews with industry leaders.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <h3>Join My Community</h3>
                <p>
                  It's more than just a blog – It's a community of passionate
                  creatives. By subscribing to 44Tag Talks, you're not just
                  getting access to great content; you're becoming part of a
                  supportive network of fellow designers, creatives and entrepreneurs.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3>Let's Grow Together</h3>
                <p>
                Whether you're a seasoned professional looking to stay on top of industry trends, a freelancer trying to build your business, or a design student eager to learn, 44Tag Talks is here for you. Subscribe today and join us on this exciting journey of growth, creativity, and success.
                Remember, in the world of design, learning never stops. 
                </p>So let's keep talking, sharing, and creating together at 44Tag Talks!
              </div>
            </div>

            
          </div>
        </Card>
      </section>
    </>
  );
};

export default About;
