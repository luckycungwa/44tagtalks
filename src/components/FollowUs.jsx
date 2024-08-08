import { Button } from '@nextui-org/react';
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const FollowUs = () => {

    const socialLinks = [
        {
            id: 1,
            name: "Facebook",
            socialLink: "https://www.facebook.com/",
            icon: <FiFacebook size={16} />
        },
        {
            id: 2,
            name: "Twitter / X",
            socialLink: "https://x.com/",
            icon: <FiTwitter size={16} />
        },
        {
            id: 3,
            name: "Instagram",
            socialLink: "https://www.instagram.com/",
            icon: <FiInstagram size={16} />
        },
        {
            id: 4,
            name: "Linkedin",
            socialLink: "https://www.linkedin.com/",
            icon: <FiLinkedin size={16} />
        },
    ]

    const handleClick = () => {
        // navigate to social link
        
        console.log("clicked");
    }

    return (
        <div className='flex flex-col my-4'>
        <p>Follow Us</p>
             <div className="flex gap-4 items-center my-2">
                {socialLinks.map((link) => (
                    <div key={link.id} className="flex gap-2 items-center">
                    <Button
                    size="sm"
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label={link.name}
                    // open social link on new window
                    onClick={() => window.open(link.socialLink, "_blank")}
                  >
                    {link.icon}
                  </Button>
                    {/* <p>{link.name}</p> */}
                    </div>
                ))}
              </div> 
        </div>
    );
}

export default FollowUs;
