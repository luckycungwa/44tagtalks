import React from "react";
import {
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Dropdown,
  Avatar,
  Navbar,
  NavbarContent,
} from "@nextui-org/react";
import {
  FiBookmark,
  FiHelpCircle,
  FiLogOut,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserAvatar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from AuthContext
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Navbar>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={user?.username || "User"}
              size="sm"
              src={user?.image || "https://i.pravatar.cc/150?u=a042581f4e29026704d"}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings" startContent={<FiSettings size={20} />}>
              My Settings
            </DropdownItem>
            <DropdownItem key="team_settings" startContent={<FiUser size={20} />}>
              Team Settings
            </DropdownItem>
            <DropdownItem key="analytics" startContent={<FiBookmark size={20} />}>
              Analytics
            </DropdownItem>
            <DropdownItem key="help_and_feedback" startContent={<FiHelpCircle size={20} />}>
              Help & Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger" startContent={<FiLogOut size={20} />} onClick={handleLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default UserAvatar;