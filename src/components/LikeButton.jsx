import React from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { FiHeart } from "react-icons/fi";

const LikeButton = ({ postId }) => {
  const { user } = useAuth();

  const handleLike = async () => {
    if (!user) {
      alert("You must be logged in to like a post.");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/like/${postId}`
      );
      alert("Post liked successfully");
    } catch (error) {
      console.error("Error liking post:", error);
      alert("Failed to like the post");
    }
  };

  return (
    <Button
      size="sm"
      isIconOnly
      color="default"
      variant="faded"
      aria-label="Likes"
      onClick={handleLike}
    >
      <FiHeart size={16} />
    </Button>
  );
};

export default LikeButton;
