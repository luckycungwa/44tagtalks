import { Button } from "@nextui-org/react";
import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const OurSocials = () => {
  const Socials = [
    // our social media includes facebook, Twitter/X, Tiktok, and Instagram
    {
      id: 1,
      name: "Facebook",
      link: "https://www.facebook.com/44tagstudios/",
      icon: <FiFacebook size={20}  />,
    },
    {
      id: 2,
      name: "Twitter",
      link: "https://twitter.com/44tagstudios",
      icon: <FiTwitter size={20}  />,
    },
    {
      id: 3,
      name: "Tiktok",
      link: "https://www.tiktok.com/@44tagstudios",
      icon: <FaTiktok size={20} />,
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/44tagstudios/",
      icon: <FiInstagram size={20} />,
    },
  ];

  return (
    <div className="py-4 flex w-full justify-between items-center">
      {Socials.map((social) => (
        <Button variant="bordered" color="default" isIconOnly className="flex w-auto justify-center items-center border border-[#2c2c2c] border-2 hover:border-[#ff4b14] hover:text-[#ff4b14]">
          <Link
            to={social.link}
            key={social.id}
            target="_blank"
            rel="noopener noreferrer"
           
          >
            {social.icon}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default OurSocials;
