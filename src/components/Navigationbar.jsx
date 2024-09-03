import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Divider,
  Button,
} from "@nextui-org/react";
import OurSocials from "./OurSocials";
import { BiSolidDonateHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", link: "/" },
    
    { label: "Blog", link: "/blog" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "FAQ", link: "/faq" },
  ];

  const handleNavigation = (link) => {
    navigate(link);
    setIsMenuOpen(false);
  };

  return (
    <header>
    <Navbar isBordered  isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="w-full ">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="hidden sm:flex">
          <Link to="/" className="text-foreground">
            <img src="/logos/logo02.png" alt="Logo" width={32} height={32} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            isActive={location.pathname === item.link}
          >
            <Link
              to={item.link}
              className={
                location.pathname === item.link
                  ? "text-[#ff4b14]"
                  : "text-foreground"
              }
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarBrand className="flex sm:hidden justify-end">
          <Link to="/" className="text-foreground">
          <img src="/logos/logo02.png" alt="Logo" width={32} height={32} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Navigation links */}
      <NavbarMenu className="sm:hidden py-0 justify-between h-[100dvh]">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="hover:bg-[#ff4b142b] tracking-wider text-bolder h-64 items-center justify-center flex-col"
          >
            <NavbarMenuItem
              className={`w-full h-full items-center justify-center flex ${
                location.pathname === item.link
                  ? "text-[#ff4b14]"
                  : "text-foreground"
              }`}
              onClick={() => handleNavigation(item.link)}
            >
              {item.label}
            </NavbarMenuItem>
            <Divider />
          </div>
        ))}

        <div className="flex flex-col py-4">
          <h4>Follow Us</h4>
          <OurSocials />
          <Button className="bg-[#ff4b14] text-white my-4" onClick={() => handleNavigation("/contact")}>
            Support Us  <BiSolidDonateHeart/>
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
    </header>
  );
};

export default Navigationbar;
