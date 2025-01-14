import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import {
  FiFacebook,
  FiTwitter,
  FiCopy,
  FiCheck,
  FiLinkedin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";
import { Toaster, toast } from "react-hot-toast";

const ShareButton = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Copied Successfully!");
  };

  const Socials = [
    {
      id: 1,
      name: "Facebook",
      icon: <FiFacebook size={16} />,
      Button: FacebookShareButton,
      props: { url, quote: title }
    },
    {
      id: 2,
      name: "Twitter",
      icon: <FiTwitter size={16} />,
      Button: TwitterShareButton,
      props: { url, title }
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <FiLinkedin size={16} />,
      Button: LinkedinShareButton,
      props: { url, title }
    },
    {
      id: 4,
      name: "WhatsApp",
      icon: <FaWhatsapp size={16} />,
      Button: WhatsappShareButton,
      props: { url, title }
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col w-full h-auto justify-between items-center py-4">
        <div className="flex gap-2 items-center">
          {Socials.map((social) => (
            <social.Button key={social.id} {...social.props}>
              <Button
                variant="bordered"
                color="default"
                isIconOnly
                size="sm"
                className="flex w-auto justify-center items-center border border-[#2c2c2c] border-2 hover:border-[#ff4b14] hover:text-[#ff4b14]"
              >
                {social.icon}
              </Button>
            </social.Button>
          ))}
          <Button
            onClick={handleCopy}
            variant="bordered"
            color="default"
            isIconOnly
            size="sm"
            className="flex w-auto justify-center items-center border border-[#2c2c2c] border-2 hover:border-[#ff4b14] hover:bg-gray hover:text-[#ff4b14]"
          >
            {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
          </Button>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <p className="text-sm text-gray-400 pt-2">share blog post</p>
      </div>
    </div>
  );
};

export default ShareButton;