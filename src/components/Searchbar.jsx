import React, { useState, useEffect } from "react";
import { searchPosts } from "../services/cms-api";
import { Button, Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const searchResults = await searchPosts(searchTerm);
      setResults(searchResults);
      // Handle displaying results (e.g., update state in a parent component)
    } catch (error) {
      console.error("Error searching posts:", error);
    }
  };

  return (
    <div className="mt-4 w-full md:w-auto flex gap-2">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        isClearable
        radius="lg"
        classNames={{
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Search..."
        startContent={<FiSearch size={16} />}
      />
      <Button color="primary" onClick={handleSearch} auto>
        Search
      </Button>
    </div>
  );
};

export default Searchbar;
