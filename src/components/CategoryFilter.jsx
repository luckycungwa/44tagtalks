import React, { useState, useEffect } from "react";
import { Chip } from '@nextui-org/react';
import { getCategories } from "../services/cms-api";

const CategoryFilter = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        if (Array.isArray(fetchedCategories.docs)) {
          setCategories([{ id: 'all', name: 'All' }, ...fetchedCategories.docs]);
        } else {
          console.error("Unexpected response structure:", fetchedCategories);
          setCategories([]); // Handle unexpected structure
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleFilter = (categoryId) => {
    onFilter(categoryId); // Call onFilter with the selected category ID
  };

  return (
    <div className='flex gap-2 flex-wrap justify-center font-light text-sm'>
      {categories.map((category) => (
        <Chip key={category.id} onClick={() => handleFilter(category.id)}>
          {category.name}
        </Chip>
      ))}
    </div>
  );
};

export default CategoryFilter;
