import React, { useState } from "react";
import { searchPosts } from "../services/cms-api";
import { Button, Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return; // Prevent empty searches
    try {
      const searchResults = await searchPosts(searchTerm); // Perform search
      onSearch(searchResults); // Update search results in the parent component
    } catch (error) {
      console.error("Error searching posts:", error);
    }
  };
  

  return (
    <div className="w-full md:w-auto flex gap-2">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        isClearable
        radius="lg"
        placeholder="Search..."
        startContent={<FiSearch size={16} />}
        onKeyUp={(e) => {
           if (e.key === "Enter") handleSearch(); // Search on Enter key
        }}
      />
      <Button
        className="bg-[#ff4b14] text-white font-bold tracking-wider capitalize"
        onClick={handleSearch}
        size="xs"
      >
        Search
      </Button>
    </div>
  );
};

export default Searchbar;